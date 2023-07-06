import {Link} from "react-router-dom";


const Header = () => {
   return(
      <header className=" flex sm:flex-row justify-between px-3  sm:px-12 py-4 border-b items-center ">
         <Link to="/" className="logo select-none ml-4 sm:ml-2 text-gray-700 font-black text-lg mr-4 sm:text-xl ">
            Socmedia
         </Link>
         <div className="font-semibold">
            {/* Unauthorized */}
            {/* <Link to="/auth/login" className="text-gray-700 mr-3 sm:mr-6 hover:text-gray-600 active:text-gray-800  text-sm sm:text-base">Log in</Link>
            <Link to="/auth/signup" className="text-white bg-green-400 rounded-md px-5 py-1 hover:bg-[#41d276]  active:bg-green-500 text-sm sm:text-base">Sign up</Link> */}
            {/* Authorized */}
            <div className="flex items-center">
               <span className="text-sm mr-2 text-gray-900 font-semibold tracking-wide">Name Surname</span>
               <img src="/test-2.jpg" alt="avatar" className="w-9 h-9 rounded-full object-cover" />
            </div>
         </div>
      </header>
   )
}

export default Header;