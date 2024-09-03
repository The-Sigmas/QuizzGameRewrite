export default function Button(props){
    return (
        <>
         <button className="absolute top-2/3 -translate-y-1/2 -translate-x-1/2 left-1/2 
         ext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
         dark:hover:bg-blue-700 focus:outline-none 
          dark:focus:ring-blue-800" onclick={props.fun}>{props.text}</button>
        </>
    )

}
