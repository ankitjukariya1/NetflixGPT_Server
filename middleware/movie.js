
 const {popular,trending,topRated} =require("../api/movieApi")


 // popular movies
  const popularMovie = async (req,res,next)=>{
  try {
    const result = await popular()
    res.json(result.data);
  } catch (error) {
    console.log("something is wrong");
    res.json(`something is wrong there ${error}`);
  }
}

// trending movies
 const trendingMovie = async(req,res,next)=>{
  try {
    const result = await trending();
    res.json(result.data)
  } catch (error) {
    console.log("something is wrong");
    res.json(`something is wrong there ${error}`);
  }
 }

 //top Rated

const topRatedMovies = async (req,res,next)=>{
   try {
    const result = await topRated();
    res.json(result.data);
   } catch (error) {
    console.log("something is wrong");
    console.log(error.message);
    res.json(`something is wrong there ${error}`);
   }
}

module.exports = { popularMovie , trendingMovie,topRatedMovies} ;