import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import nodemailer from "nodemailer";
import Verification from "../models/Verification.js"
import dotenv from "dotenv"
dotenv.config()

//Password generation and validation
async function generatePassword(plainTextPassword) {
   try{
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(plainTextPassword, salt);
      return password;

   }catch(err){
      throw err;
   }
}

async function validatePassword(plainTextPassword, hashedPassword) {
   try{
      const match = await bcrypt.compare(plainTextPassword, hashedPassword);
      return match;
   }catch(err){
      throw err;
   }
}

//JWT
function issueJWT(user){
   const id = user._id;
   const expiresIn = "3d";

   const payload = {
        sub: id,
        iat: Date.now()
   };

   const signedToken = jsonwebtoken.sign(payload, process.env.SECRET, { expiresIn: expiresIn, algorithm: "HS256" })

   return {token: `Bareer ${signedToken}`};
}

//Generate verification code
function generateCode() {
   return Math.floor(Math.random() * (100000 - 10000) + 10000);
}

//Send verification email
async function sendVerificationCode(reciever, type) {
   try{

      const code = generateCode();
      const account =  await nodemailer.createTestAccount();

      let transporter = nodemailer.createTransport({
         host: 'smtp.ethereal.email',
         port: 587,
         secure: false,
         auth: {
            user: account.user,
            pass: account.pass
         }
      });

      let options;
      if(type === "verification"){
         options = {
            from: account.user,
            to: reciever,
            subject: "SocialMedia - verification code",
            text: `Code for verification: ${code}`,
            html: "<div>Code will expire in 1 hour<br/>If you have not attempted to register on socialmedia.com, ignore this message</div>"
         }
      }else if(type === "restoring") {
         options = {
            from: account.user,
            to: reciever,
            subject: "SocialMedia - restoring password",
            text: `Code for restoring password: ${code}`,
            html: "<div>Code will expire in 1 hour<br/>If you have not attempted to change your password, ignore this message</div>"
         }
      }

      const info = await transporter.sendMail(options);

      //Saving a code in db
      const verificationEntity = await Verification.findOneAndUpdate({ email: reciever, type: type }, { code: code });
      if (!verificationEntity) {
         const newVerificationEntity = new Verification({ email: reciever, type: type, code: code });
         await newVerificationEntity.save();
      }

      console.log('Preview URL: ' + nodemailer.getTestMessageUrl(info));

      return info

   }catch(err){
      throw err;
   }

}

export { generatePassword, validatePassword, issueJWT, sendVerificationCode };