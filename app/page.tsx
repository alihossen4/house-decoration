"use client"
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/logo.png";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa"
import { useEffect, useState } from "react";
import Header from "./components/header";
export default function Home() {
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
    <section className="menubar-section">
      <Header />
      <div className="container">
      <div className="heading-section w-300 h-200 mt-80">
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