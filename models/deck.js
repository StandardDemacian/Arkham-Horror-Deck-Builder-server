const mongoose = require('mongoose')
const cardSchema = require('./card')

const Schema = mongoose.Schema

const deckSchema = new Schema(
    {
        name: 
            { type:String,
            
            },
        Investigator: 
            { type:String,
                
            },
        XP: Number,
        // cards:[cardsSchema] to-be-implemented

    },
    {
        timestamps:true
    }
)

const Deck = mongoose.model('Deck',deckSchema)

module.exports = Deck