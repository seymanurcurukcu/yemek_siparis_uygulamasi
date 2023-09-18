import { useState } from "react"
import Logo from "../ui/Logo"
import { BiSolidUser } from "react-icons/bi"
import { FaShoppingBag, FaSearch } from "react-icons/fa"
import Search from "../ui/Search"
import {GiHamburgerMenu,GiCancel} from "react-icons/gi"
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from "next/router";
import Link from "next/link"

const Header = () => {
    const [IsSearchModal, setIsSearchModal] = useState(false)
    const [IsMenuModal, setIsMenuModal] = useState(false)
    const router = useRouter();
    return (
        <div
        className={`h-[5.5rem] z-50 relative ${
          router.asPath === "/" ? "bg-transparent" : "bg-secondary"
        }`}
      >

            <div className="container text-white  mx-auto flex justify-between items-center h-full">
                <div>
                    <Logo/>
                </div>
                <nav className={`sm:static absolute top-0 left-0  sm:w-auto sm:h-auto h-screen w-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${IsMenuModal ===true && "!grid place-content-center"}`}>
                    <ul className="flex gap-x-2 sm:flex-row flex-col items-center justify-end">
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
                            <Link href="/reservation">Book Table</Link>
                        </li>
                    </ul>
                    {IsMenuModal && (
                                  <button className='absolute top-4 right-4' onClick={() => setIsMenuModal(false)}>
                                  <GiCancel size={25} className='hover:text-primary transition-all'/>
                              </button>
                    )}
                </nav>
                <div className="flex gap-x-4 items-center" >
                    <Link href="/auth/login" className="hover:text-primary transition-all cursor-pointer"><BiSolidUser /></Link>
                    <a href="#" className="hover:text-primary transition-al cursor-pointerl"><FaShoppingBag /></a>
                    <button className="hover:text-primary transition-all cursor-pointer" onClick={() => setIsSearchModal(true)}><FaSearch /></button>
                    <a href="#" className="md:inline-block hidden">
                         <button className="btn-primary">Order Online</button>
                    </a>
                    <button className="sm:hidden inline-block" onClick={()=>{setIsMenuModal(true)}}>
                        <GiHamburgerMenu className="text-xl hover:text-primary transition-all"/>
                    </button>
               
                  
                </div>
            </div>
            {IsSearchModal &&  (
              <Search setIsSearchModal={setIsSearchModal}/>
            )
            }
           
        </div>
    )
}

export default Header
