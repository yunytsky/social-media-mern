import mongoose from "mongoose";
import { commentSchema } from "./Comment";
const { Schema } = mongoose;

const postSchema = new Schema({
   text: String,
   likes: {
      type: [ObjectId],
      default: []
   },
   comments: {
      type: [commentSchema],
      default: []
   },
   picture: String
});

const Post = mongoose.model("Post", postSchema);

export default postSchema;
export {postSchema};