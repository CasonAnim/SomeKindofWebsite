import { useState } from 'react'

function Card(props) {
    const [liked, setLiked] = useState(false)

    const totalStars = 5
    const filledStars = props.rating || 0

    return (
        <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-4xl overflow-hidden items-center flex justify-center">
            <img src={props.img} className="absolute size-full object-cover object-center opacity-55" />

            <div className="relative size-full flex flex-col justify-between">
                
                {/* Top row: stars + heart */}
                <div className="flex justify-between items-start p-2 sm:p-3">
                    <div className="flex gap-0.5 text-sm sm:text-base">
                        {Array.from({ length: totalStars }).map((_, i) => (
                            <i 
                                key={i} 
                                className={`ri-star-fill ${i < filledStars ? "text-amber-400" : "text-white/40"}`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={() => setLiked(!liked)} 
                        className={`text-lg sm:text-xl ${liked ? "text-red-500" : "text-white"}`}
                    >
                        <i className={liked ? "ri-heart-fill text-red-500" : "ri-heart-line text-white"} />
                    </button>
                </div>

                {/* Bottom content */}
                <div className="w-full h-auto self-end p-2 sm:p-3">
                    <div className="relative ml-0 w-12 sm:w-14 lg:w-16 aspect-square overflow-hidden rounded-full">
                        <img src={props.img} className="absolute size-full object-cover object-center" />
                    </div>
                    <div className="ml-1 mt-1.5 montserrat-bold">
                        <div className="montserrat-bold text-black text-lg sm:text-xl lg:text-2xl truncate">
                            {props.name}
                        </div>
                        <div className="montserrat-cason text-base sm:text-lg text-[#343434] truncate">
                            {props.desc}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card