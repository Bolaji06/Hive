import MainInfo from "./MainInfo";
import OtherInfo from "./OtherInfo";
import RecentSearch from "./RecentSearch";


export default function Current(props){
    //console.log(props)

    return (
        <>
            <main className="bg-white md:max-w-[600px]">
                <MainInfo 
                    icon={props.current.condition.icon}
                    text={props.current.condition.text}
                    tempCel={props.current.temp_c}
                    tempFh={props.current.temp_f}
                    country={props.location.country}
                    region={props.location.name}
                    localtime={props.location.localtime}
                    isCelcius={props.isCelcius}
                    


                />
                <OtherInfo 
                    wind={props.current.wind_kph}
                    wind_dir={props.current.wind_dir}
                    pressure={props.current.pressure_in}
                    sunlight={props.current.uv}
                    humidity={props.current.humidity}
                    gust={props.current.gust_kph}
                    sunrise={props.astro.sunrise}
                    sunset={props.astro.sunset}

                />
                <RecentSearch 
                inputvalue={props.inputvalue}
                savedsearch={props.savedsearch}
                />
            </main>
        </>
    )
}