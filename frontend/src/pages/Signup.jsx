import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";

const Signup = () => {
   const [formData, setFormData] = useState({
      email: "",
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
      country: "",
      town: "",
      birthday: "",
      aboutMe: "",
      sex: ""
   });

   useEffect(() => {
      console.log(formData)
   }, [formData])

   return(
      <div className = "flex flex-col justify-center  pt-12 pb-20 px-20 flex-1 ">
         <h2 className=" text-3xl font-bold  mb-8 text-gray-600">Fill in the form</h2>
         <Form>
            <div className="flex flex-row mb-8">
               {/* Left column */}
               <div className="left mr-40 grow-0 shrink-1 basis-1/2">
                  {/* Email */}
                  <div className="mb-6">
                     <label htmlFor="email" className="block text-nase font-medium leading-6 text-gray-800">Email<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({...formData, email: e.target.value}))} id="email" name="email" type="email" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
                  {/* Firstname */}
                  <div className="mb-6">
                     <label htmlFor="firstname" className="block text-nase font-medium leading-6 text-gray-800">First name<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({ ...formData, firstName: e.target.value }))} id="firstname" name="firstname" type="text" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
                  {/* Lastname */}
                  <div className="mb-6">
                     <label htmlFor="lastname" className="block text-nase font-medium leading-6 text-gray-800">Last name<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({ ...formData, lastName: e.target.value }))} id="lastname" name="lastname" type="text" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
                  {/* Username */}
                  <div className="mb-6">
                     <label htmlFor="username" className="block text-nase font-medium leading-6 text-gray-800">Username<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({ ...formData, username: e.target.value }))} id="username" name="username" type="text" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
                  {/* Password */}
                  <div className="mb-6">
                     <label htmlFor="password" className="block text-nase font-medium leading-6 text-gray-800">Password<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({ ...formData, password: e.target.value }))} id="password" name="password" type="password" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
                  {/* Confirm password */}
                  <div className="mb-6">
                     <label htmlFor="password-confirmation" className="block text-nase font-medium leading-6 text-gray-800">Confirm password<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({ ...formData, confirmPassword: e.target.value }))} id="password-confirmation" name="password-confirmation" type="password" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
               </div>
               {/* Right column */}
               <div className="right  grow-0 shrink-1 basis-1/2">
                  {/* Country */}
                  <div className="mb-6">
                     <label htmlFor="country" className="block text-nase font-medium leading-6 text-gray-800">Country</label>
                     <div className="mt-2">
                        <select onChange={(e) => (setFormData({ ...formData, country: e.target.value }))} name="country" id="country" className="bg-white block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6">
                           <option select="true" value=""></option>
                           <option value="usa">USA</option>
                           <option value="uk">UK</option>
                           <option value="korea">Korea</option>
                           <option value="ukraine">Ukraine</option>
                        </select>
                     </div>
                  </div>
                  {/* Town */}
                  <div className="mb-6">
                     <label htmlFor="town" className="block text-nase font-medium leading-6 text-gray-800">Town</label>
                     <div className="mt-2">
                        <select onChange={(e) => (setFormData({ ...formData, town: e.target.value }))} name="town" id="town" className="bg-white block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6">
                           <option select="true" value=""></option>
                           <option value="usa">Kyiv</option>
                           <option value="uk">Odesa</option>
                           <option value="korea">Sumy</option>
                           <option value="ukraine">Kharkiv</option>
                        </select>
                     </div>
                  </div>
                  {/* Birthday */}
                  <div className="mb-6">
                     <label htmlFor="birthday" className="block text-nase font-medium leading-6 text-gray-800">Birthday<span className="text-xl absolute ml-2 text-red-400">*</span></label>
                     <div className="mt-2">
                        <input onChange={(e) => (setFormData({ ...formData, birthday: e.target.value }))} id="birthday" name="birthday" type="" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                     </div>
                  </div>
                  {/* About me */}
                  <div className="mb-6">
                     <label htmlFor="aboutme" className="block text-nase font-medium leading-6 text-gray-800">About me</label>
                     <div className="mt-2">
                        <textarea onChange={(e) => (setFormData({ ...formData, aboutMe: e.target.value }))} name="aboutme"  rows="6" id="aboutme" className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" ></textarea>
                     </div>
                  </div>
                  {/* Sex */}
                  <div className="mb-6">
                     <p>Sex<span className="text-xl absolute ml-2 text-red-400">*</span></p>
                     <label htmlFor="male" className="text-nase mr-2 font-medium leading-6 text-gray-800">Male</label>
                     <input onChange={(e) => (setFormData({ ...formData, sex: e.target.value }))} required id="male" name="sex" type="radio" value="male" className="inline-block mr-5 h-6 w-6 align-middle  text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6 accent-slate-500" />
                     
                     <label htmlFor="female" className=" text-nase font-medium leading-6 mr-2 text-gray-800">Female</label>
                     <input onChange={(e) => (setFormData({ ...formData, sex: e.target.value }))} id="female" name="sex" type="radio" value="female" className="inline-block  mr-5 h-6 w-6 align-middle  text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6 accent-slate-500" />
                     
                     <label htmlFor="other" className=" text-nase font-medium leading-6 mr-2 text-gray-800">Other</label>
                     <input onChange={(e) => (setFormData({ ...formData, sex: e.target.value }))} id="other" name="sex" value="other" type="radio" className=" inline-block  h-6 w-6 align-middle  text-gray-900   placeholder:text-gray-400 sm:text-sm sm:leading-6 accent-slate-500" />
                  </div>
               </div>
            </div>

            <div >
               <button type="submit" className="flex  justify-center rounded-md bg-green-400 px-12 py-2 text-base font-semibold leading-6 text-white shadow-sm hover:bg-[#41d276]  active:bg-green-500">Sign up</button>
            </div>
         </Form>
         <div>

         </div>
      </div>
   )
}

export default Signup