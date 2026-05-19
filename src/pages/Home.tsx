import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home(){
    return (
        <>
            <Navbar/>
            <main>
                <Hero/>
                <Explore/>
            </main>
            
        </>
    )
}