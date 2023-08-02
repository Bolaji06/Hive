

export function CityCard({cityData}){

    const style = {
        backgroundImage: `url(${cityData.image})`
    }

    return (
        <>
           <div className="city" style={style}>
                        <div className="relative text-center z-10 py-2">
                            <h2 className="text-3xl px-2 text-white font-thin md:text-4xl">{cityData.temperature}&deg;</h2>
                            <p className="font-light  text-white text-sm px-3">{cityData.name}</p>
                        </div>
            </div>              
        </>
    )
}