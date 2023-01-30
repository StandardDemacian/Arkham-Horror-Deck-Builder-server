const express = require('express')

const Deck = require('../models/deck')
const { requireToken } = require('../config/auth')
const router = express.Router()

//INDEX ALL DECKS

//GET Decks 
router.get('/deck', requireToken, (req,res,next)=>{ 
    Deck.find() //{'author': req.user._id}  need to figure this out tomorrow
        .then(deck => {
            return deck.map(deck => deck)
        })
        .then(deck => {
            res.status(200).json({deck : deck})
        })
        .catch(next)
})

//SHOW one Deck

//GET /deck/:id
router.get('/deck/:id',requireToken,(req,res,next)=>{
    Deck.findById(req.params.id)
        .then(deck => {
            res.status(200).json({deck : deck})
        })
        .catch(next)
})

// CREATE

// POST /deck

router.post('/deck',requireToken,(req,res,next)=>{
    Deck.create(req.body.deck)
        .then(deck => {
            res.status(201).json({deck : deck})
        })
        .catch(next)
})

//UPDATE 

//PATCH
router.patch('/deck/:id', requireToken, (req,res,next)=>{

    Deck.findById(req.params.id)
    .then((deck)=> {
        return deck.updateOne(req.body.deck)
    })   
    .then(()=> res.sendStatus(204))
    .catch(next)
})


// DESTROY
// DELETE 
router.delete('/deck/:id', requireToken, (req, res, next) => {
	Deck.findById(req.params.id)
		.then((deck) => {
			return deck.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})

module.exports = router

