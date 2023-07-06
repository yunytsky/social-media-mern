import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div className="flex-1 flex flex-col justify-center">
         <h1 className="tracking-wide font-black text-4xl text-gray-800 text-center mb-4">Socialmedia web app</h1>
         <div className="flex flex-col justify-center items-center">
            <Link to="https://github.com/yunytsky" target="_blank" className="mb-4">
               <img src="git.svg" alt="github" className="w-16 h-16" />
            </Link>
            <Link to="auth/login" className="align-middle">
               <button className=" rounded-md border border-gray-600 text-center px-8 py-1 text-base font-semibold leading-6 text-gray-600 hover:bg-gray-100 active:bg-gray-200">Get started</button>
            </Link>
         </div>

      </div>
   );
}

export default Home;