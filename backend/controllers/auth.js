import User from "../models/User.js";
import Verification from "../models/Verification.js";
import { generatePassword, validatePassword, issueJWT, sendVerificationCode } from "../lib/utils.js";

const login = async (req, res) => {
   try{
      //Check a user by email
      const user = await User.findOne({ email: req.body.email })
      


      //Check password if a user exists
      if (user && user.verified) {
         const match = await validatePassword(req.body.password, user.password);
         if (match) {
            const jwt = issueJWT(user);
            const userResponse = user.toObject();
            delete userResponse.password;
            return res.status(200).json({ error: false, message: "Successfully authorized", token: jwt.token, user: userResponse });
         } else {
            return res.status(401).json({ error: true, message: "Wrong password" });
         }
      }else if(user && !user.verified){
         return res.status(401).json({error: false, message: "Account is not verified"});
      }else {
         return res.status(401).json({ error: true, message: "Wrong email" });
      }

   }catch(err){
      return res.status(500).json({ error: true, message: err.message });
   }
}

const signup = async (req, res) => {
   try{
      console.log("REQ")
      //Check if the user already exists 
      let existingUser;
      existingUser = await User.findOne({username: req.body.username});
      if(existingUser){
         return res.status(409).json({ error: true, message: "Username is already taken" })
      }
      existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
         return res.status(409).json({ error: true, message: "This email is already used" })
      }

      //Check if password and password's confirmation match
      if(req.body.password !== req.body.confirmation){
         return res.status(400).json({ error: true, message: "Passwords do not match" })

      }

      //Create a new user
      const password = await generatePassword(req.body.password);

      const newUser = new User({
         email: req.body.email,
         firstName: req.body.firstname,
         lastName: req.body.lastname,
         password: password,
         confirmation: confirmation,
         birthday: req.body.birthday,
         sex: req.body.sex,
         country: req.body.country,
         city: req.body.city,
         about: req.body.about
      })

      await sendVerificationCode(req.body.email, "verification"); 
      await newUser.save();

      return res.status(201).json({error: false, message: "To finish creating an account verify your email"})

   }catch(err){
      return res.status(500).json({ error: true, message: err.message })

   }
}

const verifyAccount = async (req, res) => {
   try{
      const verificationEntity = await Verification.findOne({ email: req.body.email, type: "verification" });

      if (verificationEntity) {
         if (verificationEntity.code === req.body.code){
            await User.findOneAndUpdate({email: req.body.email}, {verified: true});
            await Verification.deleteOne({_id: verificationEntity._id});
            return res.status(200).json({ error: false, message: "Account has been verified" });
         }else{
            return res.status(403).json({ error: true, message: "Invalid verification code" });
         }
      }else{
         return res.status(400).json({ error: true, message: "No user with such email that needs to be verified" });
      }
   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
}

const resendVerificationCode = async (req, res) => {
   try{
      await sendVerificationCode(req.body.email, req.body.type);
      return res.status(200).json({ error: false, message: "Verification code has been resent" })
   }catch(err) {
      return res.status(500).json({ error: false, message: err.message })
   }
}

const updateEmail = async (req, res) => {
   try{
      await User.findOneAndUpdate({ email: req.body.incorrectEmail }, { email: req.body.correctEmail });
      await Verification.deleteMany({email: req.body.incorrectEmail});
      await sendVerificationCode(req.body.correctEmail, "verification");
      return res.status(200).json({error: false, message: "Email has been successfully updated"});
   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
}

//change email for not verified users (if user made a mistake and provided the wrong email while signing
//up but then left the page and went to forgotpassword page)
const restorePassword = async (req, res) => {
   try{
      const user = await User.findOne({email: req.body.email});
      if(user) {
         await sendVerificationCode(req.body.email, "restoring");
         return res.status(200).json({ error: false, message: `Enter a code sent to ${req.body.email} to proceed with changing password` });
      }else{
         return res.status(400).json({error: true, message: "No user with the provided email"});
      }
   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
}

const updatePassword = async (req, res) => {
   try{
      const verificationEntity = await Verification.findOne({email: req.body.email, type: "restoring"});
      if (req.body.code === verificationEntity.code) {
         const newPassword = await generatePassword(req.body.newPassword);
         await User.findOneAndUpdate({email: req.body.email}, {password: newPassword})
         await Verification.deleteOne({ _id: verificationEntity._id });
         return res.status(200).json({ error: false, message: "Password has been updated" });
      } else {
         return res.status(403).json({ error: true, message: "Wrong code" });
      }
   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
}



export { login, signup, verifyAccount, resendVerificationCode, updateEmail, restorePassword, updatePassword }