import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/authSlice";

const PrivateRoutes = () => {
   const navigate = useNavigate();
   let token = useSelector((state) => state.token);
   const dispatch = useDispatch();

   const [auth, setAuth] = useState(false);
   const [isLoading, setIsLoading] = useState(true);


   useEffect(() => {
      if(token) {
         const url = import.meta.env.VITE_API_URL + "auth/protected";

         axios.get(url, {headers: {Authorization: token}})
            .then(response => {
               if(response.status === 200){
                  setAuth(true);
               }
            })
            .then(() => {
               setIsLoading(false);
            })
            .catch((err) => {
               dispatch(setLogout()); //sets token and user states to null as well as authorized to false 
               //(authorized redux state is used to determine what kind of headr should be loaded)

               setAuth(false);
               setIsLoading(false);
               console.log(err)
            })
         
      }else{
         navigate("/auth/login");
      }
   }, [])


   if(isLoading) {
      return (
         <div>Loading</div>
      )
   }

   return(
     auth ? <Outlet/> : <Navigate to="/auth/login" />
   )

} 

export default PrivateRoutes;