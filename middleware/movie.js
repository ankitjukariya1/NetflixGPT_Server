 const axios = require("axios")
 
  const Movie = async (req,res,next)=>{
  try {
     console.log("getting movie....")
    const movieData= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    res.json(movieData.data);
  } catch (error) {
    console.log("something is wrong");
    res.json(`something is wrong there ${error}`);
  }
}

module.exports = Movie ;