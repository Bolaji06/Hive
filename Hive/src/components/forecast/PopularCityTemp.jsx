
import { useEffect, useState } from "react";
import cityData from "../../data"
import  CityCard  from "./CityCard";

export default function PopularCityTempearture(){
    const [cityDataState, setCityDataState] = useState([]);

    const API_KEY = "105367d1d0c5401a96e82941232907";
    
    useEffect(() =>{
        const fetchCityData = async () =>{
            try {
                const fetchCity = await Promise.all(
                    cityData.map(async (city) => {
                        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.city}`);
                        const data = await response.json();

                        return {
                            name: city.city,
                            image: city.image,
                            temperature: data.current.temp_c,
                        }
                       
                    }) 
                )
                setCityDataState(fetchCity)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCityData();
    }, [])
    
    
    const placeAboutContainer = <section className=" h-10">
    <div className="pop-place relative top-16 w-full">
        <header className="mt-2">
            <h1 className="pop-head text-xl text-slate-200 py-1 text-center mt-2
            md:text-2xl">Popular City</h1>
               
        </header>

        <div className="scroller text-center py-4 w-full flex 
                        items-center overflow-x-auto whitespace-nowrap">
           
          {cityDataState.map((city) => {
            return (<CityCard key={city.city} cityData={city} />)
          })}
            
        </div>

    </div>
</section>

return (
    <>
        <div className="mt-10">
            {placeAboutContainer}
        </div>
    </>
)
}