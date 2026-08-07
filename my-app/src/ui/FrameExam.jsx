function FrameExam(props) {
    return (
        <>
            <div className=" w-100   h-100 rounded-2xl">
                <div className="fixed bg-white w-1/6 h-1/4 rounded-3xl"></div>
                <img className="w-full h-full" src={props.pic}></img>         
            </div>
            
        </>
    )
}

export default FrameExam