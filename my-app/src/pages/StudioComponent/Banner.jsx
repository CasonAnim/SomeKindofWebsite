function Banner(props) {
    return(

        <>
    <div className=" h-3/4 mt-5">
        <div className=" relative size-full rounded-4xl overflow-hidden flex">
            <img src={props.img} className="absolute size-full object-cover object-center opacity-55" />
            <div className="relative size-full">
                <div className="size-full flex flex-row">
                    <div className="w-3/12">
                        <div className="size-full grid ">
                            <div className="w-full h-3/4 grid justify-end items-end content-end">
                                <div className="montserrat-bold text-5xl  ">
                                    Try Resting<br/>
                                    With Us
                                </div>
                                <div className="montserrat-cason mt-4.5 text-lg text-[#454545]">
                                    Worth the time... !
                                </div>
                                
                            <div className="w-full montserrat-bold grid justify-end mt-10">
                                <a href="" className="p-5 bg-[#75146A] text-white rounded-4xl"> Book now 10% off</a>
                            </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-3/12 flex">
                    </div>
                    <div className=" montserrat-bold text-[#DD4FD8] w-1/2 text-center items-center text-9xl flex">
                        <div className="h-8/12 w-full">
                            SAKURA <br/> SEASON 
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="mt-15">
            <div className='montserrat-bold text-3xl'>
                <h1 className=' ml-6'>Top Rated
                
            </h1>
            <h1 className=' ml-6 mt-1.5'>
                 Customers
            </h1>
        </div>
        </div>
    </div>
    </>
    )
}

export default Banner