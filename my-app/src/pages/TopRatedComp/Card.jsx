function Card (props) {
    return(
        
        <>
        <div className="relative w-2/8 h-full rounded-4xl overflow-hidden  items-center flex justify-center">
        <img src={props.img} className="absolute size-full object-cover object-center opacity-55"></img>
                <div className=" size-full flex bg-center bg-cover " >
                        <div className="relative w-full h-2/6 self-end">
                            <div className="relative ml-2.5 w-1/4 overflow-hidden aspect-square rounded-[50%]">
                                <img src={props.img} className="absolute size-full object-cover object-center"></img>
                            </div>
                            <div className="ml-4 mt-1.5 montserrat-bold">
                                <div className="montserrat-bold text-2xl">
                                    {props.name}
                                </div>
                                <div className="montserrat-cason text-xl">
                                    {props.desc}
                                </div>

                            </div>
                        </div>
                </div>    
                
            
            
        </div>
        </>
        
    )
}

export default Card