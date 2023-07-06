import SidebarLeft from "../components/SidebarLeft";
import { Link } from "react-router-dom";

const ExtendedProfile = () => {

   return(

      <div className="flex-1 flex">
         <SidebarLeft />
         <div className="flex flex-col px-16 py-6">
            <div >
               <img src="../test.jpg"  alt="Avatar" className="w-56 h-56 rounded-md mb-2 object-cover" />
               <button className="text-gray-500 ">Change picture</button>
               <span className="block font-bold text-gray-900 text-xl mb-2">Name Surname</span>

            </div>


            <div className=" ">
               <div className="text-gray-600 mb-4 font-medium">Email: <span className="font-normal">test@gmail.com</span></div>
               <div className="text-gray-600 mb-4 font-medium">Birthday: <span className="font-normal">12.02.2000</span></div>
               <div className="text-gray-600 mb-4 font-medium">Country: <span className="font-normal">Ukraine</span></div>
               <div className="text-gray-600 mb-4 font-medium">Town: <span className="font-normal">Lviv</span></div>
               <div className="text-gray-600 mb-6 font-medium">About: <span className="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi modi sapiente accusamus officiis voluptate aliquid quidem, commodi quas dolores distinctio doloribus. Exercitationem numquam quibusdam, nesciunt assumenda eum explicabo beatae!
               </span>
               </div>
               <div className="">
                  <Link to="/:userId/profile/edit" className="text-gray-500 font-medium border-2 border-gray-400 rounded-md px-5 py-1 hover:border-gray-500 hover:text-gray-600 active:text-gray-700 active:border-gray-500 text-sm sm:text-base">Edit</Link>
               </div>
            </div>



            
               
           
         </div>
      </div>
   )
}

export default ExtendedProfile;