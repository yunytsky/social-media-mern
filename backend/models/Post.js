import mongoose from "mongoose";
import { commentSchema } from "./Comment.js";
import User from "./User.js";
const { Schema } = mongoose;

const postSchema = new Schema({
   text: String,
   likes: {
      type: [Schema.Types.ObjectId],
      default: []
   },
   comments: {
      type: [commentSchema],
      default: []
   },
   author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
   },
   picture: {
      type: String,
      default: ""
   }
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);

export default Post;
export {postSchema};