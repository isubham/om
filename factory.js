const parser = require('./src/tokenizer');

function factory(type) {

	switch(type) {
		case 'tokenizer' : return parser;
	}
}


module.exports = factory;