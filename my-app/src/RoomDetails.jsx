import { useState } from 'react'
import { useParams } from 'react-router-dom'
import lars from'./assets/Fat.png'
import pic_1 from './assets/PicSet_1/pic_1.jpg'
import pic_2 from './assets/PicSet_1/pic_2.jpg'
import pic_3 from './assets/PicSet_1/pic_3.jpg'
import pic_4 from './assets/PicSet_1/pic_4.jpg'
import pic_5 from './assets/PicSet_1/pic_5.jpg'
import pic_3_1 from './assets/PicSet_4/pic_1.jpg'
import pic_3_2 from './assets/PicSet_4/pic_2.jpg'
import pic_3_3 from './assets/PicSet_4/pic_3.jpg'
import pic_3_4 from './assets/PicSet_4/pic_4.jpg'
import pic_3_5 from './assets/PicSet_4/pic_5.jpg'
import pic_4_1 from './assets/PicSet_5/pic_1.jpg'
import pic_4_2 from './assets/PicSet_5/pic_2.jpg'
import pic_4_3 from './assets/PicSet_5/pic_3.jpg'
import pic_4_4 from './assets/PicSet_5/pic_4.jpg'
import pic_4_5 from './assets/PicSet_5/pic_5.jpg'
import pic_5_1 from './assets/PicSet_6/pic_1.jpg'
import pic_5_2 from './assets/PicSet_6/pic_2.jpg'
import pic_5_3 from './assets/PicSet_6/pic_3.jpg'
import pic_5_4 from './assets/PicSet_6/pic_4.jpg'
import pic_5_5 from './assets/PicSet_6/pic_5.jpg'
import pic_6 from './assets/PicSet_2/pic_1.jpg'
import pic_7 from './assets/PicSet_2/pic_2.jpg'
import pic_8 from './assets/PicSet_2/pic_3.jpg'
import pic_9 from './assets/PicSet_2/pic_4.jpg'
import pic_10 from './assets/PicSet_2/pic_5.jpg'
import pic_11 from './assets/PicSet_3/pic_1.jpg'
import pic_12 from './assets/PicSet_3/pic_2.jpg'
import pic_13 from './assets/PicSet_3/pic_3.jpg'
import pic_14 from './assets/PicSet_3/pic_4.jpg'
import pic_15 from './assets/PicSet_3/pic_5.jpg'

function RoomDetail() {
    const [liked, setLiked] = useState(false)
    const { roomId } = useParams()

    const roomsData = {
        "1": {
            mainImg: pic_1,
            hostImg: lars,
            hostName: "Cason Castalino",
            gallery: [pic_1, pic_2, pic_3, pic_4, pic_5],
            extraPhotosCount: 5,
            title: "Modern Luxury Villa with Pool",
            address: "742 Evergreen Terrace, Springfield, USA",
            bedCount: 4, bathCount: 3, carCount: 2, petCount: 1,
            description: "Private swimming pool in a peaceful neighborhood. Ideal for family vacations with full amenities and spacious living areas.",
            minPrice: 3500, maxPrice: 7000,
            shortPrice: 3500, mediumPrice: 5500, longPrice: 7000,
            totalAmenities: 15,
            amenities: null,
            safety: null,
        },
        "2": {
    mainImg: pic_8,
    hostImg: lars,
    hostName: "Sarah Jenkins",
    gallery: [pic_6, pic_7, pic_8, pic_9, pic_10],
    extraPhotosCount: 0,
    title: "Cozy Studio near Metro",
    address: "123 Sukhumvit Road, Bangkok, Thailand",
    bedCount: 1, bathCount: 1, carCount: 0, petCount: 0,
    description: "A cozy studio apartment located right next to the skytrain station. Features fitness center and communal pool access.",
    minPrice: 800, maxPrice: 1500,
    shortPrice: 800, mediumPrice: 1200, longPrice: 1500,
    totalAmenities: 8,
  },
  "3": {
    mainImg: pic_14,
    hostImg: lars,
    hostName: "Kenji Sato",
    gallery: [pic_11, pic_12, pic_13, pic_14, pic_15],
    extraPhotosCount: 8,
    title: "Traditional Muji Style House",
    address: "45-2 Sakura Lane, Kyoto, Japan",
    bedCount: 2, bathCount: 1, carCount: 1, petCount: 0,
    description: "Minimalist Japanese-style home built with natural wood. Warm, relaxing atmosphere featuring a private Zen rock garden.",
    minPrice: 2200, maxPrice: 4000,
    shortPrice: 2200, mediumPrice: 3200, longPrice: 4000,
    totalAmenities: 12,
  },
  "4": {
    mainImg: pic_3_4,
    hostImg: lars,
    hostName: "Elena Rostova",
    gallery: [pic_3_1, pic_3_2, pic_3_3, pic_3_4, pic_3_5],
    extraPhotosCount: 1,
    title: "Penthouse with Ocean View",
    address: "88 Beachfront Blvd, Miami, USA",
    bedCount: 3, bathCount: 3, carCount: 2, petCount: 2,
    description: "Luxurious penthouse offering 180-degree panoramic ocean views. Modern interior highlighted by a balcony jacuzzi.",
    minPrice: 5000, maxPrice: 12000,
    shortPrice: 5000, mediumPrice: 8500, longPrice: 12000,
    totalAmenities: 20,
  },
  "5": {
    mainImg: pic_4_3,
    hostImg: lars,
    hostName: "Somchai Jaidee",
    gallery: [pic_4_1, pic_4_2, pic_4_3, pic_4_4, pic_4_5],
    extraPhotosCount: 3,
    title: "Mountain Cabin in Chiang Mai",
    address: "99 Moo 4, Mae Rim, Chiang Mai, Thailand",
    bedCount: 2, bathCount: 2, carCount: 2, petCount: 1,
    description: "Rustic wooden cabin nestled in the mountain forest. Cool weather year-round, perfect for escaping city noise and enjoying fresh air.",
    minPrice: 1500, maxPrice: 3000,
    shortPrice: 1500, mediumPrice: 2200, longPrice: 3000,
    totalAmenities: 9,
  },
  "6": {
    mainImg: pic_5_2,
    hostImg: lars,  
    hostName: "Michael Brown",
    gallery: [pic_5_1, pic_5_2, pic_5_3, pic_5_4, pic_5_5],
    extraPhotosCount: 4,
    title: "Industrial Loft in City Center",
    address: "500 Broadway St, New York, USA",
    bedCount: 1, bathCount: 2, carCount: 1, petCount: 0,
    description: "Spacious industrial loft with high ceilings and open layout. Located in downtown with easy walking access to shopping and dining.",
    minPrice: 2800, maxPrice: 6000,
    shortPrice: 2800, mediumPrice: 4500, longPrice: 6000,
    totalAmenities: 11,
  }
    };

    const room = roomsData[roomId]
    if (!room) return <div className="pt-24 text-center">Room not found.</div>

    const amenities = room.amenities || [
        { icon: "ri-scissors-2-line", label: "Kitchen" },
        { icon: "ri-snowy-line", label: "Air Conditioner" },
        { icon: "ri-t-shirt-line", label: "Washer" },
        { icon: "ri-tv-2-line", label: "Television with Netflix" },
        { icon: "ri-wifi-line", label: "Free Wireless Internet" },
        { icon: "ri-door-lock-line", label: "Balcony or Patio" },
    ]

    const safety = room.safety || [
        { icon: "ri-brush-line", label: "Daily Cleaning" },
        { icon: "ri-shield-check-line", label: "Fire Extinguishers" },
        { icon: "ri-water-flash-line", label: "Disinfections and Sterilizations" },
        { icon: "ri-alarm-warning-line", label: "Smoke Detectors" },
    ]

    const stats = [
        { icon: "ri-hotel-bed-line", value: room.bedCount, label: room.bedCount === 1 ? "Bedroom" : "Bedrooms" },
        { icon: "ri-drop-fill", value: room.bathCount, label: room.bathCount === 1 ? "Bathroom" : "Bathrooms" },
        { icon: "ri-car-line", value: room.carCount, label: "Cars/Bikes" },
        { icon: "ri-footprint-line", value: room.petCount, label: "Pets Allowed" },
    ]

    return (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
            
            {/* Image gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 h-auto sm:h-96">
                <div className="relative sm:col-span-2 h-64 sm:h-full rounded-2xl overflow-hidden bg-gray-200">
                    {room.mainImg && (
                        <img className="absolute size-full object-cover object-center" src={room.mainImg} />
                    )}
                    
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-xl px-3 py-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-gray-400">
                            {room.hostImg && (
                                <img className="absolute size-full object-cover object-center" src={room.hostImg} />
                            )}
                        </div>
                        <div>
                            <p className="montserrat-bold text-white text-sm">{room.hostName}</p>
                            <p className="montserrat-cason text-white text-xs opacity-80">
                                For: ${room.minPrice} - ${room.maxPrice}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 h-64 sm:h-full">
                    {(room.gallery || []).slice(0, 4).map((img, i) => (
                        <div key={i} className="relative rounded-xl overflow-hidden bg-gray-200">
                            <img className="absolute size-full object-cover object-center" src={img} />

                        </div>
                    ))}
                </div>
            </div>

            {/* Title + actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-3">
                <div>
                    <h1 className="montserrat-bold text-2xl sm:text-3xl text-[#484848]">{room.title}</h1>
                    <p className="montserrat-cason text-sm sm:text-base text-gray-500 mt-1">{room.address}</p>
                </div>
                <div className="flex gap-3 text-xl text-[#484848]">
                    <button onClick={() => setLiked(!liked)}>
                        <i className={liked ? "ri-heart-fill text-red-500" : "ri-heart-line"}></i>
                    </button>
                    <button>
                        <i className="ri-share-line"></i>
                    </button>
                </div>
            </div>

            {/* Main content + sidebar */}
            <div className="flex flex-col lg:flex-row gap-8 mt-6">
                
                <div className="flex-1">
                    {/* Stats row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {stats.map((stat, i) => (
                            <div key={i} className="bg-gray-100 rounded-xl flex flex-col items-center justify-center py-4 gap-1">
                                <i className={`${stat.icon} text-xl text-[#484848]`}></i>
                                <span className="montserrat-bold text-sm text-[#484848]">{stat.value} {stat.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Description */}
                    <div className="mt-8">
                        <h2 className="montserrat-bold text-lg sm:text-xl text-[#484848] mb-3">Apartment Description</h2>
                        <p className="montserrat-cason text-sm text-gray-500 leading-relaxed">
                            {room.description}
                        </p>
                    </div>

                    {/* Amenities */}
                    <div className="mt-8">
                        <h2 className="montserrat-bold text-lg sm:text-xl text-[#484848] mb-4">Offered Amenities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                            {amenities.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-600">
                                    <i className={`${item.icon} text-lg text-[#484848]`}></i>
                                    <span className="montserrat-cason text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                        <button className="mt-5 border border-gray-300 rounded-xl px-5 py-2 montserrat-bold text-sm text-[#484848] hover:bg-gray-100 transition-colors duration-200">
                            Show All {room.totalAmenities || amenities.length} Amenities
                        </button>
                    </div>

                    {/* Safety */}
                    <div className="mt-8">
                        <h2 className="montserrat-bold text-lg sm:text-xl text-[#484848] mb-4">Safety and Hygiene</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                            {safety.map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-600">
                                    <i className={`${item.icon} text-lg text-[#484848]`}></i>
                                    <span className="montserrat-cason text-sm">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-80 shrink-0">
                    <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-lg p-5">
                        <p className="montserrat-bold text-xl text-[#484848]">
                            ${room.minPrice} - ${room.maxPrice}
                        </p>
                        <div className="mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2 text-sm text-gray-500 montserrat-cason">
                            <div className="flex justify-between">
                                <span>Short Period:</span>
                                <span>${room.shortPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Medium Period:</span>
                                <span>${room.mediumPrice}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Long Period:</span>
                                <span>${room.longPrice}</span>
                            </div>
                        </div>

                        <button 
                            onClick={() => alert(`Booking request sent for "${room.title}"! We'll get back to you shortly.`)}
                            className="w-full mt-5 py-3 rounded-full border-2 border-[#75146A] montserrat-bold text-[#75146A] hover:bg-[#75146A] hover:text-white transition-colors duration-200"
                        >
                            Book Now
                        </button>

                        <div className="flex justify-between mt-4 text-xs text-gray-500 montserrat-cason">
                            <button className="flex items-center gap-1.5 hover:text-[#484848]">
                                <i className="ri-file-list-3-line"></i>
                                Property Inquiry
                            </button>
                            <button className="flex items-center gap-1.5 hover:text-[#484848]">
                                <i className="ri-phone-line"></i>
                                Contact Host
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetail