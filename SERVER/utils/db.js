import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let mongo = process.env.MONGO;
function dbConnect() {
  mongoose.connect(mongo)
  .then(console.log("DB connected"))
  .catch((err) => { console.log("Problem with connecting to DB server" + err) });
}



export default dbConnect;