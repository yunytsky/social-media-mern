import {Form, Link} from "react-router-dom";

const Login = () => {
   return (
      <div className="flex flex-col justify-center pb-10 pt-2 px-6 py-2 flex-1">

         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-3xl font-bold leading-9 tracking-tight text-gray-600">Log in</h2>
            <p className="pt-3  text-gray-400">Don't have an account yet?  <Link to={"/auth/signup"} className=" text-green-400 font-bold hover:text-[#41d276]  active:text-green-300">Sign up</Link></p>
         </div>

         
         <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form method="post" action="/log-in">

               <div className="mb-6">
                  <label htmlFor="email" className="block text-nase font-medium leading-6 text-gray-800">Username</label>
                  <div className="mt-2">
                     <input id="email" name="email" type="email" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                  </div>
               </div>


               <div className="mb-2">
                  <div className="flex items-center justify-between">
                     <label htmlFor="password" className="block text-base font-medium leading-6 text-gray-800">Password</label>
                  </div>
                  <div className="mt-2">
                     <input id="password" name="password" type="password" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                  </div>
               </div>
               

               <div className="mb-8">
                  <Link to={"/auth/reset-password"} className="pt-6 font-semibold text-green-400 hover:text-[#41d276]  active:text-green-300">Forgot password?</Link>
               </div>


               <div >
                  <button type="submit" className="flex w-full justify-center rounded-md bg-green-400 px-3 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-[#41d276]  active:bg-green-500">Log in</button>
               </div>
               
            </Form>
         </div>

      </div>
   )
}

export default Login;
