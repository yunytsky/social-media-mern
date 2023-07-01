import {Link} from "react-router-dom";
const Header = () => {
   return(
      <header className=" flex justify-between px-12 py-4 border-b-2 items-center">
         <div className="text-gray-700 font-bold text-xl">
            Logo
         </div>
         <div className="font-semibold">
            <Link className="text-gray-800 mr-6 ">Log in</Link>
            <Link className="text-white bg-green-400 rounded-md px-5 py-1">Sign up</Link>

         </div>
      </header>
   )
}

export default Header;