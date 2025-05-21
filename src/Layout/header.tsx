

import { useState } from "react";
import Logo from "./components/logo";
import Menu from "./components/menu";
import Support from "./components/support";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isActive,setIsActive]=useState<boolean>(false)
  return (
    <header  className="fixed  top-0 w-full bg-black/80 border-b border-zinc-200 shadow-md z-10 ">
      <div className="w-full  items-center justify-between p-3 md:flex hidden ">
            <Logo />
            <Menu />
            <Support/>
      </div>
     
        <div className="flex md:hidden items-center justify-between max-w-7xl mx-auto ">
          {/* Logo */}
          <Logo />

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsActive(!isActive)}
              className="text-2xl p-2 transition hover:text-sky-400"
            >
              {isActive ? <IoMdClose /> : <RxHamburgerMenu />}
            </button>
          </div>

          
        </div>

        {/* Mobile Menü */}
        {isActive && (
          <div className="md:hidden mt-3  p-4 rounded-md shadow-md space-y-3 animate-fade-in-down my-3 transition-all duration-200">
            <Menu />
          </div>
        )}
    </header>
  )
}

export default Header
