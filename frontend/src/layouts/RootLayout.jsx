import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
   return(
      <div className="h-screen flex flex-col">
         <Header/>
         <Outlet/>
         <Footer/>
      </div>
   )
}

export default RootLayout