    import Sukura from "../../assets/sakura.png"
    import Magnify from "../../assets/magnifying-glass.svg?react"
    import gsap from "gsap"
    import { useGSAP } from "@gsap/react"
    import { Link } from 'react-router-dom'
    

    function Hero() {

        const handleMouseEnter = ((e) => {
            gsap.to( e.currentTarget, {
                scale : 1.1,
                ease : "sine.inOut",
                duration : 0.2
            })
        })
        const handleMouseLeave = ((e) => {
            gsap.to(e.currentTarget , {
                scale : 1,
                ease : "sine.inOut",
                duration : 0.2
            })
        })

        return (
                <>
                <img className=" absolute  w-full h-full object-cover opacity-75 -z-10" src={Sukura} />
                <div className="z-20 absolute w-full h-full flex items-end justify-center">
                                    
                    <div className="h-1/2 w-8/12">
                        <div className=" rounded-[65px] w-full h-1/3 bg-white " >
                            <div className="mx-3.5 h-full w-full flex flex-row items-center">

                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" mr-3 pr-6  pl-6.5  border-r-2 border-r-black/50 montserrat-cason">
                                    <div className="text-[#F76363]">
                                        Price
                                    </div>
                                    <p className=" opacity-50">
                                        Which price do you prefer?
                                    </p>
                                </div>
                                
                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" mr-3 pr-6  pl-2.5  border-r-2 border-r-black/50 montserrat-cason">
                                    <div className="text-[#F76363]">
                                        Check In
                                    </div>
                                    <p className=" opacity-50">
                                        Add Dates
                                    </p>
                                </div>
                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" mr-6 pr-16  pl-2.5  border-r-2 border-r-black/50 montserrat-cason">
                                    <div className="text-[#F76363]">
                                        Check Out
                                    </div>
                                    <p className=" opacity-50">
                                        Add Dates
                                    </p>
                                </div>
                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" mr-6 pr-16  pl-2.5  border-r-2 border-r-black/50 montserrat-cason">
                                    <div className="text-[#F76363]">
                                        Guest
                                    </div>
                                    <p className=" opacity-50">
                                        Add Guests
                                    </p>
                                </div>
                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=" justify-center items-center ml-2.5  h-8/12 aspect-square rounded-[100%] bg-[#F76363] flex">
                                    <Magnify  className="w-1/2 h-1/2 text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
       
                    {/* <img className="w-full h-full opacity-75" src={Sukura}></img> */}
                </>
        )
    }

    export default Hero