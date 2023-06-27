import mongoose from "mongoose";
import { commentSchema } from "./Comment.js";
const { Schema } = mongoose;

const postSchema = new Schema({
   text: String,
   likes: {
      type: [mongoose.ObjectId],
      default: []
   },
   comments: {
      type: [commentSchema],
      default: []
   },
   author: mongoose.ObjectId,
   picture: {
      type: String,
      default: ""
   }
});

const Post = mongoose.model("Post", postSchema);

export default Post;
export {postSchema};