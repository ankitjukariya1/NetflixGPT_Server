const movieApi = require("./axiosInstance")

 const popular = async()=>{
   return await movieApi.get(`/movie/popular?api_key=${process.env.API_KEY}`)
 }

 const trending = async()=>{
  return await movieApi.get(`/trending/movie/day?api_key=${process.env.API_KEY}`)
 }

 const topRated = async ()=>{
  return await movieApi.get(`/movie/top_rated?api_key=${process.env.API_KEY}`)
 }
 module.exports = {popular,trending,topRated};

