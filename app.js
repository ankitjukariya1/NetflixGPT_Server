const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const axios = require("axios")

const app = express();
dotenv.config();
app.use(cors({
  origin: "http://localhost:5173"
}));  // cors k andr origin diya jata hai  ham multiple v de skte hai object me wrap kr k
app.use(express.json());
const port= process.env.port;
app.listen(port,()=>{
  console.log("This server is running in port 400")
})

app.get("/movies/all",async (req,res,next)=>{
  try {
  
    const movieData= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    res.json(movieData.data);
  } catch (error) {
    res.json(`something is wrong there ${error}`);
  }
})