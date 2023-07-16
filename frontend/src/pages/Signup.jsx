import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { signupSchema } from "../schemas";
import { CustomDropup, CustomInput, CustomSelect, CustomTextarea } from "../components/Forms/CustomInputs";
import axios from "axios";

const Signup = () => {
   const navigate = useNavigate();
   const [error, setError] = useState();

   //Data manipulations
   let data = useLoaderData();
   const filteredData = (() => {
      let result = [];

      data.map((object) => {
         const isIncluded = result.some((filteredObject) => filteredObject.country === object.country);
         if (!isIncluded) {
            result.push(object);
         }
      });

      result.sort();

      return result;
   })();

   let countries = [];
   const [cities, setCities] = useState([]);
   filteredData.map(object => {
      countries.push(object.country);
   })


   const handleSubmit = async (values, actions) => {
      console.log("SUBM")
      debugger
      try{
         const url = import.meta.env.VITE_API_URL + "auth/sign-up";
         console.log(values)
         const response = await axios({
            method: "POST",
            url: url,
            data: {
               email: values.email,
               firstname: values.firstname,
               lastname: values.lastname,
               password: values.password,
               confirmation: values.confirmation,
               birthday: values.birthday,
               sex: values.sex,
               country: values.country,
               city: values.city,
               about: values.about
            }
         })

         actions.resetForm();

         navigate("/auth/verify");


      }catch(err){
         if(err.response){
            setError(err.response.data.message);
         } else {
            setError("Internal server error");
         }
      }
   }

   return(
      <div className = "flex flex-col justify-center  pt-12 pb-20 px-10 sm:px-20 flex-1 ">
         <h2 className="text-2xl sm:text-3xl font-bold  mb-6 text-gray-600">Fill in the form</h2>
         <Formik
            initialValues={{
               email: "",
               firstname: "",
               lastname: "",
               password: "",
               confirmation: "",
               sex: "",
               country: "",
               city: "",
               birthday: "",
               about: ""
            }}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
            validateOnChange={false}
            validateOnBlur={false}
         >

            <Form>
               <div className="flex flex-col sm:flex-row mb-8">
                  {/* Left column */}
                  <div className="sm:mr-24 grow-0 sm:shrink-1 sm:basis-1/2">
                     {/* Email */}
                     <CustomInput
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        req="true"
                        
                     />
                     {/* Firstname */}
                     <CustomInput
                        label="First name"
                        name="firstname"
                        id="firstname"
                        req="true"
                        required
                     />
                     {/* Lastname */}
                     <CustomInput
                        label="Last name"
                        name="lastname"
                        id="lastname"
                        req="true"
                        required
                     />
                     {/* Password */}
                     <CustomInput
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                        req="true"
                        required
                     />
                     {/* Confirm password */}
                     <CustomInput
                        label="Confirm password"
                        name="confirmation"
                        id="confirmation"
                        type="password"
                        req="true"
                        required
                     />
                     {/* Sex */}
                     <div className="mb-5">
                        <p>Sex<span className="text-xl absolute ml-2 text-red-400">*</span></p>
                        <CustomSelect
                           label="Male"
                           value="male"
                           name="sex"
                           type="radio"
                           required
                        />

                        <CustomSelect
                           label="Female"
                           value="female"
                           name="sex"
                           type="radio"
                        />

                        <CustomSelect
                           label="Other"
                           value="other"
                           name="sex"
                           type="radio"
                        />
                     </div>
                    
                  </div>

                  {/* Right column */}
                  <div className="sm:grow-0 sm:shrink-1 sm:basis-1/2">
                     {/* Country */}
                     <CustomDropup
                        label="Country"
                        name="country"
                        id="country"
                        options={countries}
                        onChange={(event) => {
                           const countryObject = filteredData.find((object) => {                             
                              return object.country === event.target.value;
                           })
                           setCities(countryObject.cities);
                        }}
                     />           
                     {/* City */}
                     <CustomDropup
                        label="City"
                        name="city"
                        id="city"
                        options={cities}
                     />
                     {/* Birthday */}
                     <CustomInput
                        label="Birthday"
                        name="birthday"
                        id="birthday"
                        req="true"
                        type="date"
                        required
                     />
                  
                     {/* About me */}
                     <CustomTextarea
                        label="About me"
                        name="about"
                        id="about"
                        rows="8"
                     />
                  </div>
               </div>

               <div >
                  <button type="submit" className="flex justify-center rounded-md bg-green-400 px-8 sm:px-12 py-1 sm:py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-[#41d276]  active:bg-green-500">Sign up</button>
               </div>

            </Form>
         </Formik>

         {error && <p className="text-center text-rose-400 font-medium ">{error}</p>}

         <div>

         </div>
      </div>
   )
}

const signupLoader = async () => {
   try{
      const response = await axios({ method: "GET", url: "https://countriesnow.space/api/v0.1/countries" });
      return response.data.data;
   }
   catch(err){
      //throw internal server error
   }
}

export default Signup;
export {signupLoader};