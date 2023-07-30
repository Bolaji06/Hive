
import cloudy from "../../assets/cloudy.png"
import clock from "../../assets/clock.svg"


function formatDate(inputDate){
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dateParts = inputDate.split("-");

    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const date =  new Date(inputDate);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return `${dayOfWeek} ${day} ${year}`

}
export default function MainInfo(props){
    //console.log(props)

    const spiltTimeDate = props.localtime.split(" ");
    const date = spiltTimeDate[0]

    const timeString = formatDate(date)
    const time = spiltTimeDate[1]

    const mainInfoContainer = (
        <section className="my-2 px-2 mb-8 py-4 bg-white w-full">
            <div className="flex items-center flex-col">                           
                <div className="">
                    <img className="w-20" src={props.icon} alt="" />
                </div>

                <div className="my-4 text-center text-[#191D38]">
                    <p>Today, <span>{timeString}</span></p>
                    <div className="mt-1 flex items-center justify-center gap-1">
                         <img className="w-4" src={clock} alt="" />
                         <p className="font-semibold">{time}</p>
                    </div>
                   
                    <p>{props.text}</p>
                </div>
                <div className="text-center">
                    <h2 className="text-5xl">
                        {props.isCelcius ? <span>{props.tempCel}&deg;C</span>
                        : <span>{props.tempFh}&deg;F</span>}</h2>
                    <p className="p-1">{props.region}, {props.country}</p>
                </div>
            </div>



        </section> )
    return (
        <>
            <div>                       
                {mainInfoContainer}
            </div>
        </>
    )
}