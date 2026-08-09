import { useState } from 'react'
import Sukura from "../assets/sakura.png"

function ExperienceCard({ img, title, desc, price, duration }) {
    return (
        <div className="w-full rounded-2xl overflow-hidden border-2 border-black/10 shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img className="absolute size-full object-cover object-center" src={img} />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 montserrat-bold text-xs text-[#75146A]">
                    {duration}
                </div>
            </div>
            <div className="p-4">
                <h3 className="montserrat-bold text-lg sm:text-xl text-[#484848] truncate">{title}</h3>
                <p className="montserrat-cason text-sm text-gray-500 mt-1 line-clamp-2">{desc}</p>
                <div className="flex items-center justify-between mt-4">
                    <span className="montserrat-bold text-[#F76363] text-lg">${price}</span>
                    <button className="montserrat-bold text-sm bg-[#75146A] text-white rounded-full px-4 py-2 hover:bg-[#5c1054] transition-colors duration-200">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

function Experience() {
    const [activeFilter, setActiveFilter] = useState("All")
    const filters = ["All", "Nature", "Culture", "Food", "Adventure"]

    const experiences = [
        { img: Sukura, title: "Sakura Forest Walk", desc: "Guided walk through blooming cherry blossom trails with a local expert.", price: 45, duration: "2 hrs", category: "Nature" },
        { img: Sukura, title: "Mt. Fuji Sunrise View", desc: "Early morning trip to catch the sunrise over Mt. Fuji from the best viewpoint.", price: 80, duration: "4 hrs", category: "Adventure" },
        { img: Sukura, title: "Traditional Tea Ceremony", desc: "Experience an authentic Japanese tea ceremony with a certified tea master.", price: 35, duration: "1.5 hrs", category: "Culture" },
        { img: Sukura, title: "Local Street Food Tour", desc: "Taste your way through hidden local food stalls with a knowledgeable guide.", price: 55, duration: "3 hrs", category: "Food" },
        { img: Sukura, title: "Lakeside Cycling Tour", desc: "Relaxed cycling route around the lake with stunning mountain views.", price: 30, duration: "2.5 hrs", category: "Adventure" },
        { img: Sukura, title: "Kimono Dress Experience", desc: "Try on a traditional kimono and take photos in a scenic garden setting.", price: 40, duration: "1 hr", category: "Culture" },
    ]

    const filteredExperiences = activeFilter === "All" 
        ? experiences 
        : experiences.filter(exp => exp.category === activeFilter)

    return (
        <div className="w-full">
            
            {/* Hero banner */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center overflow-hidden">
                <img className="absolute size-full object-cover object-center opacity-70" src={Sukura} />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-center px-4">
                    <h1 className="montserrat-bold text-3xl sm:text-5xl lg:text-6xl text-white">
                        Discover Experiences
                    </h1>
                    <p className="montserrat-cason text-sm sm:text-lg text-white/90 mt-3 max-w-lg mx-auto">
                        Curated activities to make your stay unforgettable
                    </p>
                </div>
            </div>

            {/* Filter bar */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`shrink-0 montserrat-bold text-sm px-4 sm:px-5 py-2 rounded-full border-2 transition-colors duration-200 ${
                                activeFilter === filter
                                    ? "bg-[#75146A] border-[#75146A] text-white"
                                    : "bg-white border-gray-300 text-[#484848] hover:border-[#75146A]"
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Experience grid */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-16">
                {filteredExperiences.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {filteredExperiences.map((exp, i) => (
                            <ExperienceCard key={i} {...exp} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 montserrat-cason py-16">
                        No experiences found in this category.
                    </p>
                )}
            </div>
        </div>
    )
}

export default Experience