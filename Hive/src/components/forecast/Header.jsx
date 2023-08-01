import CircularProgress from "./CircularProgress"


export default function Header({willRain}){

    const headerContainer = 
        <header className="px-3 py-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">
                    Weather Forecast
                </h1>
                <div>
                    <CircularProgress 
                            targetProgress={willRain}
                            duration={2000}/>
                </div>
            </div>
        </header>

    return (
        <>
            <div>
                {headerContainer}
            </div>
        </>
    )
}