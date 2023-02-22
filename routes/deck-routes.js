const express = require('express')

const Deck = require('../models/deck')
const Card = require('..')
const { requireToken } = require('../config/auth')
const router = express.Router()

//INDEX ALL DECKS

//GET Decks 
router.get('/deck', requireToken, (req,res,next)=>{ 
    Deck.find({'author': req.user._id} ) //{'author': req.user._id}  need to figure this out tomorrow
        .then(deck => {
            return deck.map(deck => deck)
        })
        .then(deck => {
            res.status(200).json({deck : deck})
        })
        .catch(next)
})

//SHOW one Deck by ID

//GET /deck/:id
router.get('/deck/:id',requireToken,(req,res,next)=>{
    Deck.findById(req.params.id)
        .then(deck => {
            res.status(200).json({deck : deck})
        })
        .catch(next)
})

//GET Deck By name 
// /deck/:name

// router.get('/deck/:name', requireToken,(req,res,next)=>{
//     Deck.findOne({name:req.params.name})
//         .then(deck=> {
//             res.status(200).json({deck: deck})
//         })
//         .catch(next)
// } )

// CREATE

// POST /deck

router.post('/deck',requireToken,(req,res,next)=>{
    const deck = req.body.deck
    deck.author = req.user._id
    Deck.create(req.body.deck)
        .then(deck => {
            res.status(201).json({deck : deck})
        })
        .catch(next)
})

//UPDATE 

//PATCH
router.patch('/deck/:id', (req,res,next)=>{

    Deck.findById(req.params.id)
    .then((deck)=> {
        return deck.updateOne(req.body.deck)
    })   
    .then(()=> res.sendStatus(204))
    .catch(next)
})

//PATCH //ADD CARDS


router.patch('/deck/addcard/:id', (req,res,next) => {
    // find a specific deck in mongodb
     Deck.findById(req.params.id)
        .then((deck) => {
            deck.cards.push(req.body.cardId) 
            return deck.save()
        })
        // printing success or failure
        .then(() => res.sendStatus(204)
        
        )
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

