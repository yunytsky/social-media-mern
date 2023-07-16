import { useSelector } from "react-redux";
import {Link} from "react-router-dom";


const Header = () => {
   const {authorized, user} = useSelector((state) => state);

   const logoAuth = "logo before:left-[-14%] before:top-[34%] sm:before:top-[37%] select-none text-gray-700 font-black text-lg sm:text-xl pl-1.5 ml-2.5 mr-4"
   const logoNotAuth = "logo before:left-[-14%] before:top-[34%] sm:before:top-[37%] select-none text-gray-700 font-black text-lg sm:text-xl pl-1.5 my-0 mx-auto sm:ml-2.5 sm:mr-4 "

   return(
      <header className="flex sm:flex-row justify-between px-3 sm:px-12 py-4 border-b items-center ">
         <Link to="/" className={authorized ? logoAuth : logoNotAuth}>
            Forest
         </Link>
         <div className="font-semibold">
            {authorized ? 
               <div className="flex flex-col cursor-pointer sm:cursor-auto sm:flex-row items-center">
                  {/* Larger screens */}
                  <Link to="/:userId" id="header-user" className="cursor-pointer">
                     <span className="text-sm mr-2 text-gray-900 font-semibold tracking-wide">{user.firstName + " " + user.lastName}</span>
                     <img src="/test-2.jpg" alt="avatar" className="inline w-9 h-9 rounded-full object-cover" />
                  </Link>
                  {/* Mobiles */}
                  <span className="sm:hidden bg-green-500 rounded w-6 h-1 block mb-1"></span>
                  <span className="sm:hidden bg-green-500 rounded w-6 h-1 block mb-1"></span>
                  <span className="sm:hidden bg-green-500 rounded w-6 h-1 block mb-1"></span>
               </div>
             : 
               <div id="header-links">
                  <Link to="/auth/login" className="text-gray-700 mr-3 sm:mr-6 hover:text-gray-600 active:text-gray-800  text-sm sm:text-base">Log in</Link>
                  <Link to="/auth/signup" className="text-white bg-green-400 rounded-md px-5 py-1 hover:bg-[#41d276]  active:bg-green-500 text-sm sm:text-base">Sign up</Link>
               </div>
            }
         </div>
      </header>
   )
}

export default Header;