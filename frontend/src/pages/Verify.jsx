import { Form } from "react-router-dom";

const Verify = () => {
   return (
      <div className="flex flex-col justify-center pb-10 pt-2 px-6 py-2 flex-1">

         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className=" text-3xl font-bold leading-9 tracking-tight text-gray-600">Enter the code</h2>
            <p className="text-gray-400">Code has been sent to test@mail.com</p>
         </div>


         <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form method="post" action="/log-in">
               <div className="mb-6">
                  <label htmlFor="code" className="block text-nase font-medium text-gray-800"></label>
                  <div className="mt-2">
                     <input id="code" name="code" type="number" required style={{ fontSize: 1.3 + "rem" }} className="text-center font-black text-gray-800 tracking-widest block w-full rounded-md px-2.5 py-2.5 ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6" />
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

export default Verify;