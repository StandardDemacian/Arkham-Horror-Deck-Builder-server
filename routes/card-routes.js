const express = require('express')

const { requireToken } = require('../config/auth')
const Deck = require('../models/deck')
const router = express.Router()


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