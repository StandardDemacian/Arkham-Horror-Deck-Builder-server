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
router.patch('/deck/:id', requireToken, (req,res,next)=>{

    Deck.findById(req.params.id)
    .then((deck)=> {
        return deck.updateOne(req.body.deck)
    })   
    .then(()=> res.sendStatus(204))
    .catch(next)
})

//PATCH //ADD CARDS
router.get("deck/:id",  (req, res, next) => {
    try {
      //const risk = await Risk.findById(req.params.riskId).populate();
      const deck = Deck.findById(req.params._id).populate(
        "cards"
      );
  
      res.status(200).json(deck);
    } catch (err) {
      console.log("Something is Wrong, " + err);
      res.status(444).send("No risk found with the given criteria!");
    }
  });



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

