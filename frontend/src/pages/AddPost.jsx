import Post from "../components/Post";
import SidebarLeft from "../components/SidebarLeft";
import SidebarRight from "../components/SidebarRight";
import emojiIcon from "../assets/emoji.svg";
import pollIcon from "../assets/poll.svg";
import galleryIcon from "../assets/gallery.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const AddPost = () => {
   const {token, user} = useSelector(state => state);
   
   const [error, setError] = useState({error: false, message: ""});
   const [message, setMessage] = useState("");
   const [imagePreview, setImagePreview] = useState("");
   const [file, setFile] = useState(null);
   const [text, setText] = useState("");

   useEffect(() => {
      return () => {
         if (imagePreview) {
            console.log("UNMOUNT_REVOKE")
            URL.revokeObjectURL(imagePreview);
         }
      };
   }, [imagePreview]);

   const validateAndPreview = (event) => {
      if(!event.target.files || event.target.files.length === 0){
         return;
      }

      if(message){
         setMessage("");
      }

      const file = event.target.files[0];

      const validExtensions = ["png", "jpg", "jpeg"];
      const fileExtension = file.type.split("/")[1];
            
      if(validExtensions.includes(fileExtension)){
         setError({ error: false, message: "" });
         setFile(file);

         const fileURL = URL.createObjectURL(file);
         setImagePreview(fileURL);
      }else{
         setError({ error: true, message: "File extension is invalid" });
         setImagePreview("");
      }
   }

   const handleSubmit = async (event) => {
      event.preventDefault();
      try{
         setError({ error: false, message: "" });
         const url = import.meta.env.VITE_API_URL + `posts/${user._id}/create`;
         console.log(url)
         const response = await axios({
            method: "POST",
            headers: {
               "Authorization": token,
               "Content-Type": "multipart/form-data"
            },
            url: url,
            data: {
               text: text,
               file: file
            }
         });
         
         setMessage(response.data.message);
         setImagePreview("");
         setText("");
         setFile(null);

      }catch(err){
         if(err.response && err.response.status !== 500 ){
            setError({ error: true, message: err.response.data.message });
         }else{
            setError({error: true, message: "Internal server error"});
         }
      }
   }


   return (
      <div className="flex-1 flex bg-gray-50">

         {/* Sidebar */}
         <SidebarLeft />

         {/* Main - add new post*/}
         <main className=" p-5 pt-8 items-center flex flex-col  flex-grow-1 flex-shrink-1 basis-auto w-full ">

            <div className="mb-12 px-40 w-full ">

               <form onSubmit={handleSubmit} className="flex flex-col justify-between">
                  
                  <label htmlFor="aboutme" className="mb-3  text-lg block text-nase font-semibold leading-6 text-gray-500">Add new post</label>
                  <textarea 
                     name="aboutme"
                     id="aboutme"
                     maxLength="500"
                     rows="4"
                     value={text}
                     onChange={(e) => setText(e.target.value)}
                     style={{ fontSize: 1.2 + "rem" }}
                     className="mb-4 block w-full px-3 py-2 rounded-md  text-gray-900  ring-1 ring-gray-200 focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" ></textarea>

                  {error.error && <p className="first-letter:capitalize text-rose-400 font-medium ">{error.message}</p>}
                  {imagePreview && <img src={imagePreview} className="mb-5 rounded-lg mr-2" />}

                  <div className="flex justify-between items-center">
                     <label className="cursor-pointer">
                        {/* Icon */}
                        <div id="upload-image" className="flex items-center ">
                           <img src={galleryIcon} alt="photo" className="w-6 h-6 mr-1 inline" />
                           <span className="text-gray-600 text-sm tracking-wide">Upload image</span>
                        </div>

                        <input
                           type="file"
                           name="file"
                           id="file"
                           onChange={event => {validateAndPreview(event);}}
                           className="hidden"
                        />
                     
                     </label>

                     <button type="submit" className="font-semibold text-white bg-green-400 rounded-md px-5 py-1 hover:bg-[#41d276]  active:bg-green-500 text-sm sm:text-base">Publish</button>

                  </div>

                  {message && <p className="first-letter:capitalize text-green-400 font-medium ">{message}</p>}


               </form>

            </div>

         </main>

         {/* Notifications and followings sections */}
         <SidebarRight />

      </div>
   );
}

export default AddPost;