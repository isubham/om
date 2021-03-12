
// (+ 1 2)
const LEFT_BRACKET = "(";
const RIGHT_BRACKET = ")";
const BLANK = " ";

function isBlankOrParantheses(character)
{
return (character === BLANK 
    || character === LEFT_BRACKET 
    ||  character === RIGHT_BRACKET);
}

function tokenizer(program) {
	let tokens = [];

    var charIndex = 0;
	while (charIndex < program.length) 
	{
		let char = program[charIndex];

        // skip blank spaces
        if (char == BLANK) 
        {

                while(program[charIndex] == BLANK)
                {
                    charIndex++;
                }
        }


        // parse brackets
		else if (char == LEFT_BRACKET || char == RIGHT_BRACKET) 
        {
			tokens.push(char);
            charIndex += 1;
		}

		
        // parse words
		else if (char != BLANK) 
        {

            var tokenStart = charIndex;
            var tokenLength = 0;
			while(! isBlankOrParantheses(program[charIndex])) {
                tokenLength += 1;
                charIndex += 1;
			}

            const token = program.substr(tokenStart, tokenLength);
            tokens.push(token);

		}
        else {
            throw new Error("handle this case");
        }

	}
    return tokens;
}

module.exports = tokenizer;
