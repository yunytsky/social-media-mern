import mongoose from "mongoose";
import { notificationSchema } from "./Notification.js";
import { postSchema } from "./Post.js"
const {Schema} = mongoose;

const optionalInformationSchema = new Schema({
   country: String,
   city: String,
   profilePicture: {
      type: String,
      default: ""
   }
})

const userSchema = new Schema({
   firstname: {
      type: String,
      required: true
   },
   lastname: {
      type: String,
      required: true
   },
   birthday: {
      type: Date,
      required: true
   },
   sex: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true,
      unique: true
   },
   password: {
      type: String,
      required: true,
      min: 6
   },
   followers: {
      type: [mongoose.ObjectId],
      default: []
   },
   followings: {
      type: [mongoose.ObjectId],
      default: []
   },
   notifications: {
      type: [notificationSchema],
      default: []
   },
   posts: [{type: Schema.Types.ObjectId, ref: "Post", default: []}],
   about: {
      type: String,
      default: ""
   },
   optionalInformation: optionalInformationSchema,
   verified: {
      type: Boolean,
      default: false
   }
});

const User = mongoose.model("User", userSchema);

export default User;