function Info(props) {
    return( 
    <div className=" flex justify-center w-full m-3 space-x-1">
        <div className="  rounded-4xl bg-fuchsia-400 p-6 hover:bg-fuchsia-950 text-amber-50">
            <p className="  text-center">Name : {props.name}</p>
            <p className="  text-center">AGE : {props.age}</p>
        </div>
        {/* <div className="  rounded-4xl bg-fuchsia-400 p-6 hover:bg-fuchsia-950 text-amber-50">
            <p className="  text-center">Name : {props.name}</p>
        </div>
        <div className="  rounded-4xl bg-fuchsia-400 p-6 hover:bg-fuchsia-950 text-amber-50">
            <p className="  text-center">Name : {props.name}</p>
        </div> */}
    </div>
    )
}

export default Info