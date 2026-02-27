"use client"
import { FiSearch } from "react-icons/fi";
import {  FaArrowRight } from 'react-icons/fa';

import React, { useState } from "react";
import BedroomCart from "./Carts/BedroomCart";
import DiningroomCart from "./Carts/DiningRoomCart";
import LivingroomCart from "./Carts/LivingroomCart";
import MeetingroomCart from "./Carts/MeetingroomCart";
import Kitchen from "./Carts/Kitchen";
import StudyroomCart from "./Carts/StudyroomCart";
import WorkspaceCart from "./Carts/WorkspaceCart";
const listItem= [
    {id:1, name:"Bedroom"},
    {id:2, name:"Dining Room"},
    {id:3, name:"Living Room"},
    {id:4, name:"Meeting Room"},
    {id:5, name:"Study Room"},
    {id:6, name:"Kitchen"},
    {id:7, name:"Workspace"},
]
export default function Category(){
const [activeTab, setActiveTab] = useState<number | null>(1);
const Contents = () =>{
    const activeItem = listItem.find(item=> item.id ===activeTab )
    if(!activeItem) return<BedroomCart name="Bedroom"/>;
    
        switch(activeItem.name) {
            case "Bedroom":
                return <BedroomCart name="Bedroom"/>;
            case "Dining Room":
                return <DiningroomCart name="Dining Room"/>;
                
            case "Living Room":
                return <LivingroomCart name="Living Room"/>;
                    
            case "Meeting Room":
                return <MeetingroomCart name="Meeting Room"/>;
                
            case "Study Room":
                return <StudyroomCart name="Study Room"/>;
            case "Kitchen":
                return <Kitchen name="Kitchen"/>;
                
            case "Workspace":
                return <WorkspaceCart name="Workspace"/>;
                
        }
    
}

    return(
        <>
            <section>
                <div className="container">
                        <h1 className="center my-15 pl-15 w-[500] text-[45px] mx-auto font-[700]">Explore by Category</h1>
                    <div className="flex">
                        <div className="search-item">
                            <div className="search-bar relative">
                                <FiSearch className="text-[gray] h-[30px] w-[30px] absolute top-[15px] left-5 absolute"/>
                                <input type="text" className="outline-none bg-[#fff] p-4 rounded-lg text-xl pl-15 w-[97%]" placeholder="Search"/>
                            </div>
                            <ul className="text-[50px] mt-15">
                                
                                <li onClick={()=>setActiveTab(listItem[0].id)} className={`search-list-li cursor-pointer ${activeTab===listItem[0].id? "bg-amber-600 text-amber-50":""}`}>
                                    Bedroom
                                    
                                </li>
                                <li onClick={()=>setActiveTab(listItem[1].id)} className={`search-list-li cursor-pointer ${activeTab  ===listItem[1].id? "bg-amber-600 text-amber-50":""}`}>
                                    Dining Room
                                    
                                </li>
                               <li onClick={()=>setActiveTab(listItem[2].id)}className={`search-list-li cursor-pointer ${activeTab ===listItem[2].id? "bg-amber-600 text-amber-50":""}`}>
                                    Living Room
                                    
                                </li>
                                <li onClick={()=>setActiveTab(listItem[3].id)} className={`search-list-li cursor-pointer ${activeTab ===listItem[3].id? "bg-amber-600 text-amber-50":""}`} >
                                    Meeting Room
                                    
                                </li>
                                <li onClick={()=>setActiveTab(listItem[4].id)} className={`search-list-li cursor-pointer ${activeTab ===listItem[4].id? "bg-amber-600 text-amber-50":""}`} >
                                    Study Room
                                    
                                </li>
                                <li   onClick={()=>setActiveTab(listItem[5].id)} className={`search-list-li cursor-pointer ${activeTab ===listItem[5].id? "bg-amber-600 text-amber-50":""}`} >
                                    Kitchen
                                    
                                </li>
                                <li   onClick={()=>setActiveTab(listItem[6].id)} className={`search-list-li cursor-pointer ${activeTab ===listItem[6].id? "bg-amber-600 text-amber-50":""}`} >
                                    Workspace
                                </li>
                                <button className="text-xl bg-[#79928f] px-5 py-4 text-amber-50 rounded-xl w-[70%] ">All Categories<span className="mt-1.5 float-right"><FaArrowRight /></span></button>
                            </ul>
                        </div>
                        <div className="carts ml-10">
                            
                            {activeTab&& Contents() }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}