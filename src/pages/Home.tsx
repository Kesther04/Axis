import About from "../components/About";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
        <>
            <Navbar/>
            <main className="bg-gray-100">
                <Hero/>
                <Explore/>
                <About/>
                <Footer/>
            </main>
            
        </>
    )
}