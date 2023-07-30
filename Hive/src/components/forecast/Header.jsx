

export default function Header(){

    const headerContainer = 
        <header className="px-3 py-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">
                    Weather Forecast
                </h1>

                <div className="flex items-center gap-2">
                    <p className="text-sm">Chance Of Rain</p>
                    <input className="rounded-full h-1"
                    type="range" name="ch-rain" id="ch-rain" />
                    <p className="text-sm">30%</p>
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