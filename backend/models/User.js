import mongoose from "mongoose";
import { notificationSchema } from "./Notification";
import {postSchema} from "./Post"
const {Schema} = mongoose;

const personalInformationSchema = new Schema({
   firstName: String,
   lastName: String,
   country: String,
   town: String,
   birthDate: Date,
   about: String,
   profilePicture: {
      type: String,
      default: ""
   }
})

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true
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
      type: [ObjectId],
      default: []
   },
   following: {
      type: [ObjectId],
      default: []
   },
   notifications: {
      type: [notificationSchema],
      default: []
   },
   posts: {
      type: [postSchema],
      default: []
   },
   personalInformation: personalInformationSchema
});

const User = mongoose.model("User", userSchema);

export default User;