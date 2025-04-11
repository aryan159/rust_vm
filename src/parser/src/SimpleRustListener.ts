// Generated from src/SimpleRust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `SimpleRustParser`.
 */
export class SimpleRustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SimpleRustParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.parameter_list`.
     * @param ctx the parse tree
     */
    enterParameter_list?: (ctx: Parameter_listContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.parameter_list`.
     * @param ctx the parse tree
     */
    exitParameter_list?: (ctx: Parameter_listContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.variable_declaration`.
     * @param ctx the parse tree
     */
    enterVariable_declaration?: (ctx: Variable_declarationContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.variable_declaration`.
     * @param ctx the parse tree
     */
    exitVariable_declaration?: (ctx: Variable_declarationContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.expression_statement`.
     * @param ctx the parse tree
     */
    enterExpression_statement?: (ctx: Expression_statementContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.expression_statement`.
     * @param ctx the parse tree
     */
    exitExpression_statement?: (ctx: Expression_statementContext) => void;
    /**
     * Enter a parse tree produced by `SimpleRustParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `SimpleRustParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

