const factory = require('../../factory');
const tokenizer = factory("tokenizer");
const assert = require("chai").assert;

describe("Tokenizer Tests", () => {

	it("with simple function should return token", () => {
		const program = "(+ 1 2)";
		const parsedProgram = tokenizer(program);
		const expectedArray = ["(", "+", "1", "2", ")"];
		assert.deepEqual(parsedProgram, expectedArray);
		
	})

	it("with nested function should return token", () => {
		const program = "(+ 1 (- 1 2))";
		const parsedProgram = tokenizer(program);
		assert.deepEqual(parsedProgram, ["(", "+", "1", "(", "-", "1", "2", ")", ")"]);
	})


	it ("with simple function missing bracket should throw error pointing to line and character", () => {

		const program = "(+ 1 2";
		const parsedProgram = tokenizer(program);
	})
	
	it ("with simple function missing bracket should throw error pointing to line and character", () => {

		const program = "+ 1 2)";
		const parsedProgram = tokenizer(program);
	})
	
})