import Sukura from "../../assets/sakura.png"
import Magnify from "../../assets/magnifying-glass.svg?react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from 'react-router-dom'

function Hero() {

    const handleMouseEnter = ((e) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            ease: "sine.inOut",
            duration: 0.2
        })
    })
    const handleMouseLeave = ((e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            ease: "sine.inOut",
            duration: 0.2
        })
    })

    return (
        <>
        <img className="absolute w-full h-full object-cover opacity-75 -z-10" src={Sukura} />
        <div className="z-20 w-full h-full flex items-center justify-center pb-6 sm:pb-0">
            
            <div className="w-11/12 sm:w-8/12">
                <div className="bg-white p-2 sm:p-1.5 rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-2 md:flex md:justify-center md:items-center gap-y-3 md:gap-x-4 text-xs md:text-xl p-1 md:p-1.5">

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="min-w-0 montserrat-cason">
                            <div className="text-[#F76363]">Price</div>
                            <p className="opacity-50 truncate">Which price do you prefer?</p>
                        </div>
                        
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="min-w-0 montserrat-cason">
                            <div className="text-[#F76363]">Check In</div>
                            <p className="opacity-50 truncate">Add Dates</p>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="min-w-0 montserrat-cason">
                            <div className="text-[#F76363]">Check Out</div>
                            <p className="opacity-50 truncate">Add Dates</p>
                        </div>

                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="min-w-0 montserrat-cason">
                            <div className="text-[#F76363]">Guest</div>
                            <p className="opacity-50 truncate">Add Guests</p>
                        </div>

                        {/* Search button — one element, adapts via classes instead of two separate divs */}
                        <div className="col-span-2 md:col-span-1 flex justify-center md:justify-end min-w-0">
                            <div 
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave} 
                                className="flex items-center justify-center gap-2 w-full md:w-auto mt-2 md:mt-0 bg-[#F76363] text-white rounded-2xl md:rounded-full px-4 py-2 md:p-3 md:aspect-square cursor-pointer"
                            >
                                <i className="ri-search-line"></i>
                                <span className="montserrat-bold text-sm md:hidden">Search</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero