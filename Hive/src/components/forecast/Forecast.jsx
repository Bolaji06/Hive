import Header from "./Header";
import Slider from "./Slider"

import PopularCityTemp from "./PopularCityTemp"


export default function Forecast({forecast, chanceOfRain}){

    return (
        <>
        <div className="forecast md:w-[70%]">
            <Header 
                willRain={chanceOfRain}
            />
            <Slider 
                forecastData={forecast}
            /> 
            <PopularCityTemp />
             
        </div>
            
        </>
    )
}