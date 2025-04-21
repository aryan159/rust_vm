grammar SimpleRust;

// Parser rules
// TODO: allow top-level statements
program
    : function* EOF
    ;

function
    : 'fn' IDENTIFIER '(' parameter_list? ')' '->' type block
    ;

block
    : '{' statement* '}'
    ;

parameter_list
    : parameter (',' parameter)*
    ;

expression_list
    : expression? (',' expression)*
    ;

// TODO: not sure how spacing works between ? and type
parameter
    : IDENTIFIER ':' '&'? 'mut'? type
    ;

// TODO: currently returns 0 as default value, instead of ()
type
    : 'i32'
    | 'f64'
    | 'bool'
    | 'String'
    | 'Vec' '<' type '>'
    | '&' type
    | '&mut' type
    ;

statement
    : variable_declaration
    | expression_statement
    | block
    ;

variable_declaration
    : 'let' 'mut'? IDENTIFIER ':' type '=' expression ';'
    ;

expression_statement
    : expression ';'
    ;

expression
    : IDENTIFIER
    | NUMBER
    | STRING
    | BOOLEAN
    | '(' expression ')'
    | expression ('+' | '-') expression
    | IDENTIFIER '=' expression
    | '&' IDENTIFIER
    | '&mut' IDENTIFIER
    | IDENTIFIER '(' expression_list ')'
    | 'vec!' '[' expression_list ']'
    | IDENTIFIER '.push' '(' expression ')'
    ;

// Lexer rules
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

NUMBER
    : [0-9]+
    ;

STRING
    : '"' .*? '"'
    ;

BOOLEAN
    : 'true' | 'false'
    ;

WHITESPACE
    : [ \t\r\n]+ -> skip
    ;