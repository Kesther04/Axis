import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Link } from "react-router-dom"
import { FaInstagram, FaTwitter } from "react-icons/fa"
// import logo from "../assets/images/logo2.png"

export default function Footer() {
    const footerRef = useRef(null)
    const isInView = useInView(footerRef, { once: true, margin: "-80px" })

    const columns = [
        {
            heading: "Menu",
            links: ["Home", "About", "Blog", "Reviews", "Community"],
        },
        {
            heading: "Company",
            links: ["Terms & Conditions", "Privacy Policy", "Careers"],
        },
        {
            heading: "Support",
            links: ["Help Center", "Safety", "Contact Us", "FAQ"],
        },
        {
            heading: "Contact Us",
            links: ["07033620648", "support@axisconnect.com.ng"],
        },
    ]

    return (
        <section className="w-full">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
                <path d="M 0,400 L 0,100 C 100.1531100478469,119.3397129186603 200.3062200956938,138.6794258373206 306,127 C 411.6937799043062,115.32057416267942 522.9282296650717,72.62200956937798 609,73 C 695.0717703349283,73.37799043062202 755.9808612440191,116.83253588516746 833,118 C 910.0191387559809,119.16746411483254 1003.1483253588517,78.04784688995215 1107,68 C 1210.8516746411483,57.952153110047846 1325.4258373205741,78.97607655502392 1440,100 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#0d2b4e" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0" />
                <path d="M 0,400 L 0,233 C 113.96172248803828,254.54066985645935 227.92344497607655,276.0813397129187 331,274 C 434.07655502392345,271.9186602870813 526.2679425837321,246.2153110047847 604,228 C 681.7320574162679,209.7846889952153 745.0047846889953,199.05741626794259 834,198 C 922.9952153110047,196.94258373205741 1037.712918660287,205.555023923445 1143,213 C 1248.287081339713,220.444976076555 1344.1435406698565,226.7224880382775 1440,233 L 1440,400 L 0,400 Z" stroke="none" strokeWidth="0" fill="#0d2b4e" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1" />
            </svg>

            <footer
                ref={footerRef}
                className="w-full bg-primary text-white flex flex-col lg:flex-row justify-around p-15 md:p-20 gap-10 md:gap-5"
            >
                {/* Brand column */}
                <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <img 
                        // src={logo} 
                        src="https://res.cloudinary.com/dw0y0pik4/image/upload/logo2_pbqb3y"
                        alt="logo" className="w-32 md:w-36" />
                    <p className="text-white text-lg font-bold text-center">Travel. Connect. Belong.</p>
                    <p className="text-white text-sm py-3">The smarter way for students to travel across Nigeria</p>
                    <div className="flex gap-3 items-center justify-center">
                        <motion.span
                            className="hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaInstagram size={25} className="text-white" />
                        </motion.span>
                        <motion.span
                            className="hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaTwitter size={25} className="text-white" />
                        </motion.span>
                    </div>
                </motion.div>

                {/* Link columns */}
                {columns.map((col, colIndex) => (
                    <motion.div
                        key={col.heading}
                        className="flex flex-col px-0 md:px-5 gap-3"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 + colIndex * 0.09 }}
                    >
                        <h1 className="text-xl font-bold mb-3">{col.heading}</h1>
                        {col.links.map((label, linkIndex) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 + colIndex * 0.09 + linkIndex * 0.05 }}
                            >
                                <Link to="/" className="hover:text-orange-500 transition-colors duration-200">
                                    {label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </footer>
        </section>
    )
}