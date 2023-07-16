import { NavLink, } from "react-router-dom";


const SidebarLeft = () => {
   return(
      <aside className="flex-grow-0 flex-shrink-0  sm:basis-[18%] px-4 py-6 border-r border-gray-100  bg-white">
         <nav id="sidebar" className="flex flex-col">
            <NavLink to="/:userId/feed" end className=" text-gray-800 font-semibold text-lg text-center active:text-green-600 hover:text-green-500 mb-4" >Feed</NavLink>
            <NavLink to="/:usedId/people" end className="text-gray-800 font-semibold text-lg text-center active:text-green-600 hover:text-green-500 mb-4">People</NavLink>
            <NavLink to="/:userId/followers" end className="text-gray-800 font-semibold text-lg text-center active:text-green-600 hover:text-green-500 mb-4">Followers</NavLink>
            <NavLink to="/:userId" end className="text-gray-800 font-semibold text-lg text-center active:text-green-600 hover:text-green-500 mb-4">Profile</NavLink>
            <NavLink to="/:userId/add" end className="text-gray-800 font-semibold text-lg text-center active:text-green-600 hover:text-green-500">Add post +</NavLink>
         </nav>
      </aside>
   )
}

export default SidebarLeft;