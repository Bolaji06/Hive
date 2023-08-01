import Header from "./Header";
import PlaceAbout from "./PlaceAbout"
import PopularCityTemp from "./PopularCityTemp"
import Slider from "./Slider"


export default function Forecast({forecast, chanceOfRain}){

    return (
        <>
        <div className="md:w-[70%]">
            <Header 
            willRain={chanceOfRain}/>
            <Slider 
            forecastData={forecast}/> 
            <PlaceAbout />
            <PopularCityTemp />
        </div>
            
        </>
    )
}