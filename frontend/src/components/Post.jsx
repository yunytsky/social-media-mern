import like from "../assets/like.svg"
import comment from "../assets/comment.svg"

const Post = (props) => {
   return(

      <div className="border border-gray-200  py-5 px-24 w-5/6 bg-white mb-5 rounded-xl">
         {/* Post information */}
         <div className="mb-1">
            <span className="font-semibold text-gray-900 mr-4" >Name Surname</span>
            <span className="text-gray-500">{props.createdAt}</span>
         </div>
         {/* Post content */}
         <div className="flex flex-col mb-4">
            <p className="text-gray-900 leading-6">
               {props.text}
            </p>
         </div>

         {props.picture &&
            <div className="flex">
               <img src={"http://localhost:3000/images/" + props.picture} className="mb-5 w-5/6 rounded-lg object-cover mr-2" />
            </div>
         }





         {/* Functionality */}
         <div className="flex mb-1">
            <button className="mr-4 relative inline">
               <img src={like} alt="Like" className="w-5 h-5" />
            </button>
            <button className="mr-4 relative inline">
               <img src={comment} alt="Comment" className="w-5 h-5" />
            </button>
         </div>

         <button className="font-semibold text-gray-900 ">{props.likes === 1 ? props.likes + " like" : props.likes + " likes"}</button>
         <button className="block text-gray-400 mb-1">{props.comments ? "Show all comments" : "No comments yet"}</button>

         
      </div>

      
      
   );
}

export default Post;