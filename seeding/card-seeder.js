const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:"./config/config.env"})

const Card = require('../models/card')
const db = require('../config/db')
const { options } = require('../server')

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const cards = JSON.parse(
    fs.readFileSync('cards.json',"utf8")
)

const importData = async () => {
    try {
        await Card.create(cards)
        console.log("cards seeded")
        process.exit()
    }
    catch (err) {
        console.error(err)
    }
}   

importData()

