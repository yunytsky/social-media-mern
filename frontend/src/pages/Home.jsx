import { Link } from "react-router-dom";
import githubIcon from "../assets/git-white.svg"

const Home = () => {
   return (
      <div className=" bg-bg bg-cover bg-center flex-1 flex flex-col justify-center px-3">
         <h1 className="font-mono tracking-wide font-black text-3xl sm:text-5xl text-white text-center mb-4 opacity-80 select-none">Forest web app</h1>
         <div className="flex flex-col justify-center items-center">
            <Link to="https://github.com/yunytsky" target="_blank" className="mb-5">
               <img src={githubIcon} alt="github" className="opacity-80 w-14 h-14 sm:w-16 sm:h-16" />
            </Link>

            <div >
               <Link to="auth/login" className="align-middle font-mono hidden sm:block ">
                  <button className="opacity-80 rounded-md bg-white text-center px-3 sm:px-8 py-0.5 sm:py-1 text-sm sm:text-base font-semibold leading-6 text-gray-900 hover:bg-gray-100 active:bg-gray-200">Get started</button>
               </Link>
               <Link to="auth/login" className="align-middle font-mono sm:hidden">
                  <button className="w-[5rem] opacity-80 rounded-md bg-white text-center px-2 py-0.5 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 active:bg-gray-200 mr-3">Log In</button>
               </Link>
               <Link to="auth/login" className="align-middle font-mono sm:hidden ">
                  <button className="w-[5rem] opacity-80 rounded-md bg-white text-center px-2 py-0.5 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 active:bg-gray-200">Sign Up</button>
               </Link>
            </div>

         </div>

      </div>
   );
}

export default Home;