const {mainVideo} = require("../api/movieApi")

const mainMovieVideo = async (req,res,next)=>{
    const {id} = req.params;
    const result = await mainVideo(id);
   res.json(result.data)
}

module.exports = mainMovieVideo;