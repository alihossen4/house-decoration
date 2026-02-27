import React, { useState } from 'react'
import CartImage from '../CartImage'
import workspace from "@/public/rooms/workspace/workspace1.jpg";
type Props = {
    name: string
}
const lists = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
]
function WorkspaceCart({name}:Props) {
    const[activeClick, setActiveClick] = useState<number |null>(null);
    const clickHandle = () =>{
        if(activeClick){
            setActiveClick(null);
        }
    }
  return (
    <div className="container cursor-pointer">
        <div className="flex  mr-2 ">
            <div className="each-img w-120 relative" onClick={clickHandle}>
                <CartImage
                src={workspace}
                alt="bedroom"
                width={600}
                height={300}
                onClick={()=>setActiveClick(lists[0].id)}
                key={lists[0].id}
                className={`w-[90%] h-[80%] rounded-xl ${activeClick ===lists[0].id? "brightness-75" : ""}`}
                >
                {activeClick===lists[0].id &&(
                    <>
                    <h2 className="absolute top-15 left-[28%] self-center text-amber-50 text-[40px] z-5">
                        {name}
                    </h2>
                    <button className="absolute top-30 bg-amber-50 py-2 px-4 left-[35%] rounded-lg text-xl z-10">Explore</button>
                    </>
                )}
        </CartImage>
            </div>
        
            <div className="each-img w-120 relative" onClick={clickHandle}>
                <CartImage
                src={workspace}
                alt="bedroom"
                width={600}
                height={300}
                onClick={()=>setActiveClick(lists[1].id)}
                key={lists[1].id}
                className={`w-[90%] h-[80%] rounded-xl  ${activeClick ===lists[1].id? "brightness-75" : ""}`}
                >
                {activeClick ===lists[1].id &&(
                    <>
                    <h2 className="absolute top-15 left-[28%] self-center text-amber-50 text-[40px] z-5">
                        {name}
                    </h2>
                    <button className="absolute top-30 bg-amber-50 py-2 px-4 left-[35%] rounded-lg text-xl z-10">Explore</button>
                    </>
                )}
            </CartImage>
            </div>
        </div>
        <div className="flex mr-2  ">
            <div className="each-img w-120 relative" onClick={clickHandle} >
                <CartImage
                src={workspace}
                alt="bedroom"
                width={600}
                height={300}
                onClick={()=>setActiveClick(lists[2].id)}
                key={lists[1].id}
                className={`w-[90%] h-[80%] rounded-xl ${activeClick===lists[2].id ? "brightness-75" : ""}`}
                >
                {activeClick===lists[2].id &&(
                    <>
                    <h2 className="absolute top-15 left-[28%] self-center text-amber-50 text-[40px] z-5">
                        {name}
                    </h2>
                    <button className="absolute top-30 bg-amber-50 py-2 px-4 left-[35%] rounded-lg text-xl z-10">Explore</button>
                    </>
                )}
        </CartImage>
        </div>
            <div className="each-img w-120 relative" onClick={clickHandle}>
                <CartImage
                src={workspace}
                alt="bedroom"
                width={600}
                height={300}
                onClick={()=>setActiveClick(lists[3].id)}
                key={lists[1].id}
                className={`w-[90%] h-[80%] rounded-xl ${activeClick===lists[3].id ? "brightness-75" : ""}`}
                >
                {activeClick===lists[3].id  &&(
                    <>
                    <h2 className="absolute top-15 left-[28%] self-center text-amber-50 text-[40px] z-5">
                        {name}
                    </h2>
                    <button className="absolute top-30 bg-amber-50 py-2 px-4 left-[35%] rounded-lg text-xl z-10">Explore</button>
                    </>
                )}
        </CartImage>
            </div>
        </div>
        <div className="flex mr-2 ">
            <div className="each-img w-120 relative" onClick={clickHandle}>
                <CartImage
                src={workspace}
                alt="bedroom"
                width={600}
                height={300}
                onClick={()=>setActiveClick(lists[4].id)}
                key={lists[1].id}
                className={`w-[90%] h-[80%] rounded-xl ${activeClick===lists[4].id ? "brightness-75" : ""}`}
                >
                {activeClick===lists[4].id &&(
                    <>
                    <h2 className="absolute top-15 left-[28%] self-center text-amber-50 text-[40px] z-5">
                        {name}
                    </h2>
                    <button className="absolute top-30 bg-amber-50 py-2 px-4 left-[35%] rounded-lg text-xl z-10">Explore</button>
                    </>
                )}
                </CartImage>
            </div>
            <div className="each-img w-120 relative" onClick={clickHandle}>
                <CartImage
                src={workspace}
                alt="bedroom"
                width={600}
                height={300}
                onClick={()=>setActiveClick(lists[5].id)}
                
                className={`w-[90%] h-[80%] rounded-xl ${activeClick===lists[5].id ? "brightness-75" : ""}`}
                >
                {activeClick===lists[5].id &&(
                    <>
                    <h2 className="absolute top-15 left-[28%] self-center text-amber-50 text-[40px] z-5">
                        {name}
                    </h2>
                    <button className="absolute top-30 bg-amber-50 py-2 px-4 left-[35%] rounded-lg text-xl z-10">Explore</button>
                    </>
                )}
             </CartImage>
            </div>
        </div>

    </div>

  )
}

export default WorkspaceCart;