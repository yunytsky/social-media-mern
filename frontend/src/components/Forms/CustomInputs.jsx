import {useField} from "formik";

const CustomInput = ({label, ...props}) => {
   const [field, meta] = useField(props);
   return(
      <div className="mb-5">
         <label htmlFor={props.id || props.name}>{label}</label>
         <div className="mt-2">
            <input
               className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6"
               {...field}
               {...props}
            />
         </div>

         {meta.touched && meta.error ? (
            <p className="first-letter:capitalize text-rose-400 font-medium ">{meta.error}</p>
         ) : null}
      
      </div>
   )
}

export {CustomInput};