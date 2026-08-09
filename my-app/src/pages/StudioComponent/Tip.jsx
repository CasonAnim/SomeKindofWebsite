
function Tip(props) {
    return (

        <div className="w-3/4 border-black rounded-2xl border-4xl h-auto shadow-lg shadow-black pb-2.5 mt-5.5 mb-5.5">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
                <img className="absolute size-full rounded-2xl object-cover object-center" src={props.img}/>
            </div>
            <div className="h-auto w-full ml-2 pt-2.5">
                <div className="">
                    <div className="montserrat-bold">{props.name}</div>
                    <div className="montserrat-cason">{props.desc}</div>
                </div>
                
            </div>
    </div>
    )   
}

export default Tip