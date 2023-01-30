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




//ADD CARD FUNCTION UI Maybe?


// get input from command line

// const userInputIdStarship = process.argv[2]
// const userInputIdCharacter = process.argv[3]


// // open connection to db
// db.once('open', function () {
// 	// save starship to mongodb
// 	Starship.findById(userInputIdStarship)
// 		// printing success or failure
// 		.then((starship) => {
// 			// update the starship object with the passed in key and value
// 			starship.crew.push(userInputIdCharacter)

// 			// then save the starship document in the database
// 			return starship.save()
// 		})
// 		.then((starship) => {
// 			console.log(starship.toJSON())
// 		})
// 		.catch(console.error)
// 		// close connection to db
// 		.finally(() => db.close())
// })

// node ./scripts/starship/addCrew.js <id> <key> <value>




module.exports = router