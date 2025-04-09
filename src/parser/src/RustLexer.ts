// Generated from src/Rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class RustLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly IDENTIFIER = 6;
    public static readonly INTEGER = 7;
    public static readonly STRING = 8;
    public static readonly WHITESPACE = 9;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "'='", "';'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, "IDENTIFIER", "INTEGER", "STRING", 
        "WHITESPACE"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "IDENTIFIER", "INTEGER", 
        "STRING", "WHITESPACE",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, RustLexer._ATN, RustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Rust.g4"; }

    public get literalNames(): (string | null)[] { return RustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return RustLexer.symbolicNames; }
    public get ruleNames(): string[] { return RustLexer.ruleNames; }

    public get serializedATN(): number[] { return RustLexer._serializedATN; }

    public get channelNames(): string[] { return RustLexer.channelNames; }

    public get modeNames(): string[] { return RustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,9,61,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,
        4,1,4,1,5,1,5,5,5,34,8,5,10,5,12,5,37,9,5,1,6,4,6,40,8,6,11,6,12,
        6,41,1,7,1,7,1,7,1,7,5,7,48,8,7,10,7,12,7,51,9,7,1,7,1,7,1,8,4,8,
        56,8,8,11,8,12,8,57,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
        15,8,17,9,1,0,5,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,
        122,1,0,48,57,2,0,34,34,92,92,3,0,9,10,13,13,32,32,65,0,1,1,0,0,
        0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,23,1,0,0,0,5,
        25,1,0,0,0,7,27,1,0,0,0,9,29,1,0,0,0,11,31,1,0,0,0,13,39,1,0,0,0,
        15,43,1,0,0,0,17,55,1,0,0,0,19,20,5,108,0,0,20,21,5,101,0,0,21,22,
        5,116,0,0,22,2,1,0,0,0,23,24,5,61,0,0,24,4,1,0,0,0,25,26,5,59,0,
        0,26,6,1,0,0,0,27,28,5,40,0,0,28,8,1,0,0,0,29,30,5,41,0,0,30,10,
        1,0,0,0,31,35,7,0,0,0,32,34,7,1,0,0,33,32,1,0,0,0,34,37,1,0,0,0,
        35,33,1,0,0,0,35,36,1,0,0,0,36,12,1,0,0,0,37,35,1,0,0,0,38,40,7,
        2,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,
        14,1,0,0,0,43,49,5,34,0,0,44,48,8,3,0,0,45,46,5,92,0,0,46,48,9,0,
        0,0,47,44,1,0,0,0,47,45,1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,
        1,0,0,0,50,52,1,0,0,0,51,49,1,0,0,0,52,53,5,34,0,0,53,16,1,0,0,0,
        54,56,7,4,0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,
        0,0,0,58,59,1,0,0,0,59,60,6,8,0,0,60,18,1,0,0,0,6,0,35,41,47,49,
        57,1,6,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!RustLexer.__ATN) {
            RustLexer.__ATN = new antlr.ATNDeserializer().deserialize(RustLexer._serializedATN);
        }

        return RustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(RustLexer.literalNames, RustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return RustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = RustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}