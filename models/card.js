const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cardSchema = new Schema(
    {
        name: String,
        type: String,
        faction_name: String,
        url: String,
        imagesrc: String   
    },
    {
        timestamps:true
    }
)



module.exports = cardSchema