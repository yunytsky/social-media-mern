import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new Schema({
   commenter: {
      type: ObjectId,
      required: true
   },
   text: {
      type: String,
      required: true
   }
}, {timestamps: true})

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
export {commentSchema};