const mongoose = require('mongoose')
// const cardSchema = require('./card')

const Schema = mongoose.Schema

const deckSchema = new Schema(
    {
        name:String,
        Investigator: String,        
        XP: Number,
        // Cards:[cardSchema] 
    },
    {
        timestamps:true
    }
)

const Deck = mongoose.model('Deck',deckSchema)

module.exports = Deck