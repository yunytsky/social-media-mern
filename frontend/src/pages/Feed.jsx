import Post from "../components/Post";
import axios from "axios";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import { useLoaderData } from "react-router-dom";

const Feed = () => {
   let data = useLoaderData();
   
   const posts = data.posts.map((post) => {
      const createdAt = new Date(post.createdAt);
      console.log(post)
      return <Post
         key={post._id}
         text={post.text}
         picture={post.picture}
         likes={post.likes.length}
         comments = {post.comments.length}
         createdAt={createdAt.toDateString().split(" ").splice(1).join(" ")}
         imagepath="../test.jpg"
      />
   }).reverse();

   return (
      <div className="flex-1 flex flex-col sm:flex-row bg-gray-50">

         {/* Sidebar */}
         <SidebarLeft />

         {/* Main */}
         <main className=" p-5 pt-8 items-center flex flex-col  flex-grow-1 flex-shrink-1 basis-auto w-full ">
            

            {posts}
            
            {/* <Post className="" imagepath="../post.jpg" />
            <Post className="" imagepath="../test.jpg" />
            <Post className="" />
            <Post className="" imagepath="../test-2.jpg" /> */}

         </main>

         {/* Notifications and followings sections */}
         <SidebarRight/>

      </div>
   );
}

async function feedLoader() {
   try{
      const url = import.meta.env.VITE_API_URL + "posts";
      const response = await axios({
         url: url,
         method: "GET"
      })
      
      return response.data;

   }catch(err){
      if (err.response) {
         return err.response.data;
      } else {
         throw Error("Internal sever error");
      }
      // throw Error("Internal sever error");
   }
}

export default Feed;
export {feedLoader};