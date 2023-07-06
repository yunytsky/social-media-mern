import Post from "../components/Post";
import SidebarLeft from "../components/SidebarLeft";

const Profile = () => {
   return(
      <div className="flex-1 flex">
         <SidebarLeft />
         <div className="flex flex-col items-center pt-8 pb-4 px-12">
            <div>
               <img src="/test-3.jpg" alt="Avatar" className="w-56 h-56 rounded-full mb-2 object-cover" />
               <span className="block font-bold text-gray-900 text-[1.7rem] tracking-wide text-center">Name Surname</span>
            </div>
            <span className="block  text-center w-1/2  text-gray-700 mb-2">Lorem ipsum cumque magni odit rerum quaerat hic impedit odio. Optio ad eaque debitis dolor beatae maxime similique.</span>

            <div className="font-light  text-gray-400 mb-4">
               <button className="tracking-wide mr-8 hover:text-gray-500 active:text-gray-600">4 posts</button>
               <button className="tracking-wide mr-8 hover:text-gray-500 active:text-gray-600">234 followers</button>
               <button className="tracking-wide hover:text-gray-500 active:text-gray-600">132 following</button>
            </div>
            <div className="font-semibold mb-8">
               <button className="text-white bg-green-400 rounded-md px-5 py-1 hover:bg-[#41d276]  active:bg-green-500 text-sm sm:text-base">Follow</button>
            </div>
            <div className="border-t border-gray-100 py-8 flex flex-col items-center">
               <Post/>
               <Post />
               <Post />
               <Post imagepath="/test-3.jpg" />
            </div>
         </div>
      </div>
   )
}

export default Profile;