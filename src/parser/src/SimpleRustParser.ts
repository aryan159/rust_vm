// Generated from src/SimpleRust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SimpleRustListener } from "./SimpleRustListener.js";
import { SimpleRustVisitor } from "./SimpleRustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SimpleRustParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly IDENTIFIER = 20;
    public static readonly NUMBER = 21;
    public static readonly STRING = 22;
    public static readonly BOOLEAN = 23;
    public static readonly WHITESPACE = 24;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_block = 2;
    public static readonly RULE_parameter_list = 3;
    public static readonly RULE_parameter = 4;
    public static readonly RULE_type = 5;
    public static readonly RULE_statement = 6;
    public static readonly RULE_variable_declaration = 7;
    public static readonly RULE_expression_statement = 8;
    public static readonly RULE_expression = 9;

    public static readonly literalNames = [
        null, "'fn'", "'('", "')'", "'->'", "'{'", "'}'", "','", "':'", 
        "'mut'", "'&'", "'i32'", "'f64'", "'bool'", "'String'", "'let'", 
        "'='", "';'", "'+'", "'-'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, "IDENTIFIER", 
        "NUMBER", "STRING", "BOOLEAN", "WHITESPACE"
    ];
    public static readonly ruleNames = [
        "program", "function", "block", "parameter_list", "parameter", "type", 
        "statement", "variable_declaration", "expression_statement", "expression",
    ];

    public get grammarFileName(): string { return "SimpleRust.g4"; }
    public get literalNames(): (string | null)[] { return SimpleRustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleRustParser.symbolicNames; }
    public get ruleNames(): string[] { return SimpleRustParser.ruleNames; }
    public get serializedATN(): number[] { return SimpleRustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SimpleRustParser._ATN, SimpleRustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, SimpleRustParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 23;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 20;
                this.function_();
                }
                }
                this.state = 25;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 26;
            this.match(SimpleRustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): FunctionContext {
        let localContext = new FunctionContext(this.context, this.state);
        this.enterRule(localContext, 2, SimpleRustParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 28;
            this.match(SimpleRustParser.T__0);
            this.state = 29;
            this.match(SimpleRustParser.IDENTIFIER);
            this.state = 30;
            this.match(SimpleRustParser.T__1);
            this.state = 32;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 31;
                this.parameter_list();
                }
            }

            this.state = 34;
            this.match(SimpleRustParser.T__2);
            this.state = 35;
            this.match(SimpleRustParser.T__3);
            this.state = 36;
            this.type_();
            this.state = 37;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 4, SimpleRustParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 39;
            this.match(SimpleRustParser.T__4);
            this.state = 43;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 15761412) !== 0)) {
                {
                {
                this.state = 40;
                this.statement();
                }
                }
                this.state = 45;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 46;
            this.match(SimpleRustParser.T__5);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameter_list(): Parameter_listContext {
        let localContext = new Parameter_listContext(this.context, this.state);
        this.enterRule(localContext, 6, SimpleRustParser.RULE_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 48;
            this.parameter();
            this.state = 53;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 49;
                this.match(SimpleRustParser.T__6);
                this.state = 50;
                this.parameter();
                }
                }
                this.state = 55;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 8, SimpleRustParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.match(SimpleRustParser.IDENTIFIER);
            this.state = 57;
            this.match(SimpleRustParser.T__7);
            this.state = 59;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 58;
                this.match(SimpleRustParser.T__8);
                }
            }

            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 61;
                this.match(SimpleRustParser.T__9);
                }
            }

            this.state = 64;
            this.type_();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public type_(): TypeContext {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 10, SimpleRustParser.RULE_type);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30720) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 12, SimpleRustParser.RULE_statement);
        try {
            this.state = 70;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleRustParser.T__14:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 68;
                this.variable_declaration();
                }
                break;
            case SimpleRustParser.T__1:
            case SimpleRustParser.IDENTIFIER:
            case SimpleRustParser.NUMBER:
            case SimpleRustParser.STRING:
            case SimpleRustParser.BOOLEAN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 69;
                this.expression_statement();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variable_declaration(): Variable_declarationContext {
        let localContext = new Variable_declarationContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleRustParser.RULE_variable_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
            this.match(SimpleRustParser.T__14);
            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 73;
                this.match(SimpleRustParser.T__8);
                }
            }

            this.state = 76;
            this.match(SimpleRustParser.IDENTIFIER);
            this.state = 77;
            this.match(SimpleRustParser.T__7);
            this.state = 78;
            this.type_();
            this.state = 79;
            this.match(SimpleRustParser.T__15);
            this.state = 80;
            this.expression(0);
            this.state = 81;
            this.match(SimpleRustParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expression_statement(): Expression_statementContext {
        let localContext = new Expression_statementContext(this.context, this.state);
        this.enterRule(localContext, 16, SimpleRustParser.RULE_expression_statement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.expression(0);
            this.state = 84;
            this.match(SimpleRustParser.T__16);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 18;
        this.enterRecursionRule(localContext, 18, SimpleRustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 8, this.context) ) {
            case 1:
                {
                this.state = 87;
                this.match(SimpleRustParser.IDENTIFIER);
                }
                break;
            case 2:
                {
                this.state = 88;
                this.match(SimpleRustParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 89;
                this.match(SimpleRustParser.STRING);
                }
                break;
            case 4:
                {
                this.state = 90;
                this.match(SimpleRustParser.BOOLEAN);
                }
                break;
            case 5:
                {
                this.state = 91;
                this.match(SimpleRustParser.T__1);
                this.state = 92;
                this.expression(0);
                this.state = 93;
                this.match(SimpleRustParser.T__2);
                }
                break;
            case 6:
                {
                this.state = 95;
                this.match(SimpleRustParser.IDENTIFIER);
                this.state = 96;
                this.match(SimpleRustParser.T__15);
                this.state = 97;
                this.expression(1);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 105;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, SimpleRustParser.RULE_expression);
                    this.state = 100;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 101;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 18 || _la === 19)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 102;
                    this.expression(3);
                    }
                    }
                }
                this.state = 107;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 9:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,24,109,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,
        0,1,1,1,1,1,1,1,1,3,1,33,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,5,2,42,
        8,2,10,2,12,2,45,9,2,1,2,1,2,1,3,1,3,1,3,5,3,52,8,3,10,3,12,3,55,
        9,3,1,4,1,4,1,4,3,4,60,8,4,1,4,3,4,63,8,4,1,4,1,4,1,5,1,5,1,6,1,
        6,3,6,71,8,6,1,7,1,7,3,7,75,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,
        1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,99,8,
        9,1,9,1,9,1,9,5,9,104,8,9,10,9,12,9,107,9,9,1,9,0,1,18,10,0,2,4,
        6,8,10,12,14,16,18,0,2,1,0,11,14,1,0,18,19,112,0,23,1,0,0,0,2,28,
        1,0,0,0,4,39,1,0,0,0,6,48,1,0,0,0,8,56,1,0,0,0,10,66,1,0,0,0,12,
        70,1,0,0,0,14,72,1,0,0,0,16,83,1,0,0,0,18,98,1,0,0,0,20,22,3,2,1,
        0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,
        1,0,0,0,25,23,1,0,0,0,26,27,5,0,0,1,27,1,1,0,0,0,28,29,5,1,0,0,29,
        30,5,20,0,0,30,32,5,2,0,0,31,33,3,6,3,0,32,31,1,0,0,0,32,33,1,0,
        0,0,33,34,1,0,0,0,34,35,5,3,0,0,35,36,5,4,0,0,36,37,3,10,5,0,37,
        38,3,4,2,0,38,3,1,0,0,0,39,43,5,5,0,0,40,42,3,12,6,0,41,40,1,0,0,
        0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,46,1,0,0,0,45,43,
        1,0,0,0,46,47,5,6,0,0,47,5,1,0,0,0,48,53,3,8,4,0,49,50,5,7,0,0,50,
        52,3,8,4,0,51,49,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,0,53,54,1,0,0,
        0,54,7,1,0,0,0,55,53,1,0,0,0,56,57,5,20,0,0,57,59,5,8,0,0,58,60,
        5,9,0,0,59,58,1,0,0,0,59,60,1,0,0,0,60,62,1,0,0,0,61,63,5,10,0,0,
        62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,64,65,3,10,5,0,65,9,1,
        0,0,0,66,67,7,0,0,0,67,11,1,0,0,0,68,71,3,14,7,0,69,71,3,16,8,0,
        70,68,1,0,0,0,70,69,1,0,0,0,71,13,1,0,0,0,72,74,5,15,0,0,73,75,5,
        9,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,5,20,0,0,77,
        78,5,8,0,0,78,79,3,10,5,0,79,80,5,16,0,0,80,81,3,18,9,0,81,82,5,
        17,0,0,82,15,1,0,0,0,83,84,3,18,9,0,84,85,5,17,0,0,85,17,1,0,0,0,
        86,87,6,9,-1,0,87,99,5,20,0,0,88,99,5,21,0,0,89,99,5,22,0,0,90,99,
        5,23,0,0,91,92,5,2,0,0,92,93,3,18,9,0,93,94,5,3,0,0,94,99,1,0,0,
        0,95,96,5,20,0,0,96,97,5,16,0,0,97,99,3,18,9,1,98,86,1,0,0,0,98,
        88,1,0,0,0,98,89,1,0,0,0,98,90,1,0,0,0,98,91,1,0,0,0,98,95,1,0,0,
        0,99,105,1,0,0,0,100,101,10,2,0,0,101,102,7,1,0,0,102,104,3,18,9,
        3,103,100,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,
        0,106,19,1,0,0,0,107,105,1,0,0,0,10,23,32,43,53,59,62,70,74,98,105
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleRustParser.__ATN) {
            SimpleRustParser.__ATN = new antlr.ATNDeserializer().deserialize(SimpleRustParser._serializedATN);
        }

        return SimpleRustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleRustParser.literalNames, SimpleRustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleRustParser.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleRustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SimpleRustParser.EOF, 0)!;
    }
    public function_(): FunctionContext[];
    public function_(i: number): FunctionContext | null;
    public function_(i?: number): FunctionContext[] | FunctionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FunctionContext);
        }

        return this.getRuleContext(i, FunctionContext);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_program;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleRustParser.IDENTIFIER, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public parameter_list(): Parameter_listContext | null {
        return this.getRuleContext(0, Parameter_listContext);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_function;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterFunction) {
             listener.enterFunction(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitFunction) {
             listener.exitFunction(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_block;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Parameter_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_parameter_list;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterParameter_list) {
             listener.enterParameter_list(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitParameter_list) {
             listener.exitParameter_list(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitParameter_list) {
            return visitor.visitParameter_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleRustParser.IDENTIFIER, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_parameter;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_type;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variable_declaration(): Variable_declarationContext | null {
        return this.getRuleContext(0, Variable_declarationContext);
    }
    public expression_statement(): Expression_statementContext | null {
        return this.getRuleContext(0, Expression_statementContext);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_statement;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Variable_declarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(SimpleRustParser.IDENTIFIER, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_variable_declaration;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterVariable_declaration) {
             listener.enterVariable_declaration(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitVariable_declaration) {
             listener.exitVariable_declaration(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitVariable_declaration) {
            return visitor.visitVariable_declaration(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expression_statementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_expression_statement;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterExpression_statement) {
             listener.enterExpression_statement(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitExpression_statement) {
             listener.exitExpression_statement(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitExpression_statement) {
            return visitor.visitExpression_statement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(SimpleRustParser.IDENTIFIER, 0);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(SimpleRustParser.NUMBER, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SimpleRustParser.STRING, 0);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(SimpleRustParser.BOOLEAN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SimpleRustParser.RULE_expression;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
