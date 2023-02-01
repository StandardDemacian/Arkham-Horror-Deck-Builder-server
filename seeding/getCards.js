const axios = require('axios')
const fs = require('fs')
const { url } = require('inspector')


let baseURL = `https://arkhamdb.com/api/public/card/`
let cardTotal = 1120

let ids = []

// build array of random ids
for(let i = 1000; i < cardTotal; i++) {
	ids.push("0"+i)
    
}

// build 20 urls to make calls to, and return array of promises with those urls
let calls = ids.map(id => `${baseURL}${id}`)
.map(url => axios.get(url))

// execute all promises, writing to disk if successful

Promise.all(calls)
.then(success => {
	let collectedData = success.map(res => res.data)
	let stringified = JSON.stringify(collectedData)
	fs.writeFile(__dirname + '/cards.json', stringified, 'utf8', (err) => {
		if(err) {
			console.error(err)
		}
		else {
			console.log(`successfully wrote ${collectedData.length} cards to cards.json`)
		}
	}) 
})

.catch(err => {
	console.error(err)
	console.error('there was probably an issue with the rate limit, try again in 10 seconds or check the error messages above.')
})



