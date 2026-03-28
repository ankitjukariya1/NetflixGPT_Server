const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const MovieRouter = require("./router/movieRouter")
const app = express();
dotenv.config();
app.use(cors({
  origin: "http://localhost:5173"
}));  // cors k andr origin diya jata hai  ham multiple v de skte hai object me wrap kr k
app.use(express.json());
const port= process.env.PORT;
app.use(MovieRouter);
app.listen(port,()=>{
  console.log(`This server is running in port ${port}`)
});