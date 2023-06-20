import mongoose from "mongoose";
const { Schema } = mongoose;

const notificationSchema = new Schema({
   title: String,
   text: String,
   expireAt: {
      type: Date,
      expires: 60,
      default: new Date(Date.now() + 604800000) // 604800000 = 7 days in ms
   }
}, {timestamps: true});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
export {notificationSchema};