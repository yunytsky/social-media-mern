import mongoose from "mongoose";
const { Schema } = mongoose;

const verificationSchema = new Schema({
   email: {
      type: String,
      required: true
   },
   code: {
      type: Number,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   expireAt: {
      type: Date,
      expires: 5,
      default: new Date(Date.now() + 3600000) // 3600000 == 1 hour in ms
   }
})

const Verification = mongoose.model("Verification", verificationSchema);

export default Verification;