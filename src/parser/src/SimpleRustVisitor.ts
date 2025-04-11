// Generated from src/SimpleRust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./SimpleRustParser.js";
import { FunctionContext } from "./SimpleRustParser.js";
import { BlockContext } from "./SimpleRustParser.js";
import { Parameter_listContext } from "./SimpleRustParser.js";
import { ParameterContext } from "./SimpleRustParser.js";
import { TypeContext } from "./SimpleRustParser.js";
import { StatementContext } from "./SimpleRustParser.js";
import { Variable_declarationContext } from "./SimpleRustParser.js";
import { Expression_statementContext } from "./SimpleRustParser.js";
import { ExpressionContext } from "./SimpleRustParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SimpleRustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SimpleRustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SimpleRustParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.parameter_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_list?: (ctx: Parameter_listContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.variable_declaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariable_declaration?: (ctx: Variable_declarationContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.expression_statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression_statement?: (ctx: Expression_statementContext) => Result;
    /**
     * Visit a parse tree produced by `SimpleRustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
}

