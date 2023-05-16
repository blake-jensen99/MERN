const AuthorController = require('../controllers/author.controller')

module.exports = function(app) {
    app.get('/api/author', AuthorController.allAuthors)
    app.get('/api/author/:id', AuthorController.getOne)
    app.post('/api/author', AuthorController.createAuthor)
    app.patch('/api/author/:id', AuthorController.updateOne)
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}