import {useField} from "formik";

const CustomInput = ({label, ...props}) => {
   const [field, meta] = useField(props);
   return(
      <div className="mb-5">
         <label htmlFor={props.id || props.name}>{label} {props.req && <span className="text-xl absolute ml-2 text-red-400">*</span>}</label>
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

const CustomTextarea = ({label, ...props}) => {
   const [field, meta] = useField(props);
   return(
      <div className="mb-5">
         <label htmlFor={props.id || props.name} className="block text-nase font-medium leading-6 text-gray-800">{label}</label>
         <div className="mt-2">
            <textarea
            {...field}
            {...props}
            className="block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6">
            </textarea>
         </div>
      </div>
   )
}

const CustomSelect = ({label, ...props}) => {
   const [field, meta] = useField(props);
   return(
      
      <div className="inline whitespace-nowrap">
         <label htmlFor={props.id} className="text-nase mr-2 font-medium leading-6 text-gray-800">{label} {props.req && <span className="text-xl absolute ml-2 text-red-400">*</span>}</label>
         <input
         {...field}
         {...props}
         className="inline-block whitespace-nowrap mr-3 h-6 w-6 align-middle  text-gray-900  placeholder:text-gray-400  sm:text-sm sm:leading-6 accent-slate-500"
         />

         {meta.touched && meta.error ? (
            <p className="first-letter:capitalize text-rose-400 font-medium ">{meta.error}</p>
         ) : null}   
      </div>

   )
}

const CustomDropup = ({label, options, ...props}) => {

   const [field, meta] = useField(props);

   const optionElements = options.map((option) => {
      return <option key={options.indexOf(option)} value={option}>{option}</option>
   })

   const handleOnChange = (event) => {
      field.onChange(event);
      if(props.onChange){
         props.onChange(event);

      }
   }

   return(
      <div className="mb-5">
         <label htmlFor={props.name || props.id} className="block text-nase font-medium leading-6 text-gray-800">{label}</label>
         <div className="mt-2">
            <select
               {...field}
               {...props}
               onChange={handleOnChange}
               className="bg-white block w-full rounded-md px-2.5 py-2.5 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400  focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6"
            >
               <option select="true" value=""></option>
               {optionElements}
            </select>
         </div>

         {meta.touched && meta.error ? (
            <p className="first-letter:capitalize text-rose-400 font-medium ">{meta.error}</p>
         ) : null}   
      </div>
   )
}

export {CustomInput, CustomTextarea, CustomSelect, CustomDropup};