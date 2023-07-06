import { Link } from "react-router-dom";

const Person = () => {
   return(
      <div className="bg-white flex justify-between items-center pl-12 pr-16 py-6 basis-1/2 flex-wrap border-b border-gray-200">
         <div className="flex items-center">
            <img src="../test.jpg" alt="avatar" className="mr-5 w-24 h-24 object-cover rounded-full" />
            <div className="mr-24">
               <Link to="/:userId/profile/:otherUserId" className="font-semibold text-gray-900 text-lg block">Name Surname</Link>
               <Link className="text-gray-400">123 followers</Link>
            </div>
         </div>
         <div className="font-semibold">
            <button className="text-white bg-green-400 rounded-md px-5 py-1 hover:bg-[#41d276]  active:bg-green-500 text-sm sm:text-base">Follow</button>
         </div>
      </div>
   )
}

export default Person;