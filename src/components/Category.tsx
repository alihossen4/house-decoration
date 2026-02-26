"use client"
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import bedroom from "@/public/fronts-room/dining-room.jpg";
import MyImage from "./CartImage";
import React, { useState } from "react";
export default function Category(){
const [activeTab, setActiveTab] = useState(false);
const listItem= [
    {id:1, name:"Bedroom"},
    {id:2, name:"Dining Room"},
    {id:3, name:"Kitchen"},
    {id:4, name:"Living Room"},
    {id:5, name:"Meeting Room"},
    {id:6, name:"Study Room"},
    {id:7, name:"Workspace"},
]
type Props = {
    name: string;
    children: React.ReactNode;
}
console.log(listItem[0])
const Cart =({name,children}:Props)=>{
    return(
        <>
            <div className="img-container">
                {children}
                    <h2>{name}</h2>
                    <button>Explore</button>
                
            </div>
        </>
    );
}
    return(
        <>
            <section>
                <div className="container">
                        <h1 className="center my-5 w-[500] text-[50px] mx-auto font-[600]">Explore by Category</h1>
                    <div className="flex">
                        <div className="search-item">
                            <div className="search-bar relative">
                                <FiSearch className="text-[gray] h-[30px] w-[30px] absolute top-[15px] left-5 absolute"/>
                                <input type="text" className="outline-none bg-[#fff] p-4 rounded-lg text-xl pl-15 w-[95%]" placeholder="Search"/>
                            </div>
                            <ul>
                                {
                                    listItem.map((list)=>{
                                        return(
                                            <li key={list.id} className="search-list-li cursor-pointer">
                                                {list.name}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                        <div className="carts mt-20 ml-10">
                            <Cart name="Bedroom">
                                <MyImage src={bedroom} alt="bedroom" width={200} height={250}/>
                            </Cart>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}