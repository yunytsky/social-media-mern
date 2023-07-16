import Comment from "../models/Comment.js";
import Post from "../models/Post.js"
import User from "../models/User.js"

const createPost = async (req, res) => {
   try{      
      const user = await User.findById(req.user.sub);
      
      if (!user || req.user.sub !== req.params.userId.toString()) {
         return res.status(400).json({error: true, message: "Bad request: user is not found"});
      }
      
      let newPostInfo = {
         text: req.body.text,
         author: req.params.userId
      }

      if(req.file){
         newPostInfo.picture = req.file.filename;
      }

      const newPost = new Post(newPostInfo)
      console.log(newPost)
      user.posts.push(newPost);

      await newPost.save();
      await user.save();
      
      return res.status(201).json({ error: false, message: "Post has been created" });

   }catch(err){
      console.log(err)
      return res.status(500).json({ error: true, message: err.message});
   }
}

const deletePost = async (req,res) => {
   try {
      
      const user = await User.findById(req.user.sub);
      const post = await Post.findById(req.params.postId);

      if (!user) {
         return res.status(400).json({ error: true, message: "Bad request: user is not found" });
      }else if(!post){
         return res.status(400).json({ error: true, message: "Bad request: post is not found" });
      }

      if (post.author.toString() !== req.user.sub){
         return res.status(403).json({ error: true, message: "Action forbidden" });
      }

      await Post.deleteOne({ _id: post._id });
      await user.posts.splice(user.posts.indexOf(post), 1);
      await user.save();

      return res.status(200).json({ error: false, message: "Post has been removed" });

   } catch (err) {
      return res.status(500).json({ error: true, message: err.message });
   }
}

const likeUnlike = async (req, res) => {
   try{
      const post = await Post.findById(req.params.postId);

      if(!post){
         return res.status(400).json({ error: true, message: "Bad request: post does not exist" });
      }

      const index = post.likes.indexOf(req.user.sub);
      if(index === -1){
         post.likes.push(req.user.sub);
      }else{
         post.splice(index, 1);
         return res.status(200).json({ error: false, message: "Post has been unliked" });
      }

      await post.save();

      return res.status(200).json({ error: false, message: "Post has been liked" });

   }catch(err){
      return res.status(500).json({ error: true, message: err.message });
   }
}

const comment = async (req, res) => {
   try{
      const newComment = new Comment({
         commenter: req.user.sub,
         text: req.body.text
      });

      const post = await Post.findById(req.params.postId);

      if (!post) {
         return res.status(400).json({ error: true, message: "Bad request: post does not exist" });
      }

      post.comments.push(newComment);

      await newComment.save();
      await post.save();

      return res.status(200).json({ error: true, message: "Comment has been successfully added" });

   }catch(err){
      return res.status(500).json({ error: true, message: err.message });
   }
 

}

const getAllPosts = async (req, res) => {
   try{
      const posts = await Post.find({});
      return res.status(200).json({error: false, message: "Posts have been successfully fetched", posts:posts});
   }catch(err){
      return res.status(500).json({ error: true, message: err.message });

   }   
}

const getUserPosts = async (req, res) => {
   try {
      const posts = await Post.find({author: req.params.userId});
      return res.status(200).json({ error: false, message: "Posts have been successfully fetched", posts: posts });
   } catch (err) {
      return res.status(500).json({ error: true, message: err.message });

   }
}

export { createPost, likeUnlike, comment, deletePost, getAllPosts, getUserPosts };