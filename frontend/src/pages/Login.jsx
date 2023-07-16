import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setLogin} from "../redux/authSlice"
import {  useState } from "react";
import { Formik, Form} from "formik";
import { CustomInput } from "../components/Forms/CustomInputs";
import {loginSchema} from "../schemas/index"

const Login = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [error, setError] = useState();

   const handleSubmit = async (values, actions) => {
      try {
         const url = import.meta.env.VITE_API_URL + "auth/log-in";
         const response = await axios({
            method: "POST",
            data: {
               email: values.email,
               password: values.password
            },
            url: url
         })
         
         if(response.data.user){
            console.log(response.data.user)
            dispatch(setLogin({user: response.data.user, token: response.data.token, authorized: true}));
         }

         actions.resetForm();

         let redirectUrl = "/" + response.data.user._id + "/feed"
         navigate(redirectUrl);

      } catch (err) {
         if (err.response) {
            setError(err.response.data.message);
         } else {
            setError("Internal server error");
         }
      }
   }


   return (
      <div className="flex flex-col justify-center pb-10 pt-2 px-6 py-2 flex-1">
         
         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-3xl font-bold leading-9 tracking-tight text-gray-600">Log in</h2>
            <p className="pt-3  text-gray-400">Don't have an account yet?<Link to={"/auth/signup"} className=" text-green-400 font-bold hover:text-[#41d276]  active:text-green-300"> Sign up</Link></p>
         </div>
         
         {/* Form */}
         <div className="mt-4 mb-3 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik
               initialValues={{email: "", password: ""}}
               validationSchema={loginSchema}
               onSubmit={handleSubmit}
               validateOnChange={false}
               validateOnBlur={false}
            >
               <Form>
                  <CustomInput
                     label="Email"
                     name="email"
                     id="email"
                     type="email"
                  />
                  <CustomInput
                     label="Password"
                     name="password"
                     id="password"
                     type="password"
                  />

                  {/* Forgot password*/}
                  <div className="mt-[-0.5rem] mb-5">
                     <Link to={"/auth/reset-password"} className=" font-semibold text-green-400 hover:text-[#41d276]  active:text-green-300">Forgot password?</Link>
                  </div>

                  {/* Login button */}
                  <div >
                     <button type="submit" className="flex w-full justify-center rounded-md bg-green-400 px-3 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-[#41d276]  active:bg-green-500">Log in</button>
                  </div>
               </Form>
            </Formik>
         </div>

         {error && <p className="text-center text-rose-400 font-medium ">{error}</p>}

      </div>
   )
}


export default Login;
