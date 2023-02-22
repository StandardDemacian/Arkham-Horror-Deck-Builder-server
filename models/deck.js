const mongoose = require('mongoose')
const Card = require('./card')
const User = require('./user')


const Schema = mongoose.Schema

const deckSchema = new Schema(
    {
        name:String,
        Investigator: String,        
        XP: Number,
        class:String,
        cards: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Card'
        }],
        author: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
        
    },
    {
        timestamps:true
    }
)

const Deck = mongoose.model('Deck',deckSchema)

module.exports = Deck