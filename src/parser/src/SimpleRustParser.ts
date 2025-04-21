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
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly T__26 = 27;
    public static readonly IDENTIFIER = 28;
    public static readonly NUMBER = 29;
    public static readonly STRING = 30;
    public static readonly BOOLEAN = 31;
    public static readonly WHITESPACE = 32;
    public static readonly RULE_program = 0;
    public static readonly RULE_function = 1;
    public static readonly RULE_block = 2;
    public static readonly RULE_parameter_list = 3;
    public static readonly RULE_expression_list = 4;
    public static readonly RULE_parameter = 5;
    public static readonly RULE_type = 6;
    public static readonly RULE_statement = 7;
    public static readonly RULE_variable_declaration = 8;
    public static readonly RULE_expression_statement = 9;
    public static readonly RULE_expression = 10;

    public static readonly literalNames = [
        null, "'fn'", "'('", "')'", "'->'", "'{'", "'}'", "','", "':'", 
        "'&'", "'mut'", "'i32'", "'f64'", "'bool'", "'String'", "'Vec'", 
        "'<'", "'>'", "'&mut'", "'let'", "'='", "';'", "'+'", "'-'", "'vec!'", 
        "'['", "']'", "'.push'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, "IDENTIFIER", "NUMBER", "STRING", 
        "BOOLEAN", "WHITESPACE"
    ];
    public static readonly ruleNames = [
        "program", "function", "block", "parameter_list", "expression_list", 
        "parameter", "type", "statement", "variable_declaration", "expression_statement", 
        "expression",
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
            this.state = 25;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 1) {
                {
                {
                this.state = 22;
                this.function_();
                }
                }
                this.state = 27;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 28;
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
            this.state = 30;
            this.match(SimpleRustParser.T__0);
            this.state = 31;
            this.match(SimpleRustParser.IDENTIFIER);
            this.state = 32;
            this.match(SimpleRustParser.T__1);
            this.state = 34;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 28) {
                {
                this.state = 33;
                this.parameter_list();
                }
            }

            this.state = 36;
            this.match(SimpleRustParser.T__2);
            this.state = 37;
            this.match(SimpleRustParser.T__3);
            this.state = 38;
            this.type_();
            this.state = 39;
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
            this.state = 41;
            this.match(SimpleRustParser.T__4);
            this.state = 45;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4044096004) !== 0)) {
                {
                {
                this.state = 42;
                this.statement();
                }
                }
                this.state = 47;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 48;
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
            this.state = 50;
            this.parameter();
            this.state = 55;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 51;
                this.match(SimpleRustParser.T__6);
                this.state = 52;
                this.parameter();
                }
                }
                this.state = 57;
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
    public expression_list(): Expression_listContext {
        let localContext = new Expression_listContext(this.context, this.state);
        this.enterRule(localContext, 8, SimpleRustParser.RULE_expression_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 59;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4043571716) !== 0)) {
                {
                this.state = 58;
                this.expression(0);
                }
            }

            this.state = 65;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 61;
                this.match(SimpleRustParser.T__6);
                this.state = 62;
                this.expression(0);
                }
                }
                this.state = 67;
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
        this.enterRule(localContext, 10, SimpleRustParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 68;
            this.match(SimpleRustParser.IDENTIFIER);
            this.state = 69;
            this.match(SimpleRustParser.T__7);
            this.state = 71;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                {
                this.state = 70;
                this.match(SimpleRustParser.T__8);
                }
                break;
            }
            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 73;
                this.match(SimpleRustParser.T__9);
                }
            }

            this.state = 76;
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
        this.enterRule(localContext, 12, SimpleRustParser.RULE_type);
        try {
            this.state = 91;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleRustParser.T__10:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 78;
                this.match(SimpleRustParser.T__10);
                }
                break;
            case SimpleRustParser.T__11:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 79;
                this.match(SimpleRustParser.T__11);
                }
                break;
            case SimpleRustParser.T__12:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 80;
                this.match(SimpleRustParser.T__12);
                }
                break;
            case SimpleRustParser.T__13:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 81;
                this.match(SimpleRustParser.T__13);
                }
                break;
            case SimpleRustParser.T__14:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 82;
                this.match(SimpleRustParser.T__14);
                this.state = 83;
                this.match(SimpleRustParser.T__15);
                this.state = 84;
                this.type_();
                this.state = 85;
                this.match(SimpleRustParser.T__16);
                }
                break;
            case SimpleRustParser.T__8:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 87;
                this.match(SimpleRustParser.T__8);
                this.state = 88;
                this.type_();
                }
                break;
            case SimpleRustParser.T__17:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 89;
                this.match(SimpleRustParser.T__17);
                this.state = 90;
                this.type_();
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
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 14, SimpleRustParser.RULE_statement);
        try {
            this.state = 95;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SimpleRustParser.T__18:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 93;
                this.variable_declaration();
                }
                break;
            case SimpleRustParser.T__1:
            case SimpleRustParser.T__8:
            case SimpleRustParser.T__17:
            case SimpleRustParser.T__23:
            case SimpleRustParser.IDENTIFIER:
            case SimpleRustParser.NUMBER:
            case SimpleRustParser.STRING:
            case SimpleRustParser.BOOLEAN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 94;
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
        this.enterRule(localContext, 16, SimpleRustParser.RULE_variable_declaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 97;
            this.match(SimpleRustParser.T__18);
            this.state = 99;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 98;
                this.match(SimpleRustParser.T__9);
                }
            }

            this.state = 101;
            this.match(SimpleRustParser.IDENTIFIER);
            this.state = 102;
            this.match(SimpleRustParser.T__7);
            this.state = 103;
            this.type_();
            this.state = 104;
            this.match(SimpleRustParser.T__19);
            this.state = 105;
            this.expression(0);
            this.state = 106;
            this.match(SimpleRustParser.T__20);
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
        this.enterRule(localContext, 18, SimpleRustParser.RULE_expression_statement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 108;
            this.expression(0);
            this.state = 109;
            this.match(SimpleRustParser.T__20);
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
        let _startState = 20;
        this.enterRecursionRule(localContext, 20, SimpleRustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 143;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
            case 1:
                {
                this.state = 112;
                this.match(SimpleRustParser.IDENTIFIER);
                }
                break;
            case 2:
                {
                this.state = 113;
                this.match(SimpleRustParser.NUMBER);
                }
                break;
            case 3:
                {
                this.state = 114;
                this.match(SimpleRustParser.STRING);
                }
                break;
            case 4:
                {
                this.state = 115;
                this.match(SimpleRustParser.BOOLEAN);
                }
                break;
            case 5:
                {
                this.state = 116;
                this.match(SimpleRustParser.T__1);
                this.state = 117;
                this.expression(0);
                this.state = 118;
                this.match(SimpleRustParser.T__2);
                }
                break;
            case 6:
                {
                this.state = 120;
                this.match(SimpleRustParser.IDENTIFIER);
                this.state = 121;
                this.match(SimpleRustParser.T__19);
                this.state = 122;
                this.expression(6);
                }
                break;
            case 7:
                {
                this.state = 123;
                this.match(SimpleRustParser.T__8);
                this.state = 124;
                this.match(SimpleRustParser.IDENTIFIER);
                }
                break;
            case 8:
                {
                this.state = 125;
                this.match(SimpleRustParser.T__17);
                this.state = 126;
                this.match(SimpleRustParser.IDENTIFIER);
                }
                break;
            case 9:
                {
                this.state = 127;
                this.match(SimpleRustParser.IDENTIFIER);
                this.state = 128;
                this.match(SimpleRustParser.T__1);
                this.state = 129;
                this.expression_list();
                this.state = 130;
                this.match(SimpleRustParser.T__2);
                }
                break;
            case 10:
                {
                this.state = 132;
                this.match(SimpleRustParser.T__23);
                this.state = 133;
                this.match(SimpleRustParser.T__24);
                this.state = 134;
                this.expression_list();
                this.state = 135;
                this.match(SimpleRustParser.T__25);
                }
                break;
            case 11:
                {
                this.state = 137;
                this.match(SimpleRustParser.IDENTIFIER);
                this.state = 138;
                this.match(SimpleRustParser.T__26);
                this.state = 139;
                this.match(SimpleRustParser.T__1);
                this.state = 140;
                this.expression(0);
                this.state = 141;
                this.match(SimpleRustParser.T__2);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 150;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
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
                    this.state = 145;
                    if (!(this.precpred(this.context, 7))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                    }
                    this.state = 146;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 22 || _la === 23)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 147;
                    this.expression(8);
                    }
                    }
                }
                this.state = 152;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
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
        case 10:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 7);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,32,154,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,5,0,24,8,0,10,0,12,0,27,
        9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,35,8,1,1,1,1,1,1,1,1,1,1,1,1,2,1,
        2,5,2,44,8,2,10,2,12,2,47,9,2,1,2,1,2,1,3,1,3,1,3,5,3,54,8,3,10,
        3,12,3,57,9,3,1,4,3,4,60,8,4,1,4,1,4,5,4,64,8,4,10,4,12,4,67,9,4,
        1,5,1,5,1,5,3,5,72,8,5,1,5,3,5,75,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,
        6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,92,8,6,1,7,1,7,3,7,96,8,7,
        1,8,1,8,3,8,100,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
        1,10,1,10,1,10,1,10,1,10,3,10,144,8,10,1,10,1,10,1,10,5,10,149,8,
        10,10,10,12,10,152,9,10,1,10,0,1,20,11,0,2,4,6,8,10,12,14,16,18,
        20,0,1,1,0,22,23,169,0,25,1,0,0,0,2,30,1,0,0,0,4,41,1,0,0,0,6,50,
        1,0,0,0,8,59,1,0,0,0,10,68,1,0,0,0,12,91,1,0,0,0,14,95,1,0,0,0,16,
        97,1,0,0,0,18,108,1,0,0,0,20,143,1,0,0,0,22,24,3,2,1,0,23,22,1,0,
        0,0,24,27,1,0,0,0,25,23,1,0,0,0,25,26,1,0,0,0,26,28,1,0,0,0,27,25,
        1,0,0,0,28,29,5,0,0,1,29,1,1,0,0,0,30,31,5,1,0,0,31,32,5,28,0,0,
        32,34,5,2,0,0,33,35,3,6,3,0,34,33,1,0,0,0,34,35,1,0,0,0,35,36,1,
        0,0,0,36,37,5,3,0,0,37,38,5,4,0,0,38,39,3,12,6,0,39,40,3,4,2,0,40,
        3,1,0,0,0,41,45,5,5,0,0,42,44,3,14,7,0,43,42,1,0,0,0,44,47,1,0,0,
        0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,
        5,6,0,0,49,5,1,0,0,0,50,55,3,10,5,0,51,52,5,7,0,0,52,54,3,10,5,0,
        53,51,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,7,1,0,
        0,0,57,55,1,0,0,0,58,60,3,20,10,0,59,58,1,0,0,0,59,60,1,0,0,0,60,
        65,1,0,0,0,61,62,5,7,0,0,62,64,3,20,10,0,63,61,1,0,0,0,64,67,1,0,
        0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,9,1,0,0,0,67,65,1,0,0,0,68,69,
        5,28,0,0,69,71,5,8,0,0,70,72,5,9,0,0,71,70,1,0,0,0,71,72,1,0,0,0,
        72,74,1,0,0,0,73,75,5,10,0,0,74,73,1,0,0,0,74,75,1,0,0,0,75,76,1,
        0,0,0,76,77,3,12,6,0,77,11,1,0,0,0,78,92,5,11,0,0,79,92,5,12,0,0,
        80,92,5,13,0,0,81,92,5,14,0,0,82,83,5,15,0,0,83,84,5,16,0,0,84,85,
        3,12,6,0,85,86,5,17,0,0,86,92,1,0,0,0,87,88,5,9,0,0,88,92,3,12,6,
        0,89,90,5,18,0,0,90,92,3,12,6,0,91,78,1,0,0,0,91,79,1,0,0,0,91,80,
        1,0,0,0,91,81,1,0,0,0,91,82,1,0,0,0,91,87,1,0,0,0,91,89,1,0,0,0,
        92,13,1,0,0,0,93,96,3,16,8,0,94,96,3,18,9,0,95,93,1,0,0,0,95,94,
        1,0,0,0,96,15,1,0,0,0,97,99,5,19,0,0,98,100,5,10,0,0,99,98,1,0,0,
        0,99,100,1,0,0,0,100,101,1,0,0,0,101,102,5,28,0,0,102,103,5,8,0,
        0,103,104,3,12,6,0,104,105,5,20,0,0,105,106,3,20,10,0,106,107,5,
        21,0,0,107,17,1,0,0,0,108,109,3,20,10,0,109,110,5,21,0,0,110,19,
        1,0,0,0,111,112,6,10,-1,0,112,144,5,28,0,0,113,144,5,29,0,0,114,
        144,5,30,0,0,115,144,5,31,0,0,116,117,5,2,0,0,117,118,3,20,10,0,
        118,119,5,3,0,0,119,144,1,0,0,0,120,121,5,28,0,0,121,122,5,20,0,
        0,122,144,3,20,10,6,123,124,5,9,0,0,124,144,5,28,0,0,125,126,5,18,
        0,0,126,144,5,28,0,0,127,128,5,28,0,0,128,129,5,2,0,0,129,130,3,
        8,4,0,130,131,5,3,0,0,131,144,1,0,0,0,132,133,5,24,0,0,133,134,5,
        25,0,0,134,135,3,8,4,0,135,136,5,26,0,0,136,144,1,0,0,0,137,138,
        5,28,0,0,138,139,5,27,0,0,139,140,5,2,0,0,140,141,3,20,10,0,141,
        142,5,3,0,0,142,144,1,0,0,0,143,111,1,0,0,0,143,113,1,0,0,0,143,
        114,1,0,0,0,143,115,1,0,0,0,143,116,1,0,0,0,143,120,1,0,0,0,143,
        123,1,0,0,0,143,125,1,0,0,0,143,127,1,0,0,0,143,132,1,0,0,0,143,
        137,1,0,0,0,144,150,1,0,0,0,145,146,10,7,0,0,146,147,7,0,0,0,147,
        149,3,20,10,8,148,145,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,
        151,1,0,0,0,151,21,1,0,0,0,152,150,1,0,0,0,13,25,34,45,55,59,65,
        71,74,91,95,99,143,150
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


export class Expression_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
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
        return SimpleRustParser.RULE_expression_list;
    }
    public override enterRule(listener: SimpleRustListener): void {
        if(listener.enterExpression_list) {
             listener.enterExpression_list(this);
        }
    }
    public override exitRule(listener: SimpleRustListener): void {
        if(listener.exitExpression_list) {
             listener.exitExpression_list(this);
        }
    }
    public override accept<Result>(visitor: SimpleRustVisitor<Result>): Result | null {
        if (visitor.visitExpression_list) {
            return visitor.visitExpression_list(this);
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
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
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
    public expression_list(): Expression_listContext | null {
        return this.getRuleContext(0, Expression_listContext);
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
