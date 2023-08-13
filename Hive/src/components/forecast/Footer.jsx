
import waves from "../../assets/wave.svg"

export default function Footer(){
    const footerContainer = (
     <footer className="flex justify-between 
     absolut items-center border-2 border-red-600">
        <div>
            <h3>More Works</h3>
            <a href="">My work link</a>
        </div>

        <div>
            <h3>Contact</h3>
            <p>Have a generative design project
                in mind let's chat
            </p>
        </div>

    </footer>)

    return (
        <>
            {footerContainer}
        </>
    )

}