import Comment from "../models/Comment.js";
import Post from "../models/Post.js"
import User from "../models/User.js"


const createPost = async (req, res) => {
   try{      
      const user = await User.findById(req.user.sub);
      if (!user) {
         return res.status(400).json({error: true, message: "Bad request: user is not found"});
      }
      
      const newPost = new Post({
         text: req.body.text,
         author: req.params.userId
      })

      user.posts.push(newPost);

      await newPost.save();
      await user.save();

      return res.status(201).json({ error: false, message: "Post has been created" });

   }catch(err){
      return res.status(500).json({ error: true, message: err.message});
   }
}

const like = async (req, res) => {
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

export {createPost, like, comment};