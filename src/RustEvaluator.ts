import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import {
  CharStream,
  CommonTokenStream,
  AbstractParseTreeVisitor,
} from "antlr4ng";
import { SimpleRustLexer } from "./parser/src/SimpleRustLexer";
import {
  StatementContext,
  SimpleRustParser,
  ProgramContext,
  FunctionContext,
  BlockContext,
  ExpressionContext,
  Variable_declarationContext,
} from "./parser/src/SimpleRustParser";
import { SimpleRustVisitor } from "./parser/src/SimpleRustVisitor";
import { getRandomValues } from "crypto";

class Variable {
  is_mut: boolean;
  is_moved: boolean;
  mut_refs: number;
  immut_refs: number;
  name: string;
  cur_env: Env;
  maybe_vector: Vector | null;

  constructor(
    name: string,
    is_mut: boolean,
    mut_refs: number = 0,
    immut_refs: number = 0
  ) {
    this.name = name;
    this.is_mut = is_mut;
    this.mut_refs = mut_refs;
    this.immut_refs = immut_refs;
    this.is_moved = false;
  }
}

class Reference {
  variable: Variable;
  is_mut: boolean;
  name: string;
  cur_env: Env;

  constructor(variable: Variable, is_mut: boolean, name: string) {
    this.variable = variable;
    this.is_mut = is_mut;
    this.name = name;

    add_reference(envs, variable, name, is_mut);
  }
}

class Vector {
  type: "owner" | "immut_ref" | "mut_ref";
  elements: Variable[] | Reference[];
}

class Env {
  vars: Variable[];
  refs: Reference[];
  vectors: Vector[];

  constructor() {
    this.vars = [];
    this.refs = [];
    this.vectors = [];
  }
}

type ExprResult =
  | { type: "mut_ref"; name: string; orig_var: Variable; reference: Reference }
  | {
      type: "immut_ref";
      name: string;
      orig_var: Variable;
      reference: Reference;
    }
  | { type: "number"; val: number }
  | { type: "vec"; vec: Vector }
  | { type: "move_ownership"; orig_var: Variable }
  | { type: "null" };

function get_variable(
  envs: Env[],
  name: string,
  options?: { ignore_moved?: boolean }
): Variable {
  const ignoreMoved = options?.ignore_moved ?? false;

  for (let i = envs.length - 1; i >= 0; i--) {
    for (let variable of envs[i].vars) {
      if (variable.name === name) {
        if (variable.is_moved && !ignoreMoved) {
          throw new Error(`Variable '${name}' has already been moved`);
        }
        return variable;
      }
    }
  }

  throw new Error(`Variable '${name}' not found`);
}

function add_variable(envs: Env[], variable: Variable): void {
  envs[envs.length - 1].vars.push(variable);
  variable.cur_env = envs[envs.length - 1];
}

function add_env_scope(envs: Env[]): void {
  envs.push(new Env());
}

function remove_env_scope(envs: Env[]): void {
  const env = envs[envs.length - 1];
  for (const ref of env.refs) {
    if (ref.is_mut) {
      ref.variable.mut_refs--;
    } else {
      ref.variable.immut_refs--;
    }
  }
  for (const vector of env.vectors) {
    for (const element of vector.elements) {
      if (element instanceof Reference) {
        if (element.is_mut) {
          element.variable.mut_refs--;
        } else {
          element.variable.immut_refs--;
        }
      }
    }
  }
  envs.pop();
}

function add_reference(
  envs: Env[],
  orig_variable: Variable,
  var_name: string,
  is_mut: boolean
): void {
  if (is_mut && orig_variable.immut_refs > 0) {
    throw new Error(
      "Cannot create a mutable reference when an immutable reference already exists"
    );
  }

  if (is_mut && orig_variable.mut_refs > 0) {
    throw new Error("Can only have one mutable reference at a time");
  }

  if (!is_mut && orig_variable.mut_refs > 0) {
    throw new Error(
      "Cannot create an immutable reference when a mutable reference already exists"
    );
  }

  const new_reference = new Reference(orig_variable, is_mut, var_name);
  envs[envs.length - 1].refs.push(new_reference);

  if (is_mut) {
    orig_variable.mut_refs += 1;
  } else {
    orig_variable.immut_refs += 1;
  }
}

function move_ownership(
  envs: Env[],
  orig_variable: Variable,
  new_var_name: string
): void {
  if (orig_variable.is_moved) {
    throw new Error(`Variable '${orig_variable.name}' has already been moved`);
  }

  if (orig_variable.immut_refs + orig_variable.mut_refs > 0) {
    throw new Error(
      `Variable '${orig_variable.name}' already has references to it. It cannot be moved.`
    );
  }

  const new_variable = new Variable(new_var_name, orig_variable.is_mut);

  orig_variable.is_moved = true;
  envs[envs.length - 1].vars.push(new_variable);
}

type Parameter =
  | { type: "immut_ref"; name: string }
  | { type: "mut_ref"; name: string }
  | { type: "move"; name: string };

class Function {
  name: string;
  parameters: Parameter[];
  block: BlockContext;

  constructor(name: string, parameters: Parameter[], block: BlockContext) {
    this.name = name;
    this.parameters = parameters;
    this.block = block;
  }
}

// GLOBAL STUFF
let envs: Env[] = [];
add_env_scope(envs);

let visitedFunctions: Function[] = [];

class RustEvaluatorVisitor
  extends AbstractParseTreeVisitor<any>
  implements SimpleRustVisitor<any>
{
  visitProgram(ctx: ProgramContext): number {
    console.log("[visitProgram]");
    console.log(ctx);

    for (var function_ of ctx.function_()) {
      this.visitFunction(function_);
    }

    let func_main = visitedFunctions.find((func) => func.name === "main");

    if (!func_main) {
      throw new Error("Function 'main' not found");
    }

    this.visitBlock(func_main.block);

    return 57;
  }

  visitFunction(ctx: FunctionContext): void {
    console.log("[visitFunction]");
    console.log(ctx);

    let params: Parameter[] = [];
    if (ctx.parameter_list()) {
      for (var param of ctx.parameter_list().parameter()) {
        if (param.getChildCount() == 5) {
          params.push({ type: "mut_ref", name: param.IDENTIFIER().getText() });
        } else if (param.getChildCount() == 4) {
          params.push({
            type: "immut_ref",
            name: param.IDENTIFIER().getText(),
          });
        } else if (param.getChildCount() == 3) {
          params.push({ type: "move", name: param.IDENTIFIER().getText() });
        } else {
          console.log("[Error] 73");
        }
        console.log(param.IDENTIFIER().getText());
      }
    }

    visitedFunctions.push(
      new Function(ctx.IDENTIFIER().getText(), params, ctx.block())
    );
  }

  visitBlock(ctx: BlockContext): ExprResult {
    add_env_scope(envs);
    let visitedStatements = ctx.statement().map((x) => this.visitStatement(x));
    remove_env_scope(envs);

    if (visitedStatements.length > 0) {
      return visitedStatements[visitedStatements.length - 1];
    }

    return { type: "null" };
  }

  visitStatement(ctx: StatementContext): ExprResult {
    if (ctx.variable_declaration()) {
      return this.visitVariable_declaration(ctx.variable_declaration());
    } else if (ctx.expression_statement()) {
      return this.visitExpression(ctx.expression_statement().expression());
    } else {
      console.log("[ERROR] 1");
    }
  }

  visitVariable_declaration(ctx: Variable_declarationContext): ExprResult {
    console.log("[visitVariable_declaration]");
    let is_mut = ctx.getChildCount() == 8;
    let var_name = ctx.IDENTIFIER().getText();

    let expr = this.visitExpression(ctx.expression());
    if (expr.type === "mut_ref" || expr.type === "immut_ref") {
      // empty
    } else if (expr.type == "number") {
      const new_variable = new Variable(var_name, is_mut);
      envs[envs.length - 1].vars.push(new_variable);
    } else if (expr.type == "vec") {
      envs[envs.length - 1].vectors.push(expr.vec);
      const new_variable = new Variable(var_name, is_mut);
      new_variable.maybe_vector = expr.vec;
      envs[envs.length - 1].vars.push(new_variable);
      if (["immut_ref", "mut_ref"].includes(expr.vec.type)) {
        for (var exp of expr.vec.elements) {
          if (!(exp instanceof Reference)) {
            throw new Error("Expected exp to be of type Reference");
          }
        }
      } else if (expr.vec.type == "owner") {
      } else {
        console.log(`[Error] 61. ${expr.vec.type}`);
      }
    } else {
      console.log(`[Error] 24. ${expr.type}`);
    }

    return { type: "null" };
  }

  visitExpression(ctx: ExpressionContext): ExprResult {
    console.log("[visitExpression] " + ctx.getText());
    if (ctx.getChildCount() == 5) {
      console.log("[.push()]");
      // vec push. must do lifetime check
      let vector_variable = get_variable(envs, ctx.IDENTIFIER().getText());
      let expr_value = this.visitExpression(ctx.expression()[0]);
      if (["mut_ref", "immut_ref"].includes(expr_value.type)) {
        if (
          !["mut_ref", "immut_ref"].includes(vector_variable.maybe_vector.type)
        ) {
          throw new Error(
            `Tried to assign expression of type ${expr_value.type} to vector of type ${vector_variable.maybe_vector.type}`
          );
        }
        let vector_variable_env_pos = envs.findIndex((env) =>
          env.vars.includes(vector_variable)
        );
        // @ts-ignore ive already checked that its a ref type
        let original_owner_of_ref = expr_value.orig_var;
        let original_owner_of_ref_pos = envs.findIndex((env) =>
          env.vars.includes(original_owner_of_ref)
        );
        if (vector_variable_env_pos < original_owner_of_ref_pos) {
          let vec_name = ctx.IDENTIFIER().getText();
          throw new Error(
            `Cannot push ${expr_value} into ${vec_name} because the lifetime of ${vec_name} exceeds that of  ${expr_value}`
          );
        }
        let vector = vector_variable.maybe_vector;
        // @ts-ignore
        vector.elements.push(expr_value.reference);
      }
    } else if (ctx.getChildCount() == 4) {
      if (ctx.getChild(0).getText() == "vec!") {
        let expr_vals: ExprResult[] = [];
        for (var expr of ctx.expression_list().expression()) {
          expr_vals.push(this.visitExpression(expr));
        }
        const new_vector = new Vector();
        if (expr_vals.every((val) => val.type === "immut_ref")) {
          new_vector.type = "immut_ref";
          let references: Reference[] = [];
          for (let val of expr_vals) {
            references.push(
              new Reference(val.orig_var, false, "NO_NAME_BECAUSE_VEC_ELEMENT")
            );
          }
          new_vector.elements = references;
          return { type: "vec", vec: new_vector };
        } else if (expr_vals.every((val) => val.type === "mut_ref")) {
          new_vector.type = "mut_ref";
          let references: Reference[] = [];
          for (let val of expr_vals) {
            references.push(
              new Reference(val.orig_var, true, "NO_NAME_BECAUSE_VEC_ELEMENT")
            );
          }
          new_vector.elements = references;
          return { type: "vec", vec: new_vector };
        } else if (
          expr_vals.every((val) =>
            ["number", "move_ownership"].includes(val.type)
          )
        ) {
          new_vector.type = "owner";
          let variables: Variable[] = [];
          for (let val of expr_vals) {
            // TODO: currently unsure if these should be mutable (referring to "true")
            variables.push(new Variable("NO_NAME_BECAUSE_VEC_ELEMENT", true));
          }
          new_vector.elements = variables;
          return { type: "vec", vec: new_vector };
        } else {
          throw new Error(
            `All elements in the vector must be of the same type. Types found: ${expr_vals}`
          );
        }
      } else {
        // func application
        let func_name = ctx.IDENTIFIER();

        let func = visitedFunctions.find((f) => f.name === func_name.getText());
        if (!func) {
          throw new Error(`Function '${func_name.getText()}' not found`);
        }

        let args = ctx.expression_list().expression();
        let visited_args = args.map((x) => this.visitExpression(x));

        if (func.parameters.length !== args.length) {
          throw new Error(
            "Number of parameters is not equal to number of arguments"
          );
        }

        add_env_scope(envs);

        for (let i = 0; i < func.parameters.length; i++) {
          let param = func.parameters[i];
          let arg = visited_args[i];
          if (param.type == "immut_ref" && arg.type == "immut_ref") {
            // empty
          } else if (param.type == "mut_ref" && arg.type == "mut_ref") {
            // empty
          } else if (param.type == "move" && arg.type == "move_ownership") {
            move_ownership(envs, arg.orig_var, param.name);
          } else {
            throw new Error(
              `Parameter - Argument type mismatch. Expected: ${param.type}, but got: ${arg.type}`
            );
          }
        }
        remove_env_scope(envs);
      }
    } else if (ctx.getChildCount() == 3) {
      if (ctx.getChild(0).getText() == "(") {
        return this.visit(ctx.getChild(1));
      } else if (["+", "-"].includes(ctx.getChild(1).getText())) {
        let val1 = this.visit(ctx.getChild(0));
        let val2 = this.visit(ctx.getChild(2));
        if (ctx.getChild(1).getText() == "+") {
          return { type: "number", val: val1 + val2 };
        } else if (ctx.getChild(1).getText() == "-") {
          return { type: "number", val: val1.val - val2.val };
        } else {
          console.log("[ERROR] 3");
        }
      } else if (ctx.getChild(1).getText() == "=") {
        let variable = get_variable(envs, ctx.IDENTIFIER().getText(), {
          ignore_moved: true,
        });
        if (!variable.is_mut) {
          throw new Error(
            `Cannot assign to ${variable.name} because it is immutable`
          );
        }

        let expr_value = this.visitExpression(ctx.expression()[0]);
        if (variable.is_moved == true) {
          variable.is_moved = false;
        } else {
          // live variable
          if (variable.mut_refs + variable.immut_refs > 0) {
            throw new Error(
              `Cannot modify ${variable.name} since there exist references to it.`
            );
          }
        }
        if (expr_value.type == "move_ownership") {
          expr_value.orig_var.is_moved = true;
        }
      } else {
        console.log("[ERROR] 2");
        for (let i = 0; i < ctx.getChildCount(); i++) {
          console.log(ctx.getChild(i).getText());
        }
        console.log("[ERROR] 2 done");
      }
    } else if (ctx.getChildCount() == 2) {
      if (ctx.getChild(0).getText() == "&") {
        return {
          type: "immut_ref",
          name: ctx.getChild(1).getText(),
          orig_var: get_variable(envs, ctx.getChild(1).getText()),
          reference: new Reference(
            get_variable(envs, ctx.getChild(1).getText()),
            false,
            ctx.getChild(1).getText()
          ),
        };
      } else if (ctx.getChild(0).getText() == "&mut") {
        return {
          type: "mut_ref",
          name: ctx.getChild(1).getText(),
          orig_var: get_variable(envs, ctx.getChild(1).getText()),
          reference: new Reference(
            get_variable(envs, ctx.getChild(1).getText()),
            true,
            ctx.getChild(1).getText()
          ),
        };
      } else {
        console.log("[Error] 4");
      }
    } else if (ctx.getChildCount() == 1) {
      if (ctx.IDENTIFIER()) {
        let orig_var = get_variable(envs, ctx.IDENTIFIER().getText());
        return { type: "move_ownership", orig_var };
      } else if (ctx.NUMBER()) {
        return { type: "number", val: parseInt(ctx.NUMBER().getText(), 10) };
      }
    } else {
      console.log("[Error] 85");
      console.log(ctx.getChildCount());
      for (let i = 0; i < ctx.getChildCount(); i++) {
        console.log(ctx.getChild(i).getText());
      }
    }

    return { type: "number", val: 40 };
  }

  // Visit a parse tree produced by SimpleLangParser#statement
  // visitStatement(ctx: StatementContext): number {
  //     console.log("hi aryan")
  //     console.log(ctx)
  //     return 42;
  // }

  // Visit a parse tree produced by SimpleLangParser#expression
  // visitExpression(ctx: ExpressionContext): number {
  //     if (ctx.getChildCount() === 1) {
  //         // INT case
  //         return parseInt(ctx.getText());
  //     } else if (ctx.getChildCount() === 3) {
  //         if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
  //             // Parenthesized expression
  //             return this.visit(ctx.getChild(1) as ExpressionContext);
  //         } else {
  //             // Binary operation
  //             const left = this.visit(ctx.getChild(0) as ExpressionContext);
  //             const op = ctx.getChild(1).getText();
  //             const right = this.visit(ctx.getChild(2) as ExpressionContext);

  //             switch (op) {
  //                 case '+': return left + right;
  //                 case '-': return left - right;
  //                 case '*': return left * right;
  //                 case '/':
  //                     if (right === 0) {
  //                         throw new Error("Division by zero");
  //                     }
  //                     return left / right;
  //                 default:
  //                     throw new Error(`Unknown operator: ${op}`);
  //             }
  //         }
  //     }

  //     throw new Error(`Invalid expression: ${ctx.getText()}`);
  // }

  // Override the default result method from AbstractParseTreeVisitor
  protected defaultResult(): number {
    return 0;
  }

  // Override the aggregate result method
  protected aggregateResult(aggregate: number, nextResult: number): number {
    return nextResult;
  }
}

export class RustEvaluator extends BasicEvaluator {
  private executionCount: number;
  private visitor: RustEvaluatorVisitor;

  constructor(conductor: IRunnerPlugin) {
    super(conductor);
    this.executionCount = 0;
    this.visitor = new RustEvaluatorVisitor();
  }

  async evaluateChunk(chunk: string): Promise<void> {
    this.executionCount++;
    try {
      // Create the lexer and parser
      const inputStream = CharStream.fromString(chunk);
      const lexer = new SimpleRustLexer(inputStream);
      const tokenStream = new CommonTokenStream(lexer);
      const parser = new SimpleRustParser(tokenStream);

      // Parse the input
      const tree = parser.program();

      // Evaluate the parsed tree
      const result = this.visitor.visit(tree);

      // Send the result to the REPL
      this.conductor.sendOutput(`Result of expression: ${result}`);
    } catch (error) {
      // Handle errors and send them to the REPL
      if (error instanceof Error) {
        this.conductor.sendOutput(`Error: ${error.message}`);
      } else {
        this.conductor.sendOutput(`Error: ${String(error)}`);
      }
    }
  }
}
