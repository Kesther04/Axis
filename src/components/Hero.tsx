import { Link } from "react-router-dom"
import bus from "../assets/images/busImage.png"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
    const sectionRef = useRef(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section
            id="home"
            ref={sectionRef}
            className="h-[1000px] w-full flex flex-col md:flex-row justify-between md:relative z-10 px-0 md:px-16 lg:px-28 overflow-hidden"
        >
            {/* left */}
            <div className="flex flex-col gap-5 w-full md:w-[400px] h-[400px] px-6 md:px-0 mt-32 md:mt-64 z-20">

                <motion.h1
                    className="text-5xl font-extrabold text-primary"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    Travel smarter.
                </motion.h1>

                <motion.h1
                    className="text-5xl font-extrabold text-primary"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                    Arrive <span className="text-orange-500">better.</span>
                </motion.h1>

                <motion.p
                    className="md:text-xl text-wrap text-gray-500 pt-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
                >
                    Axis helps student book safe, reliable and affordable trips between school and home
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-fit"
                >
                    <Link
                        to="/waitlist"
                        className="bg-primary w-40 py-3 rounded-full text-white font-bold text-center hover:shadow hover:shadow-orange-500 transition-all cursor-pointer block"
                    >
                        Book Your Trip
                    </Link>
                </motion.div>
            </div>

            {/* right */}
            <motion.div
                className="w-full md:w-3/5 md:absolute right-0 bottom-0"
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                <img src={bus} alt="bus" className="w-full h-[600px] md:h-[900px]" />
            </motion.div>
        </section>
    )
}