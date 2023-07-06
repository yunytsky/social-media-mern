import { Form } from "react-router-dom";

const ResetPassword = () => {
   return (
      <div className="flex flex-col justify-center pb-10 pt-2 px-6 py-2 flex-1">

         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-3xl font-bold leading-9 tracking-tight text-gray-600">Enter your email</h2>
         </div>


         <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form method="post" action="/log-in">

               <div className="mb-6">
                  <label htmlFor="email" className="block text-nase font-medium leading-6 text-gray-800">Email</label>
                  <div className="mt-2">
                     <input id="email" name="email" type="email" required className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
                  </div>
               </div>


               <div >
                  <button type="submit" className="flex w-full justify-center rounded-md bg-green-400 px-3 py-2.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-[#41d276]  active:bg-green-500">Submit</button>
               </div>

            </Form>
         </div>

      </div>
   );
}

export default ResetPassword;