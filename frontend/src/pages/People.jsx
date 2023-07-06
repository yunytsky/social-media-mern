import Person from "../components/Person";
import SidebarLeft from "../components/SidebarLeft";
import Following from "../components/Following";
import { Link } from "react-router-dom";

const People = () => {
   return(
      <div className="flex-1 flex">
         <SidebarLeft/>
         <div className="bg-gray-50 flex-grow-1 flex-shrink-1 flex-auto">
            <Person/>
            <Person />
            <Person />
            <Person />

         </div>

      </div>
   );
}

export default People;