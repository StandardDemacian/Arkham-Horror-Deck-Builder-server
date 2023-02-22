
const mongooseBaseName = 'Arkham-Horror-Decks'

const database = {
	development: `mongodb://localhost/${mongooseBaseName}-development`,
	test: `mongodb://localhost/${mongooseBaseName}-test`,
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DATABASE_URL || localDb

module.exports = currentDb