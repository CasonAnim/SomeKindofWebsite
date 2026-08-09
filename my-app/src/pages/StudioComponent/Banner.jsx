import SomeShowcaseThing from "./SomeShowcaseThing"

function Banner(props) {
    return(
        <>
        <div className="min-h-[80vh] sm:h-3/4 mt-5 mb-5">
            <div className="relative size-full rounded-2xl sm:rounded-4xl overflow-hidden flex">
                <img src={props.img} className="absolute size-full object-cover object-center opacity-55" />

                <div className="relative size-full">
                    <div className="size-full flex flex-col sm:flex-row px-4 sm:px-0 py-8 sm:py-0 gap-8 sm:gap-0">
                        
                        <div className="w-full sm:w-3/12 flex sm:block items-end justify-center pt-8 sm:pt-12 lg:pt-16 pl-4 sm:pl-8 lg:pl-12">
                            <div className="w-full text-center sm:text-left">
                                <div className="montserrat-bold text-3xl xs:text-3xl sm:text-xl lg:text-3xl leading-tight">
                                    Try Resting<br/>
                                    With Us
                                </div>
                                <div className="montserrat-cason mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-[#454545]">
                                    Worth the time... !
                                </div>
                                <div className="w-full montserrat-bold flex justify-center sm:justify-start mt-4 sm:mt-6 lg:mt-10">
                                    <a href="" className="p-3 sm:p-4 lg:p-5 text-sm sm:text-base bg-[#75146A] text-white rounded-2xl sm:rounded-4xl">
                                        Book now 10% off
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="hidden sm:flex w-3/12"></div>

                        <div className="montserrat-bold text-[#DD4FD8] w-full sm:w-1/2 flex items-center justify-center sm:justify-start">
                            <div className="w-full text-center sm:text-left text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none">
                                SAKURA <br/> SEASON 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner