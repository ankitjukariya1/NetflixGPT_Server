const express = require ("express")
const Movie = require("../middleware/movie")
const MovieRouter = express.Router()


MovieRouter.get("/movies/all" , Movie);

module.exports = MovieRouter