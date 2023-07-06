import { Link } from "react-router-dom";
import Following from "./Following";
import followingsIcon from "../assets/followings.svg"
import notificationIcon from "../assets/notification.svg"

const SidebarRight = () => {
   return(
      <aside className="flex flex-row-reverse items-start flex-grow-0 flex-shrink-0  basis-[27%]">
         <div className="px-5 py-8 flex h-full flex-col flex-grow-0 flex-shrink-0 bg-white border-l border-gray-200 ">
            <button>
               <img src={notificationIcon} alt="Notifications" className="w-6 h-6 object-cover mb-6"  />
            </button>
            <button>
               <img src={followingsIcon} alt="Notifications" className="w-6 h-6 object-cover" />

            </button>
         </div>

         {/* Notifications section */}
         <div className="py-4 text-center border-b border-l border-gray-200 bg-white  ">
            <span id="notification" className=" inline-block text-gray-800 font-semibold text-lg relative">Notifications</span>
            {/* <span className="inline-block text-gray-700 ">You have no notifications yet</span> */}

            <div className="text-left">
               {/* Single notification */}
               <Link className="px-5 py-3  flex justify-between hover:bg-slate-100 active:bg-[#ebeff4] items-center">
                  <p className="text-gray-800 font-medium mr-2">Name surname followed you
                     <span className="text-gray-600 font-light ml-2">5h</span>
                  </p>
                  <img src="../test-ava.jpg" className="w-11 h-11 object-cover rounded-full" />
               </Link>

               {/* Single notification */}
               <Link className="px-5 py-3 hover:bg-slate-100 active:bg-[#ebeff4] flex justify-between items-center">
                  <p className="text-gray-800 font-medium  mr-2">Name Surname liked your post
                     <span className="text-gray-600 font-light ml-2">3d</span>
                  </p>
                  <img src="../bg.jpg" className="w-11 h-11 object-cover" />

               </Link>

               {/* Single notification */}
               <Link className="px-5 py-3 hover:bg-slate-100 active:bg-[#ebeff4] flex justify-between items-center mb-2">
                  <p className="text-gray-800 font-medium  mr-2">Name Surname commented your post
                     <span className="text-gray-600 font-light ml-2">5d</span>
                  </p>
                  <img src="../test-3.jpg" className="w-11 h-11 object-cover" />
               </Link>

            </div>

         </div>
      </aside>


      // <aside className="flex-grow-0 flex-shrink-0 basis-[22%] flex flex-col items-center   ">
         // {/* Notifications section */}
         // <div className="py-4  text-center w-full border-b border-l border-gray-200 bg-white  ">
         //    <span id="notification" className=" inline-block text-gray-800 font-semibold text-lg relative">Notifications</span>
         //    {/* <span className="inline-block text-gray-700 ">You have no notifications yet</span> */}


         //    <div className="text-left">
         //       {/* Single notification */}
         //       <Link className="px-5 py-3  flex justify-between hover:bg-slate-100 active:bg-[#ebeff4] items-center">
         //          <p className="text-gray-800 font-medium mr-2">Name surname followed you
         //             <span className="text-gray-600 font-light ml-2">5h</span>
         //          </p>
         //          <img src="../test-ava.jpg" className="w-11 h-11 object-cover rounded-full" />
         //       </Link>

         //       {/* Single notification */}
         //       <Link className="px-5 py-3 hover:bg-slate-100 active:bg-[#ebeff4] flex justify-between items-center">
         //          <p className="text-gray-800 font-medium  mr-2">Name Surname liked your post
         //             <span className="text-gray-600 font-light ml-2">3d</span>
         //          </p>
         //          <img src="../bg.jpg" className="w-11 h-11 object-cover" />

         //       </Link>

         //       {/* Single notification */}
         //       <Link className="px-5 py-3 hover:bg-slate-100 active:bg-[#ebeff4] flex justify-between items-center mb-2">
         //          <p className="text-gray-800 font-medium  mr-2">Name Surname commented your post
         //             <span className="text-gray-600 font-light ml-2">5d</span>
         //          </p>
         //          <img src="../test-3.jpg" className="w-11 h-11 object-cover" />

         //       </Link>

         //    </div>

         // </div>

      //    {/* Followings section */}
      //    <div className="w-full  py-4 text-center border-b border-l border-gray-200 bg-white">
      //       <span className="inline-block text-gray-800 font-semibold text-lg mb-2">Followings</span>
      //       <Following imagePath="../test-ava.jpg" />
      //       <Following imagePath="../test-ava-2.jpg" />
      //       <Following imagePath="../bg.jpg" />
      //       <Following imagePath="../test.jpg" />


      //    </div>
      // </aside>
   );
}

export default SidebarRight;