const Joke = require('../models/jokes.model')



// GETS ALL JOKES
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json ({jokes: allJokes})
        })
        .catch ((err) => {
            res.json({message: "Something went wrong:", error: err})
        })
}

// GETS ONE JOKE BY ID
module.exports.findJokeById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {
            res.json({ joke : oneJoke})
        })
        .catch((err) => {
            res.json({ message: "Something went wrong:", error: err})
        })
}


// CREATE JOKE 
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
    .then(newJoke => {
        res.json ({joke: newJoke})
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    })
}


// UPDATE JOKE BY ID
module.exports.updateJokeById = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => {
            res.json({joke: updatedJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}


// DELETE JOKE BY ID
module.exports.deleteJokeById = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then (result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
}