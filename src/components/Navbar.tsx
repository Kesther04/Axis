import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import logo from "../assets/images/logo.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault()
        setMenuOpen(false)

        const tryScroll = () => {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: "smooth" })
            }
        }

        if (location.pathname !== "/") {
            navigate("/")
            setTimeout(tryScroll, 100)
        } else {
            tryScroll()
        }
    }

    const navLinks = [
        { label: "Home", id: "home" },
        { label: "Explore", id: "explore" },
        { label: "About", id: "about" },
    ]

    return (
        <section className="fixed top-0 flex flex-row items-center justify-between px-6 md:px-16 lg:px-28 py-2 bg-white border-b border-gray-200 w-full z-50">

            {/* Logo */}
            <motion.div
                className="logo"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <img src={logo} alt="logo" className="w-24 md:w-32" />
            </motion.div>

            {/* Desktop Nav */}
            <motion.div
                className="hidden md:flex gap-8 lg:gap-10 text-base lg:text-lg lg:mr-20 items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
                {navLinks.map((link, i) => (
                    <motion.div
                        key={link.id}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 + i * 0.07 }}
                    >
                        <Link
                            to={`/#${link.id}`}
                            onClick={(e) => handleNavClick(e, link.id)}
                            className="hover:text-primary transition-colors"
                        >
                            {link.label}
                        </Link>
                    </motion.div>
                ))}

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.38 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <Link
                        to="/signin"
                        className="border border-gray-200 px-4 py-2 rounded-full bg-primary font-bold text-white text-base lg:text-lg hover:opacity-90 transition-opacity"
                    >
                        Sign In
                    </Link>
                </motion.div>
            </motion.div>

            {/* Mobile Hamburger */}
            <motion.button
                className="md:hidden text-primary p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <AnimatePresence mode="wait" initial={false}>
                        {menuOpen ? (
                            <motion.path
                                key="close"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                                initial={{ opacity: 0, rotate: -45 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 45 }}
                                transition={{ duration: 0.2 }}
                            />
                        ) : (
                            <motion.path
                                key="open"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                                initial={{ opacity: 0, rotate: 45 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -45 }}
                                transition={{ duration: 0.2 }}
                            />
                        )}
                    </AnimatePresence>
                </svg>
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col px-6 py-5 gap-5 md:hidden z-50"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.id}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: i * 0.06 }}
                            >
                                <Link
                                    to={`/#${link.id}`}
                                    onClick={(e) => handleNavClick(e, link.id)}
                                    className="text-base font-medium hover:text-primary transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: navLinks.length * 0.06 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Link
                                to="/signin"
                                onClick={() => setMenuOpen(false)}
                                className="bg-primary text-white font-bold text-base px-5 py-2.5 rounded-full w-fit hover:opacity-90 transition-opacity inline-block"
                            >
                                Sign In
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}