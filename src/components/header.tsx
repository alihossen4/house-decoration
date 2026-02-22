
"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa"
import { useEffect, useState } from "react";
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
  const searchClick = () =>{

  }
  
  return(
    <>
    {/* // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
    <header className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all ease-in-out ${isScroll? "bg-[#2b332f]":" py-2"}`}>
     <div className="container">
      <div className="flex space-between">
        <div className="logo">

        </div>
        <div className="menu m-0">
          <ul className="flex menu-ul font-xl ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
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
     {/* </div> */}
      </div>
     
    </div>
    </header>
  
  </>
  );
}