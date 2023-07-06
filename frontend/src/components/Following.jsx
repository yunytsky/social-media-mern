import { Link } from "react-router-dom";

const Following = (props) => {
   return(
      <Link className="block px-4 py-3 text-left hover:bg-slate-100 active:bg-[#ebeff4] ">
         <img src={props.imagePath} className="w-11 h-11 object-cover rounded-full inline-block mr-4" />
         <span className="text-gray-800 font-medium  hover:text-gray-900">Name Surname</span>
      </Link>
   )
}

export default Following;