grammar Rust;

// Parser rules
program
    : statement* EOF
    ;

statement
    : letStatement
    | expressionStatement
    ;

letStatement
    : 'let' IDENTIFIER '=' expression ';'
    ;

expressionStatement
    : expression ';'
    ;

expression
    : literal
    | IDENTIFIER
    | '(' expression ')'
    ;

literal
    : INTEGER
    | STRING
    ;

// Lexer rules
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

INTEGER
    : [0-9]+
    ;

STRING
    : '"' (~["\\] | '\\' .)* '"'
    ;

WHITESPACE
    : [ \t\r\n]+ -> skip
    ;