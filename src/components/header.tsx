"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa"
import { useEffect, useState } from "react";
import {usePathname} from "next/navigation";

const NavLinks = [
  {id:1, name:"Home", path:"/"},
  {id:2, name:"Products", path:"/products"},
  {id:3, name:"Categories", path:"/categories"},
  {id:4, name:"About", path:"/about"},
  {id:5, name:"Contact Us", path:"/contactus"},
]

export default function Header() {
  const [isScroll, setScroll] = useState(false);
  const handleScroll = () =>{
    const scrolled = window.scrollY;
    setScroll(scrolled>100);
  }
  useEffect(()=>{
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const pathname = usePathname();
  const isActive = (path:any)=> path===pathname;

  return(
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all ease-in-out  ${isScroll? "bg-[#2b332f]":" py-2"}`}>
     <div className="container">
      <div className="flex space-between">
        <a href="/">
         <div className="logo">

        </div>
        </a>
        <div className="menu m-0">
          <ul className="flex menu-ul font-xl ">
            {
              NavLinks.map((link)=>{
                return(
                  <li key={link.id} className="relative">
                    <Link href={link.path} className={`${isActive(link.path)? "active": ""}`}>
                      {link.name}
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="cart-section flex my-auto transition-all ease-in-out pt-5 gap-5">
        <div className="search relative mr-34 ">

          <input type="text" className="search-input absolute top-[-18] p-0 text-[18px] text-[#fff]" />
          <FiSearch className="text-[#fff] h-[35px] w-[35px] absolute top-0 left-25"/>
        </div>

          <FiShoppingCart className="text-[#ffb8ab] h-[35px] w-[35px]"/>
          <FaUser className="h-[35px] w-[35px] text-[#02bf01]"/>
        </div>

      </div>
     
    </div>
    </header>
  
  </>
  );
}