const JokeController = require('../controllers/jokes.controller')

module.exports = app => {
    app.get("/api/jokes", JokeController.allJokes);
    app.get("/api/jokes/:id", JokeController.findJokeById);
    app.patch("/api/jokes/:id", JokeController.updateJokeById);
    app.post("/api/jokes", JokeController.createJoke);
    app.delete("/api/jokes/:id", JokeController.deleteJokeById);
}