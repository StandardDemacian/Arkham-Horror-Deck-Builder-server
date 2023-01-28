const express = require('express')

// const { requireToken } = require('../config/auth')
const Card = require('../models/card')
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


// CREATE

// POST /card

// router.post('/card/:deckName', (req, res, next) => {
// 	const deckName = req.body


// 	Deck.findById(deckName)
// 		.then((deck) => {
// 			deck.card.push(req.body.card)

// 			return deck.save()
// 		})

// 		.then((deck) => res.status(201).json({ deck: deck }))
// 		.catch(next)
// })

module.exports = router