import { useState } from 'react'
import { Link } from 'react-router-dom'
import pim from '../assets/PIM_LOGO.svg'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { label: "Home", to: "/" },
        { label: "Studio", to: "./studio" },
        { label: "Experiences", href: "./exp" },
        { label: "Features", href: "./" },
        { label: "Members", href: "./" },
        { label: "Contact", href: "./contact" },
    ]

    return (
        <>
        <div className="fixed justify-between sm:justify-center flex items-center text-white imprima-regular z-[500] h-16 sm:h-1/12 w-full px-4 sm:px-0">
            
            {/* Logo — always visible */}
            <div className="flex items-center justify-center sm:hidden">
                <img src={pim} className="w-10" />
            </div>

            {/* Desktop nav */}
            <div className="hidden w-full h-full sm:gap-4 md:gap-8 sm:flex sm:flex-row items-center justify-center lg:text-2xl sm:text-xl bg-black/35">
                <div className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    <Link to="/">Home</Link>
                </div>
                <div className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    <Link to="./studio">Studio</Link>
                </div>
                <div className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    <Link to="./exp">Experiences</Link>
                    
                </div>
                <div className="relative h-full aspect-square">
                    <img src={pim} className=" absolute object-fill object-center h-full w-full" />
                </div>
                <div className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    <Link to="./">Features</Link>
                </div>
                <div className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    <Link to="./">Members</Link>
                </div>
                <div className="opacity-50 transition-opacity duration-200 hover:opacity-100">
                    <Link to="./contact">Contact</Link>
                </div>
            </div>

            {/* Mobile hamburger button */}
            <button 
                onClick={() => setMenuOpen(!menuOpen)} 
                className="sm:hidden text-3xl z-[501]"
            >
                <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </button>
        </div>

        {/* Mobile dropdown menu */}
        <div className={`fixed sm:hidden top-16 left-0 w-full bg-black/90 backdrop-blur-sm text-white imprima-regular z-[499] transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"}`}>
            <div className="flex flex-col items-center gap-4 text-lg">
                {navLinks.map((link, i) => (
                    link.to ? (
                        <Link key={i} to={link.to} onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">
                            {link.label}
                        </Link>
                    ) : (
                        <a key={i} href={link.href} onClick={() => setMenuOpen(false)} className="opacity-80 hover:opacity-100">
                            {link.label}
                        </a>
                    )
                ))}
            </div>
        </div>
        </>
    )
}

export default Navbar