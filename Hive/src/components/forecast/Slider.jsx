
import { useEffect, useState } from "react";

import { register } from "swiper/element/bundle"

import left from "../../assets/left.svg";
import right from "../../assets/right.svg";

register();
export default function Slider({forecastData}){
//    //console.log(forecastData)
//    const [scrollPosition, setSCrollPosition] = useState(0);
//    const [maxScroll, setMaxScroll] = useState(20);

//    const itemWidth = 115;

//    function handleBack(){
//     setSCrollPosition((curState) =>{
//         return (curState > 0 ? curState - 130 : 0);
//     })
//    }

//    useEffect(() =>{
//     const forecastItemWidth = forecastData.length * itemWidth;
//     setMaxScroll(forecastItemWidth);
//    }, [])
   
//    function handleForward(){
//     setSCrollPosition((curState) =>{
//         return (curState < maxScroll ? curState + 120 : maxScroll);
//     })
//    }

//    const scroller = {
//     transform: `translateX(-${scrollPosition}px)`,
//     transition: `0.2 ease-in-out`,
//    }
   
    const forecastSlider = <section className="mt-6 mb-20
    relative">
        {/* <div className="flex gap-4 ml-2 mb-4">
            <img  className="w-8 cursor-pointer rounded-full p-1 bg-slate-600" src={left} alt=""/>
            <img  src={right} alt="" className="w-8 cursor-pointer rounded-full
             bg-slate-600 p-1"/>
        </div> */}
        <h1 className="today px-4 mb-6 font-bold">Today</h1>
       
       
        <swiper-container navigation="true">
            <div  className="scroller flex gap-10 w-full overflow-x-auto px-4 whitespace-nowrap
            transform duration-[0.3] ease-in-out" >
            {forecastData.map((item, index) =>{
            const forecastTime = item.time.split(" ")[1];
            const forecastIcon = item.condition.icon;
            const forecastText = item.condition.text
            const forecastTemp = item.temp_c;

           return ( 
           
            <swipe-slide key={index}>
           <div  className="flex flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">{forecastTime}</p>
                
                    <img className="w-10" src={forecastIcon} alt="" />
                   <div className="w-[120px] overflow-hidden"><p className="text-sm leading-5 capitalize whitespace-pre-line
                    ">{forecastText}</p></div>
                    <p className="text-sm leading-3 pb-2">{forecastTemp}&deg;C</p>
            </div></swipe-slide>)
            
            })}
    </div>
    </swiper-container>
    </section>

    return (
        <>
            {forecastData !== null &&
            forecastSlider}
        </>
    )
}