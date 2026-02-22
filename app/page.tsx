"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa"
import { useEffect } from "react";
export default function Home() {
useEffect(()=>{
const handleScroll = () =>{
    const header = document.querySelector('header');
    if(window.scrollY> 0){
    header?.classList.add('scrolled');
    }
    else{
      header?.classList.remove('scrolled');
    }
  document.addEventListener('scroll', handleScroll);
  return () => document.removeEventListener("scroll", handleScroll);
};
}, []);
const searchClick = () =>{

}
  
  return(
    <>
    {/* // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"> */}
    <section className="menubar-section">
     <div className="container">
    <header >
      <div className="flex">
        <div className="logo">

        </div>
        <div className="menu">
          <ul className="flex menu-ul font-xl ">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="cart-section flex my-auto pt-5 gap-5">
          <FiSearch className="text-[#fff] h-[35px] w-[35px] search" onClick={()=>{
            const search = document.querySelector('.search');
            search?.classList.add('.search-clicked');
            <>
              <input type="text" className="search-input"/>
            </>
          }}/>
          <FiShoppingCart className="text-[#ffb8ab] h-[35px] w-[35px]"/>
          <FaUser className="h-[35px] w-[35px] text-[#08803e]"/>
        </div>
      </div>
     {/* </div> */}
    </header>
      <div className="heading-section w-300 h-200 mt-50">
      <div className="heading text-xl">
        <h1>Exclusive Deals of Furniture Collection</h1>
      </div>
      <p className="title">Explore different categories. Find the best deals.</p>
      <button>
        Shop Now
      </button>
      </div>
    </div>
  </section>
  
</>
  );
}