import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <section className="fixed top-0 flex flex-row items-center justify-between px-6 md:px-16 lg:px-28 py-2 bg-white border-b border-gray-200 w-full z-50 ">

            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="logo" className="w-24 md:w-32" />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 lg:gap-10 text-base lg:text-lg lg:mr-20 items-center">
                <Link to="/#home" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/#explore" className="hover:text-primary transition-colors">Explore</Link>
                <Link to="/#about" className="hover:text-primary transition-colors">About</Link>
                <Link
                    to="/"
                    className="border border-gray-200 px-4 py-2 rounded-full bg-primary font-bold text-white text-base lg:text-lg hover:opacity-90 transition-opacity"
                >
                    Sign In
                </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-primary p-2"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    {menuOpen
                        ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    }
                </svg>
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col px-6 py-5 gap-5 md:hidden z-50">
                    <Link to="/#home" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/#explore" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Explore</Link>
                    <Link to="/#about" className="text-base font-medium hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link
                        to="/"
                        className="bg-primary text-white font-bold text-base px-5 py-2.5 rounded-full w-fit hover:opacity-90 transition-opacity"
                        onClick={() => setMenuOpen(false)}
                    >
                        Sign In
                    </Link>
                </div>
            )}

        </section>
    )
}