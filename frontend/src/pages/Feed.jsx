import Post from "../components/Post";

import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";

const Feed = () => {
   return (
      <div className="flex-1 flex bg-gray-50">

         {/* Sidebar */}
         <SidebarLeft />

         {/* Main */}
         <main className=" p-5 pt-8 items-center flex flex-col  flex-grow-1 flex-shrink-1 basis-auto w-full ">
            {/* New post */}
            {/* <AddPost/> */}
            
            <Post className="" imagepath="../post.jpg" />
            <Post className="" imagepath="../test.jpg" />
            <Post className="" />
            <Post className="" imagepath="../test-2.jpg" />

         </main>

         {/* Notifications and followings sections */}
         <SidebarRight/>

      </div>
   );
}

export default Feed;