const express = require('express')

// const { requireToken } = require('../config/auth')
const Card = require('../models/card')
const Deck = require('../models/deck')
const router = express.Router()


//GET Card by name

router.get('/card/:name', (req,res,next)=>{
    Card.findOne({name:req.params.name})
        .then(card => {
            res.status(200).json({ card:card })
        })
        .catch(next)
})

//Get Card by ID 

router.get('/card/id/:_id', (req,res,next)=>{
    Card.findOne({_id:req.params._id})
    .then(card => {
        res.status(200).json({card : card})
    })
    .catch(next)
})


module.exports = router