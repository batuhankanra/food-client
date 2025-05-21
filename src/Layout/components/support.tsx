
import { Link } from "react-router"



const Support = () => {
  return (
    <Link to={'/tarifAdmin'} className='mr-14  hover:text-zinc-300 transition-all duration-200 cursor-pointer relative px-4 py-2 rounded-md text-xl   '>
        <span className="absolute w-3 h-3 bg-blue-500 top-1 right-2 animate-ping rounded-full "></span>
        Tarif

       
    </Link>
  )
}

export default Support
