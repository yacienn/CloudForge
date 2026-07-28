import Express  from "express";
import dotenv from "dotenv";
dotenv.config();
const app = Express();
const port = process.env.PORT ;
app.listen( port , ()=>{
  console.log(`server run in port ${port}`);
})