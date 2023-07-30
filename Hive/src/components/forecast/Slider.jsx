
import cloudy from "../../assets/cloudy.png"

export default function Slider(){

    const forecastSlider = <section className="mt-10">
        <h1 className="today px-4 mb-6 font-bold">Today</h1>
        <div className="scroller flex gap-10 w-full overflow-x-auto whitespace-nowrap">
            <div className="flex flex-col items-center gap-2 text-center  w-28 justify-center">
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>
            <div className="flex flex-nowrap flex-col items-center gap-2 text-center w-28 justify-center">
                
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>
            <div className="flex flex-nowrap flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>
            <div className="flex flex-nowrap flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>
            <div className="flex flex-nowrap flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>
            <div className="flex flex-nowrap flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>
            <div className="flex flex-nowrap flex-col items-center gap-2 text-center w-28 justify-center">
                <p className="">9:00</p>
                
                    <img className="w-10" src={cloudy} alt="" />
                
                
                    <p className="text-sm leading-3">Partial Cloudy</p>
                    <p className="text-sm leading-3 pb-2">12&deg;C</p>
            </div>

        </div>

    </section>

    return (
        <>
            {forecastSlider}
        </>
    )
}