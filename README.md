
# OM (Lisp) Implementation Specification


## Primitives

integers



## Operation

arithmetic operators


## syntax

(+ 1 2)

(+ 1 (- 1 2))


## Compiler

1. tokeniser (string -> token)

(+ 1 2) => [(, +, 1, 2, )]


2. parser (token -> parse tree)

	  +
  /   \
 1    2



      +
     / \
    1   -
       / \
      1   2


3. Execution (parse tree -> result)


	  +
  /   \
 1    2


if root definition exists within program

	if not check in language definiton
		if not throw error
		else execute
	else excute


+ opAdd (define in language)
1 2 defined in language

execute(+, 1, 2)


