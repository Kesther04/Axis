// import abuja from "../assets/images/abuja.png"
// import lagos from "../assets/images/lagos.png"
// import portH from "../assets/images/portH.png"
// import enugu from "../assets/images/enugu.png"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Explore() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const locations = [
        { img: "https://res.cloudinary.com/dw0y0pik4/image/upload/abuja_zj6yse", title: "Abuja", destinations: 56, stars: 5 },
        { img: "https://res.cloudinary.com/dw0y0pik4/image/upload/lagos_oruvkg", title: "Lagos", destinations: 56, stars: 5 },
        { img: "https://res.cloudinary.com/dw0y0pik4/image/upload/portH_toddul", title: "Port Harcout", destinations: 24, stars: 4 },
        { img: "https://res.cloudinary.com/dw0y0pik4/image/upload/enugu_go4vjv", title: "Enugu", destinations: 37, stars: 4 },
    ]

    return (
        <section id="explore" className="h-auto mb-10 md:-mt-60 w-full">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                <path d="M 0,500 L 0,187 C 87.61722488038276,164.8181818181818 175.23444976076553,142.63636363636365 285,163 C 394.76555023923447,183.36363636363635 526.6794258373205,246.2727272727273 628,252 C 729.3205741626795,257.7272727272727 800.0478468899523,206.27272727272728 889,177 C 977.9521531100477,147.72727272727272 1085.1291866028707,140.63636363636363 1180,146 C 1274.8708133971293,151.36363636363637 1357.4354066985647,169.1818181818182 1440,187 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="#0d2b4e" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" />
            </svg>

            <div
                ref={sectionRef}
                className="w-full h-auto flex flex-col bg-primary px-5 md:px-20 py-20 items-center justify-center font-bold text-center top-90 gap-5"
            >
                <motion.h1
                    className="text-white text-2xl md:text-3xl"
                    initial={{ opacity: 0, y: 24 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Popular routes for students
                </motion.h1>

                <motion.p
                    className="text-white text-lg"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    Top destination students love to travel
                </motion.p>

                <div className="w-full h-full flex flex-col  lg:flex-row justify-between items-center gap-20 lg:gap-10 my-10">
                    {locations.map((location, index) => (
                        <motion.div
                            className="w-full lg:w-1/4 h-auto lg:h-[500px] relative"
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        >
                            <img src={location.img} alt={location.title} className="w-full h-full rounded-xl relative" />
                            <motion.div
                                className="absolute bg-white rounded-3xl p-5 -bottom-10 left-0 md:left-[30px] text-left w-60 md:w-64"
                                initial={{ opacity: 0, y: 12 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 + index * 0.1 }}
                            >
                                <h1 className="text-black font-bold text-xl md:text-3xl">{location.title}</h1>
                                <p className="text-black font-medium text-sm md:text-lg">{location.destinations} destinations</p>
                                <p className="text-black font-medium text-sm md:text-lg">
                                    {Array.from({ length: location.stars }).map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="text-white text-lg mt-5 cursor-pointer hover:text-orange-500 transition-colors"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.65 }}
                >
                    Explore all routes <span className="text-orange-500">→</span>
                </motion.p>
            </div>

            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                <path d="M 0,400 L 0,150 C 69.40669856459331,102.32535885167465 138.81339712918663,54.65071770334929 235,81 C 331.1866028708134,107.34928229665071 454.1531100478469,207.7224880382775 568,211 C 681.8468899521531,214.2775119617225 786.574162679426,120.45933014354067 878,97 C 969.425837320574,73.54066985645933 1047.5502392344497,120.44019138755979 1139,141 C 1230.4497607655503,161.5598086124402 1335.2248803827752,155.7799043062201 1440,150 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#0d2b4e" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)" />
            </svg>
        </section>
    )
}