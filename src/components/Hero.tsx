import { Link } from "react-router-dom"
import bus from "../assets/images/busImage.png"

export default function Hero(){
    return (
        <section id="home" className="h-[1000px] w-full flex flex-col md:flex-row justify-between md:relative z-10 px-0 md:px-16 lg:px-28">
            {/* left */}
            <div className="flex flex-col gap-5 w-full md:w-[400px] h-[400px] px-6 md:px-0 mt-32 md:mt-64 z-20">
                <h1 className="text-5xl font-extrabold text-primary">Travel smarter.</h1>
                <h1 className="text-5xl font-extrabold text-primary">Arrive <span className="text-orange-500">better.</span></h1>
                
                <p className="md:text-xl text-wrap text-gray-500 pt-5">Axis helps student book safe, reliable and affordable trips between school and home</p> 

                <Link to="/waitlist" className="bg-primary w-40 py-3 rounded-full text-white font-bold text-center hover:shadow hover:shadow-orange-500 transition-all cursor-pointer">
                    Book Your Trip
                </Link>
                
            </div>

            {/* right */}
            <div className="w-full md:w-3/5 md:absolute right-0 bottom-0">
                <img src={bus} alt="bus" className="w-full h-[600px] md:h-[900px]" />
            </div>
        </section>
    )
}