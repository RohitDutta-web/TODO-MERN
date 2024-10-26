import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  }, priority: {
    type: String,
    required: true,
    enum:["low", "Mid", "High"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
}, { timestamps: true })

const Post = mongoose.model("post", postSchema)

export default Post;