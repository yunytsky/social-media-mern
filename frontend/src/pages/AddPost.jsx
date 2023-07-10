import Post from "../components/Post";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import emojiIcon from "../assets/emoji.svg";
import pollIcon from "../assets/poll.svg";
import galleryIcon from "../assets/gallery.svg";
import { Link } from "react-router-dom";

const AddPost = () => {
   return (
      <div className="flex-1 flex bg-gray-50">

         {/* Sidebar */}
         <SidebarLeft />

         {/* Main - add new post*/}
         <main className=" p-5 pt-8 items-center flex flex-col  flex-grow-1 flex-shrink-1 basis-auto w-full ">
            <div className="mb-12 px-40 w-full ">
         <label htmlFor="aboutme" className="mb-3  text-lg block text-nase font-semibold leading-6 text-gray-500">Add new post</label>
         <div className="mb-4">
            <textarea  name="aboutme" id="aboutme" maxLength="300" style={{fontSize: 1.2 + "rem"}} className=" block w-full px-3 py-2 rounded-md  text-gray-900  ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" ></textarea>
         </div> 

         <div className="flex justify-between">
            <div className="mr-4">
               <button>
                  <img id="icon" src={galleryIcon} alt="photo" className=" w-5 h-5 mr-2" />
               </button>
               <button>
                  <img id="icon" src={pollIcon} alt="poll" className="w-5 h-5 mr-2" />
               </button>
               <button>
                  <img id="icon" src={emojiIcon} alt="emj" className="w-5 h-5" />
               </button>
            </div>

            <div className="font-semibold">
               <Link to="/auth/signup" className="text-white bg-green-400 rounded-md px-5 py-1 hover:bg-[#41d276]  active:bg-green-500 text-sm sm:text-base">Publish</Link>
            </div>
         </div>

      </div>

         </main>

         {/* Notifications and followings sections */}
         <SidebarRight />

      </div>
   );
}

export default AddPost;