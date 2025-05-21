import { category } from "../../routes/category";
import clsx from "clsx";
import {  NavLink } from "react-router";


const Menu = () => {
  
  return (
    <div className="flex md:flex-row flex-col items-center gap-x-4 font-semibold text-xl ">
    {category.map(item=>(
        <NavLink to={item.link} key={item.id} 
       
        className={({ isActive })=>clsx(
            isActive===true && 'bg-yellow-400',
            'hover:bg-zinc-900 p-2 rounded-md hover:scale-110 hover:text-zinc-200 transition-all duration-200 '
        )} >
            {item.title}
        </NavLink>
    ))}
    </div>
  )
}

export default Menu
