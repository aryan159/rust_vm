// Generated from src/SimpleRust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class SimpleRustLexer extends antlr.Lexer {
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

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

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

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "T__26", "IDENTIFIER", "NUMBER", "STRING", "BOOLEAN", 
        "WHITESPACE",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, SimpleRustLexer._ATN, SimpleRustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "SimpleRust.g4"; }

    public get literalNames(): (string | null)[] { return SimpleRustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return SimpleRustLexer.symbolicNames; }
    public get ruleNames(): string[] { return SimpleRustLexer.ruleNames; }

    public get serializedATN(): number[] { return SimpleRustLexer._serializedATN; }

    public get channelNames(): string[] { return SimpleRustLexer.channelNames; }

    public get modeNames(): string[] { return SimpleRustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,32,188,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,
        0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,
        7,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,
        1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,
        1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,
        1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,
        1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,
        1,27,1,27,5,27,152,8,27,10,27,12,27,155,9,27,1,28,4,28,158,8,28,
        11,28,12,28,159,1,29,1,29,5,29,164,8,29,10,29,12,29,167,9,29,1,29,
        1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,180,8,30,
        1,31,4,31,183,8,31,11,31,12,31,184,1,31,1,31,1,165,0,32,1,1,3,2,
        5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
        15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,
        26,53,27,55,28,57,29,59,30,61,31,63,32,1,0,4,3,0,65,90,95,95,97,
        122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,
        192,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,
        0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
        0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,
        0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,
        0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,
        0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,
        0,61,1,0,0,0,0,63,1,0,0,0,1,65,1,0,0,0,3,68,1,0,0,0,5,70,1,0,0,0,
        7,72,1,0,0,0,9,75,1,0,0,0,11,77,1,0,0,0,13,79,1,0,0,0,15,81,1,0,
        0,0,17,83,1,0,0,0,19,85,1,0,0,0,21,89,1,0,0,0,23,93,1,0,0,0,25,97,
        1,0,0,0,27,102,1,0,0,0,29,109,1,0,0,0,31,113,1,0,0,0,33,115,1,0,
        0,0,35,117,1,0,0,0,37,122,1,0,0,0,39,126,1,0,0,0,41,128,1,0,0,0,
        43,130,1,0,0,0,45,132,1,0,0,0,47,134,1,0,0,0,49,139,1,0,0,0,51,141,
        1,0,0,0,53,143,1,0,0,0,55,149,1,0,0,0,57,157,1,0,0,0,59,161,1,0,
        0,0,61,179,1,0,0,0,63,182,1,0,0,0,65,66,5,102,0,0,66,67,5,110,0,
        0,67,2,1,0,0,0,68,69,5,40,0,0,69,4,1,0,0,0,70,71,5,41,0,0,71,6,1,
        0,0,0,72,73,5,45,0,0,73,74,5,62,0,0,74,8,1,0,0,0,75,76,5,123,0,0,
        76,10,1,0,0,0,77,78,5,125,0,0,78,12,1,0,0,0,79,80,5,44,0,0,80,14,
        1,0,0,0,81,82,5,58,0,0,82,16,1,0,0,0,83,84,5,38,0,0,84,18,1,0,0,
        0,85,86,5,109,0,0,86,87,5,117,0,0,87,88,5,116,0,0,88,20,1,0,0,0,
        89,90,5,105,0,0,90,91,5,51,0,0,91,92,5,50,0,0,92,22,1,0,0,0,93,94,
        5,102,0,0,94,95,5,54,0,0,95,96,5,52,0,0,96,24,1,0,0,0,97,98,5,98,
        0,0,98,99,5,111,0,0,99,100,5,111,0,0,100,101,5,108,0,0,101,26,1,
        0,0,0,102,103,5,83,0,0,103,104,5,116,0,0,104,105,5,114,0,0,105,106,
        5,105,0,0,106,107,5,110,0,0,107,108,5,103,0,0,108,28,1,0,0,0,109,
        110,5,86,0,0,110,111,5,101,0,0,111,112,5,99,0,0,112,30,1,0,0,0,113,
        114,5,60,0,0,114,32,1,0,0,0,115,116,5,62,0,0,116,34,1,0,0,0,117,
        118,5,38,0,0,118,119,5,109,0,0,119,120,5,117,0,0,120,121,5,116,0,
        0,121,36,1,0,0,0,122,123,5,108,0,0,123,124,5,101,0,0,124,125,5,116,
        0,0,125,38,1,0,0,0,126,127,5,61,0,0,127,40,1,0,0,0,128,129,5,59,
        0,0,129,42,1,0,0,0,130,131,5,43,0,0,131,44,1,0,0,0,132,133,5,45,
        0,0,133,46,1,0,0,0,134,135,5,118,0,0,135,136,5,101,0,0,136,137,5,
        99,0,0,137,138,5,33,0,0,138,48,1,0,0,0,139,140,5,91,0,0,140,50,1,
        0,0,0,141,142,5,93,0,0,142,52,1,0,0,0,143,144,5,46,0,0,144,145,5,
        112,0,0,145,146,5,117,0,0,146,147,5,115,0,0,147,148,5,104,0,0,148,
        54,1,0,0,0,149,153,7,0,0,0,150,152,7,1,0,0,151,150,1,0,0,0,152,155,
        1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,56,1,0,0,0,155,153,1,
        0,0,0,156,158,7,2,0,0,157,156,1,0,0,0,158,159,1,0,0,0,159,157,1,
        0,0,0,159,160,1,0,0,0,160,58,1,0,0,0,161,165,5,34,0,0,162,164,9,
        0,0,0,163,162,1,0,0,0,164,167,1,0,0,0,165,166,1,0,0,0,165,163,1,
        0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,169,5,34,0,0,169,60,1,
        0,0,0,170,171,5,116,0,0,171,172,5,114,0,0,172,173,5,117,0,0,173,
        180,5,101,0,0,174,175,5,102,0,0,175,176,5,97,0,0,176,177,5,108,0,
        0,177,178,5,115,0,0,178,180,5,101,0,0,179,170,1,0,0,0,179,174,1,
        0,0,0,180,62,1,0,0,0,181,183,7,3,0,0,182,181,1,0,0,0,183,184,1,0,
        0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,6,31,
        0,0,187,64,1,0,0,0,6,0,153,159,165,179,184,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SimpleRustLexer.__ATN) {
            SimpleRustLexer.__ATN = new antlr.ATNDeserializer().deserialize(SimpleRustLexer._serializedATN);
        }

        return SimpleRustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SimpleRustLexer.literalNames, SimpleRustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SimpleRustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = SimpleRustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}