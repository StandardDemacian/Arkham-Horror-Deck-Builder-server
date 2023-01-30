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




//ADD CARD FUNCTION UI Maybe?




// var objFriends = { fname:"fname",lname:"lname",surname:"surname" };
// Friend.findOneAndUpdate(
//    { _id: req.body.id }, 
//    { $push: { friends: objFriends  } },
//   function (error, success) {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log(success)
//         }
//     })


module.exports = router