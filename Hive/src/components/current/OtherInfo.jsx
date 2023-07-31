
import upArrow from "../../assets/up-arrow.svg";
import downArrow from "../../assets/down-arrow.svg";

export default function OtherInfo(props){
    //console.log(props)

    const pressureToFixed = props.pressure.toFixed(1);
    //console.log(pressureToFixed)

    const otherInfoContainer =
        <section className="px-1">
            <div className="grid grid-cols-3 px-2 text-left gap-2">
                <div className="rounded-md bg-[#C6BEBE] p-2">
                    <div className="">
                        <p className="text-[#F9F7F3] text-xs">Wind</p>
                        <h2 className="text-yellow-700 py-1 text-4xl
                        md:text-2xl lg:text-4xl">
                            {props.wind}
                         <span className="text-base">kmh</span></h2>
                         <p className="text-sm py-1">{props.wind_dir}</p>
                    </div>

                </div>
                <div className="p-2 rounded-md bg-[#C6BEBE]">
                <div className="">
                        <p className="text-[#F9F7F3] text-xs">Pressure</p>
                        <h2 className="text-yellow-700 py-1 text-4xl
                        md:text-2xl lg:text-4xl">
                            {pressureToFixed}
                         <span className="text-base">in</span></h2>
                        
                    </div>


                </div>
                <div className="p-2 rounded-md bg-[#C6BEBE]">
                <div className="">
                        <p className="text-[#F9F7F3] text-xs">UV</p>
                        <h2 className="text-yellow-700 py-1 text-4xl
                        md:text-2xl lg:text-4xl">
                            {props.sunlight.toFixed(1)}</h2>
                    </div>


                </div>
                <div className="p-2 rounded-md bg-[#C6BEBE]">
                <div className="">
                        <p className="text-[#F9F7F3] text-xs">Humidity</p>
                        <h2 className="text-yellow-700 py-1 text-4xl
                        md:text-2xl lg:text-4xl">
                            {props.humidity}
                         <span className="text-base">%</span></h2>
                         
                    </div>


                </div>
                <div className="p-2 rounded-md bg-[#C6BEBE]">
                <div className="">
                        <p className="text-[#F9F7F3] text-xs">Gust</p>
                        <h2 className="text-yellow-700 py-1 text-4xl
                        md:text-2xl lg:text-4xl">
                            {Math.ceil(props.gust)}
                         <span className="text-base">kmh</span></h2>
                         
                    </div>


                </div>
                <div className="p-2 rounded-md bg-[#C6BEBE]">
                <div className="">
                        <p className="text-[#F9F7F3] text-xs">Sunrise & Sunset</p>
                        <div className="mt-2 flex flex-col gap-2 md:gap-0 lg:gap-2">
                            <div className="flex items-center gap-1">
                            <div className="md:hidden lg:block border border-yellow-700 w-5 h-5 rounded-full
                                bg-white">
                                    <img className="p-1" src={upArrow} alt="" />

                                </div>
                                <h2 className="text-yellow-700 font-semibold
                                 text-sm">{props.sunrise}</h2>

                            </div>
                            <div className="flex items-center gap-1">
                                <div className="md:hidden lg:block border border-yellow-700 w-5 h-5 rounded-full
                                bg-white">
                                    <img className="p-1" src={downArrow} alt="" />

                                </div>
                                <h2 className="text-yellow-700 font-semibold text-sm">{props.sunset}</h2>

                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </section>

    return (
        <>
            <section className="mb-10">
            {otherInfoContainer}</section>
        </>
    )
}