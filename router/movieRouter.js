const express = require ("express")
const {popularMovie,trendingMovie,topRatedMovies} = require("../middleware/movie")
const MovieRouter = express.Router()


MovieRouter.get("/movies/popular", popularMovie);
MovieRouter.get("/movies/trending",trendingMovie);
MovieRouter.get("/movies/top_rated",topRatedMovies);



module.exports = MovieRouter