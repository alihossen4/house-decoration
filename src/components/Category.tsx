import Image from "next/image";
import bedroom from "@/public/fronts-room/dining-room.jpg";
import MyImage from "./CartImage";
import React from "react";
export default function Category(){
const listItem= [
    {id:1, name:""}
]
type Props = {
    name: string;
    children: React.ReactNode;
}
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
                        <h1 className="center my-5 mx-auto">Explore by Category</h1>
                    <div className="flex">
                        <div className="search-item">
                            
                        </div>
                        <div className="carts mt-20">
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