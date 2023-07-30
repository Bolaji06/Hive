import { useEffect, useState } from "react";


export default function RecentSearch({inputvalue, savedsearch}){
    
   
   //console.log(props)
    // Implement Recent Search
    // Get user input user successful search
    // Store them into an array
    // Save them into a localStorage
    // Retrieve all items in localStorage
    // Display items on the page.


    // Timer to saved the input value and display it
   const recentSearchContainer =
    <section className="px-2 pt-2 pb-10">
        <header>
            <h1 className="text-sm">Recent Search</h1>
        </header>

            {savedsearch.length > 0 ? (
                 <div className="scroller py-2 bg-[#C6BEBE] mt-3
                 overflow-x-auto w-full ">
                 
                     
                         <ul className="flex">
                            {savedsearch.map((item, index) => {
                               return (  <li key={index} className=" bg-yellow-100 px-3 w-28 ml-2 rounded-tl-2xl rounded-bl-2xl
                               relative inline-block pl-4 py-1 text-sm whitespace-nowrap text-ellipsis
                         max-w-xs text-[#191D36] font-semibold cursor-pointer">{item[0].toUpperCase() + item.slice(1, item.length)}
                         <div className="absolute top-[10px] left-1
                         bg-[#C6BEBE] w-2 h-2 rounded-full">

     
                         </div>
                         </li> )
                            })}
                        
                     </ul>
             </div>
            ) : (<p className="text-sm text-slate-400">No Search Yet</p>)}
           
        
        
    </section>

    return (
        <>
            {recentSearchContainer}
        </>
    )
}