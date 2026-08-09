import { Link } from 'react-router-dom'

function RoomCard(props) {
    return (
        <Link to={`/studio/${props.id}`} className="block w-full max-w-sm">
            <div className="w-full max-w-sm border-black rounded-xl sm:rounded-2xl border-2 sm:border-4 h-auto shadow-md sm:shadow-lg shadow-black pb-2 sm:pb-2.5 mt-3 sm:mt-5.5 mb-3 sm:mb-5.5 hover:scale-[1.02] transition-transform duration-200">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
                    <img className="absolute size-full rounded-xl sm:rounded-2xl object-cover object-center" src={props.img} />
                </div>
                <div className="h-auto w-full px-2 sm:px-3 pt-2 sm:pt-2.5">
                    <div>
                        <div className="montserrat-cason text-sm sm:text-base">
                            {props.minPrice}$ - {props.maxPrice}$
                        </div>
                        <div className="montserrat-bold text-base sm:text-lg md:text-xl truncate">
                            {props.name}
                        </div>
                        <div className="montserrat-cason text-sm sm:text-base text-gray-600 truncate">
                            {props.address}
                        </div>
                    </div>
                    <div className="h-auto w-full gap-2 sm:gap-3 mt-1 sm:mt-1.5 flex flex-row flex-wrap items-center">
                        <div className="flex items-center">
                            <i className="ri-hotel-bed-line text-black text-sm sm:text-base"></i>
                            <p className="ml-1.5 sm:ml-2.5 mr-2 sm:mr-2.5 montserrat-bold text-sm sm:text-base">{props.bedCount}</p>
                        </div>
                        <div className="flex items-center">
                            <i className="ri-car-line text-black text-sm sm:text-base"></i>
                            <p className="ml-1.5 sm:ml-2.5 mr-2 sm:mr-2.5 montserrat-bold text-sm sm:text-base">{props.carCount}</p>
                        </div>
                        <div className="flex items-center">
                            <i className="ri-baidu-line text-black text-sm sm:text-base"></i>
                            <p className="ml-1.5 sm:ml-2.5 mr-2 sm:mr-2.5 montserrat-bold text-sm sm:text-base">{props.petCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )   
}

export default RoomCard 