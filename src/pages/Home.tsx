import About from "../components/About";
// import ComingSoon from "../components/ComingSoon";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
        <>
            <Navbar/>
            <main className="bg-gray-100 w-full h-auto">
                <Hero/>
                <Explore/>
                <About/>
                {/* <ComingSoon/> */}
                <Footer/>
            </main>
            
        </>
    )
}