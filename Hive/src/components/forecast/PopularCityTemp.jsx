
import { useEffect, useState } from "react";
import cityData from "../../data"
import  CityCard  from "./CityCard";
export default function PopularCityTempearture(){
    const [cityDataState, setCityDataState] = useState([]);

    const API_KEY = "105367d1d0c5401a96e82941232907";
    
    useEffect(() =>{
            const fetchDataForCities = async () => {
                try {
                    
                        const updatedCityData = await Promise.all(
                            cityData.map(async (city) =>{
                                const URI = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city.city}`;
                                const response = await fetch(URI);
                                const data = await response.json();   
 
                                return {
                                    name: city.city,
                                    image: city.image,
                                    temperature: data.current.temp_c,
                                }
                            })
                        )
                        setCityDataState(updatedCityData);
                }
                catch(e){
                    console.log(e)
                }
            }
            fetchDataForCities();
        
    }, [])
    
    const placeAboutContainer = <section className="h-10">
    <div className="pop-place relative top-16 w-full">
        <header className="mt-2">
            <h1 className="pop-head text-slate-200 py-1 text-center mt-2
            md:text-xl">Popular City</h1>

                    <div className="scroller text-center py-4 w-full flex 
        items-center overflow-x-auto whitespace-nowrap">
           
          {cityDataState.map((city) => {
            return (<CityCard key={city.city} cityData={city} />)
          })}
            
        </div>
        </header>


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