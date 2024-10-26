import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnect from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();

let port = process.env.PORT;
let app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Working");
})


app.listen(port, () => {
  console.log(`App is listening to port : ${port}`);
  dbConnect();
})