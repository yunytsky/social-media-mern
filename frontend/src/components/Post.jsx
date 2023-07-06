import like from "../assets/like.svg"
import comment from "../assets/comment.svg"

const Post = (props) => {
   return(

      <div className="border border-gray-200  py-6 px-24 w-5/6 bg-white mb-2">
         {/* Post information */}
         <div className="mb-2">
            <span className="font-semibold text-gray-900 mr-4" >Name Surname</span>
            <span className="text-gray-500">June 15, 2023</span>
         </div>
         {/* Post content */}
         <div className="flex flex-col mb-4">
            <p className="text-gray-900 leading-6">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem deleniti blanditiis omnis facilis, vitae quae unde iste ad iure cum nesciunt eos quasi dolor. Cupiditate ratione officiis dolor nam molestias?
               Quos, earum necessitatibus eum temporibus laboriosam hic corrupti exercitationem laudantium laborum, nesciunt tempora voluptas distinctio ea ullam? Et quasi sit, sunt corporis eligendi laboriosam dicta fugiat assumenda quos natus temporibus.
            </p>
         </div>

         {props.imagepath &&
            <div className="flex images justify-center">
               <img src={props.imagepath} className="mb-5 w-3/4 rounded-lg object-cover mr-2" />
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

         <button className="font-semibold text-gray-900 ">999 likes</button>
         <button className="block text-gray-400 mb-1">Show all 34 comments</button>

         
      </div>

      
      
   );
}

export default Post;