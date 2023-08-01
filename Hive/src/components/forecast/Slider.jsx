
import cloudy from "../../assets/cloudy.png"

export default function Slider({forecastData}){
   //console.log(forecastData)

    
    const forecastSlider = <section className="mt-10">
        <h1 className="today px-4 mb-6 font-bold">Today</h1>
       
            <div className="scroller flex gap-10 w-full overflow-x-auto px-4 whitespace-nowrap">
            {forecastData.map((item, index) =>{
            const forecastTime = item.time.split(" ")[1];
            const forecastIcon = item.condition.icon;
            const forecastText = item.condition.text
            const forecastTemp = item.temp_c;

           return ( <div key={index} className="flex flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">{forecastTime}</p>
                
                    <img className="w-10" src={forecastIcon} alt="" />
                
                
                   <div className="w-[120px] overflow-hidden"><p className="text-sm leading-5 capitalize whitespace-pre-line
                    ">{forecastText}</p></div>
                    <p className="text-sm leading-3 pb-2">{forecastTemp}&deg;C</p>
            </div>)
            })}
    </div>
    
        

    </section>

    return (
        <>
            {forecastData !== null &&
            forecastSlider}
        </>
    )
}