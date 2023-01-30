const express = require('express')

// const { requireToken } = require('../config/auth')
const Card = require('../models/card')
const Deck = require('../models/deck')
const router = express.Router()


//GET Card

router.get('/card/:name', (req,res,next)=>{
    console.log(req.params)
    Card.findOne({name:req.params.name})
        .then(card => {
            res.status(200).json({ card:card })
        })
        .catch(next)
})



module.exports = router