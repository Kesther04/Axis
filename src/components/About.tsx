// import { User } from "lucide-react";
import aboutImg from "../assets/images/about_img.png"
import axisMail from "../assets/images/axis_mail.png"
export default function About () {
    // const responses = [
    //     {
    //         name:"Michael",
    //         type:"Med",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur cumque molestiae fugit reprehenderit mollitia et nisi!",
    //         rating:5
    //     },
    //     {
    //         name:"William",
    //         type:"Computer",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur cumque molestiae fugit reprehenderit mollitia et nisi!",
    //         rating:4
    //     },
    //     {
    //         name:"Mary",
    //         type:"Inter Rel",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus pariatur cumque molestiae fugit reprehenderit mollitia et nisi!",
    //         rating: 4
    //     }
    // ]
    return (

        <section id="about" className="w-full p-2 md:p-30">
            {/* about us */}
            <section className="w-full h-full ">
                <h1 className="text-center text-3xl font-bold text-primary">About Us</h1>
                
                <div className="flex flex-col md:flex-row">
                    <div className=" text-xl md:text-2xl w-full md:w-1/2 h-auto md:h-[300px] gap-20 flex flex-col py-10">
                        <p><span className="text-primary font-bold">Axis</span> is a student travel platform that makes booking trips between school and home simple and safe.
                        </p>
                        
                        <p>We focus on comfort, affordability, and reliable transport so students can travel without stress.</p>

                        <p>Axis helps students across Nigeria move easily and stay connected.</p>
                    </div>

                    <div className="w-full md:w-1/2">
                        <img src={aboutImg} alt="about"  className="w-full h-[400px] md:h-[700px] "/>
                    </div>
                </div>
            </section>
            
            {/* student feedback */}
            {/* <section className="w-full h-full flex flex-col my-20 gap-5">
                <h1 className="text-center text-orange-500 font-bold text-xl">STUDENT VOICES</h1>
                <p className="text-center text-primary text-3xl font-bold">What Students are Saying</p>
                <div className="flex flex-col md:flex-row justify-around gap-10">
                    {responses.map((res, i) => (
                        <div className="w-full md:w-1/3 h-auto rounded-2xl bg-white shadow-lg p-10 flex justify-between" key={i}>
                            <div className="w-[80px] flex flex-col items-center">
                                <User className="w-full h-auto text-primary rounded-full bg-gray-400 p-2"/>
                            </div>

                            <div className="w-2/3 gap-5 flex flex-col">
                                
                                <p className="text-primary font-bold text-2xl">{res.type} Student</p>
                                <p>
                                    {Array.from({ length: res.rating }).map((_, index) => (
                                        <span key={index}>⭐</span>
                                    ))}
                                </p>
                                <p>{res.description}</p>
                                <p className="text-primary font-bold text-xl">{res.name}</p>

                            </div>
                        </div>
                    ))}           
                </div>
            </section> */}

            {/* join now */}
            <section className="w-full bg-primary h-full md:h-[300px] rounded-2xl  flex flex-col md:flex-row p-10">
                <div className="w-full md:w-4/5 text-white flex flex-col justify-center gap-5">
                    <h1 className=" text-2xl md:text-5xl font-bold">Get travel updates & Exclusive offers</h1>
                    <p className=" text-lg md:text-2xl">Join students traveling smarter with Axis</p>
                    <div className="relative w-full md:w-[500px]">
                        <input type="email" placeholder="Your email here" className="bg-white text-black rounded-3xl w-full py-3 px-2 md:px-10 text-xl outline-0" />
                        <button className="absolute right-1 md:right-10 bg-primary p-2 rounded-3xl top-1.5 w-24 ">Join Now</button>
                    </div>
                </div>

                <div className="w-1/5 text-white flex flex-col justify-center">
                    <img src={axisMail} alt="axisMail" className="w-[100px]" />
                </div>
            </section>
        </section>
    );
}