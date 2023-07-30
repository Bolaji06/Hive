
import { useEffect, useState } from "react";
import serviceWorker from "./service_worker.jsx"

import axios from "axios";

import Current from "./components/current/Current";
import Forecast from "./components/forecast/Forecast";
import searchIcon from "./assets/search-icon.svg"
import RecentSearch from "./components/current/RecentSearch";


export default function App(){

  const [weatherData, setWeatherData] = useState(null);
  const [inputValue, setInputvalue] = useState("New York");

  const [isCelcius, setCelcius] = useState(true);
  const [error, setError] = useState(null);
  const [savedSearch, setSavedSearch] = useState([]);

  function handleCelcius(){
    setCelcius((curState) =>{
      return !curState
    });
  }

  function inputOnChange(e){
    const newValue = e.target.value;
    setInputvalue(newValue)
    localStorage.setItem("savedvalues", JSON.stringify([...savedSearch, newValue]));
  }
  function loadSavedValues(){
    const savedValuesLocalStorage = localStorage.getItem("savedvalues");
    if (savedValuesLocalStorage){
      setSavedSearch(JSON.parse(savedValuesLocalStorage));
    }
  }


  const KEY = "105367d1d0c5401a96e82941232907"
  //const cURI =  `http://api.weatherapi.com/v1/current.json?key=d8f60fbbb7fe4fc9a25152241232207&q=London`

  const URI = `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${inputValue}&days=1`;

  useEffect(() =>{

    const fetchData = async ()=>{
      try{
        const response = await axios.get(URI)
          //console.log(response)
          setWeatherData(response.data);
          setError(null);
      }
      catch(error){
        console.log(error.message)
        setError(error)
      }
    }
    fetchData()
  }, [URI])

  useEffect(() =>{
    loadSavedValues()
    //localStorage.clear();
  }, []);

  useEffect(()=>{
    const timeout = setTimeout(() => {
      if (inputValue.trim() !== ""){
        setSavedSearch([...savedSearch, inputValue])
        localStorage.setItem("savedInput", JSON.stringify([...savedSearch, inputValue])); 
      }
    }, 5000);
    return ()=>{
      clearTimeout(timeout);
    }
  }, [inputValue])

  if (!weatherData){
    return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  }


  // if(!weatherData && error){
  //   return <h1 className="mt-44">{error.message}</h1>
  // }

 
  //console.log(weatherData)

  // function handleSubmit(e){
  //   e.preventDefault();
  //   console.log(weatherData)
  // }

  const headerContainer =
    <header className="py-2 px-3 bg-white">
      <form className="flex justify-between md:justify-center md:mt-2">

        <input placeholder="Search for places..." type="text"
         name={inputValue} value={inputValue}
        className="outline-none bg-transparent border-b-2
        border-b-[#191D38] w-5/6 md:max-w-md"
        onChange={inputOnChange}/>

        {/* <button type="submit" className="
        rounded-full bg-[#191D38] p-1">
            <img className="w-6" src={searchIcon} alt="" />
        </button> */}
      </form>
      <section className="mt-3 flex items-center gap-3">
        <button onClick={handleCelcius} className="flex text-white rounded-full justify-center items-center w-8 h-8 bg-[#191D38]">
         {isCelcius ? "F" : "C"}
        </button>
      </section>

    </header>

    const weatherAstro = weatherData.forecast.forecastday[0].astro;
    //console.log(weatherAstro)

    if("serviceWorker" in navigator){
      navigator.serviceWorker.register(serviceWorker).then(registration=>{
        console.log("SW Registered!");
      }).catch(error=>{
        console.log(error, "SW Registration Failed");
      });
  }else{
    console.log("Not supported");
  }
  return (
      <>
      {headerContainer}

      <section className="flex flex-col md:flex-row">

         <Current
          current={weatherData.current}
          location={weatherData.location}
          astro={weatherAstro}
          isCelcius={isCelcius}
          inputvalue={inputValue}
          savedsearch={savedSearch}
          />

        <Forecast
          forecast={weatherData.forecast}
        />
      </section>

      </>
  )

}