import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
// import aboutImg from "../assets/images/about_img.png"
// import axisMail from "../assets/images/axis_mail.png"
import { useNavigate } from "react-router-dom"

export default function About() {
    const aboutRef = useRef(null)
    const joinRef = useRef(null)

    const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
    const joinInView = useInView(joinRef, { once: true, margin: "-100px" })

    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        navigate(`/waitlist?email=${encodeURIComponent(email)}`)
    }

    return (
        <section id="about" className="w-full p-2 md:p-30 overflow-hidden">

            {/* About Us */}
            <section ref={aboutRef} className="w-full h-full">
                <motion.h1
                    className="text-center text-3xl font-bold text-primary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    About Us
                </motion.h1>

                <div className="flex flex-col md:flex-row">
                    <div className="text-xl md:text-2xl w-full md:w-1/2 h-auto md:h-[300px] gap-20 flex flex-col py-10">
                        {[
                            <><span className="text-primary font-bold">Axis</span> is a student travel platform that makes booking trips between school and home simple and safe.</>,
                            <>We focus on comfort, affordability, and reliable transport so students can travel without stress.</>,
                            <>Axis helps students across Nigeria move easily and stay connected.</>
                        ].map((text, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -24 }}
                                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 + i * 0.12 }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>

                    <motion.div
                        className="w-full md:w-1/2"
                        initial={{ opacity: 0, x: 40 }}
                        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    >
                        <img 
                        // src={aboutImg}
                        src="https://res.cloudinary.com/dw0y0pik4/image/upload/about_img_bnjc9q" 
                        alt="about" className="w-full h-[400px] md:h-[700px]" />
                    </motion.div>
                </div>
            </section>

            {/* Join Now */}
            <section ref={joinRef} className="w-full bg-primary h-full md:h-[300px] rounded-2xl flex flex-col-reverse md:flex-row p-10">
                <div className="w-full md:w-2/3 text-white flex flex-col justify-center gap-5">
                    <motion.h1
                        className="text-2xl md:text-5xl font-bold"
                        initial={{ opacity: 0, y: 24 }}
                        animate={joinInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        Get travel updates & Exclusive offers
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-2xl"
                        initial={{ opacity: 0, y: 16 }}
                        animate={joinInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                    >
                        Join students traveling smarter with Axis
                    </motion.p>

                    <motion.div
                        className="relative w-full md:w-[500px]"
                        initial={{ opacity: 0, y: 16 }}
                        animate={joinInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Your email here"
                            className="bg-white text-black rounded-3xl w-full py-3 px-2 md:px-10 text-xl outline-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <motion.button
                            className="absolute right-1 md:right-10 bg-primary p-2 rounded-3xl top-1.5 w-24"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            Join Now
                        </motion.button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    className="w-full md:w-1/3 text-white flex flex-col justify-center"
                    initial={{ opacity: 0, x: 40 }}
                    animate={joinInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                    <img 
                        // src={axisMail}
                        src="https://res.cloudinary.com/dw0y0pik4/image/upload/axis_mail_c6wx90" 
                        alt="axisMail" 
                        className="w-full md:w-[450px]" />
                </motion.div>
            </section>

        </section>
    )
}