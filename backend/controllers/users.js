import User from "../models/User.js";
import Verification from "../models/Verification.js";

const getAllUsers = async (req, res) => {
   try{
      const users = await User.find({verified: true}).select({password: 0, email: 0, notifications: 0, verified: 0});

      if(users.length !== 0){
         return res.status(200).json({error: false, message: "Users have been successfully fetched", users: users});
      }else{
         return res.status(200).json({error: false, message: "No users were found"});
      }
   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
}

const getSingleUser = async (req,res) => {
   try {
      const user = await User.findById(req.params.id).select({ password: 0, email: 0, notifications: 0, verified: 0 });
      if (user) {
         return res.status(200).json({ error: false, message: "User has been successfully fetched", user: user });
      } else {
         return res.status(400).json({ error: false, message: "No user was found" });
      }
   } catch (err) {
      return res.status(500).json({ error: true, message: err.message });
   }
}

const follow = async (req, res) => {
   try{
      if(req.params.id === req.params.idToFollow){
         return res.status(400).json({error: true, message: "Id mismatch"});
      }

      const user = await User.findById(req.params.id);
      const userToFollow = await User.findById(req.params.idToFollow);
      
      if(!user || !userToFollow){
         return res.status(400).json({ error: true, message: "Bad request: user is not found" });
      }

      //Update followings and followers arrays
      if (user.followings.indexOf(req.params.idToFollow) === -1 && userToFollow.followers.indexOf(req.params.id) === -1 ){
         user.followings.push(req.params.idToFollow);
         userToFollow.followers.push(req.params.id);
      }else{
         return res.status(409).json({ error: true, message: "User is already followed" });

      }

      //Save changes
      await user.save();
      await userToFollow.save();

      return res.status(200).json({error: false, message: "User has been followed"});

   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
}

const unfollow = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      const userToUnfollow = await User.findById(req.params.idToUnfollow);

      if (!user || !userToUnfollow) {
         return res.status(400).json({ error: true, message: "Bad request: user is not found" });
      }

      //Remove a user that is being followed and remove a follower from the arrays 
      const followedUserIndex = user.followings.indexOf(req.params.idToUnfollow);
      const followerIndex = userToUnfollow.followers.indexOf(req.params.id);

      if (followedUserIndex !== -1 && followerIndex !== -1) {
         user.followings.splice(followedUserIndex, 1);
         userToUnfollow.followers.splice(followerIndex, 1);
      }else{
         return res.status(409).json({ error: true, message: "User is not being followed" });
      }

      //Save changes
      await user.save();
      await userToUnfollow.save();

      return res.status(200).json({ error: false, message: "User has been unfollowed" });

   } catch (err) {
      return res.status(500).json({ error: true, message: err.message });
   }
}

const getFollowers = async (req, res) => {
   try{
      const user = await User.findById(req.params.id);

      if(!user){
         return res.status(400).json({ error: true, message: "Error: user is not found" });
      }

      const followers = user.followers;
      return res.status(200).json({ error: false, message: "Followers have been successfully fetched", followers: followers });


   }catch(err){
      return res.status(500).json({error: true, message: err.message});
   }
   
}

const getFollowings = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);

      if (!user) {
         return res.status(400).json({ error: true, message: "Error: user is not found" });
      }

      const followings = user.followings;
      return res.status(200).json({ error: false, message: "Followings have been successfully fetched", followings: followings });


   } catch (err) {
      return res.status(500).json({ error: true, message: err.message });
   }

}

const updateProfileInfo = async (req, res) => {
   try {
      if (req.body.username) {
         const anotherUser = await User.findOne({ username: req.body.username });
         if (anotherUser) {
            return res.status(409).json({ error: true, message: "Username is already taken" });
         }
      }

      //redactor it later
      if (req.body.email) {
         return res.status(409).json({ error: true, message: "have to provide code (another route)" });
      }

      if (req.body.password) {
         return res.status(409).json({ error: true, message: "have to provide code (another route, pw)" });

      }

      const filter = { _id: req.params.id };
      const update = { ...req.body };
      const user = await User.findOneAndUpdate(filter, update);
      if (user) {
         return res.status(200).json({ error: false, message: "Profile info has been successfully updated" });
      } else {
         return res.status(400).json({ error: true, message: "User is not found" });
      }
   } catch (err) {
      return res.status(500).json({ error: true, message: err.message });
   }

}


export { updateProfileInfo, getAllUsers, getSingleUser, follow, unfollow, getFollowers, getFollowings };