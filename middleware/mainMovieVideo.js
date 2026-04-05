import { mainVideo } from "../api/movieApi";

const mainMovieVideo = async (req,res,next)=>{
    const mainMovieId = req.params;
    const result = await mainVideo(mainMovieId);
    res.json(result.results)
}

export default mainMovieVideo