const {request, response} = require('express')
const Author = require('../models/author.model')

module.exports.allAuthors = (req, res) => {
    Author.find().sort( { name: 1 } )
        .then((allAuthors) => {
            res.json ({authors: allAuthors})
        })
        .catch ((err) => {
            res.json({message: "Something went wrong:", error: err})
        })
}

module.exports.getOne = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then((oneAuthor) => {
            res.json ({author: oneAuthor})
        })
        .catch ((err) => {
            res.json({message: "Something went wrong:", error: err})
        })
}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => {
            res.json ({author: newAuthor})
        })
        .catch(err => res.status(400).json(err))
}

module.exports.updateOne = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedAuthor => {
            res.json({author: updatedAuthor})
        })
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(deleteConf => {
        res.json(deleteConf)
    })
    .catch((err) => {
        res.json({message: 'Something went wrong', error: err})
    })
}