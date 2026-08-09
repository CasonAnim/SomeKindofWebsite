import Tip from "./Tip"
import Larp from "../../assets/Larp.jpg"
import tip_1 from "../../assets/tips/tip_3.png"
import tip_2 from "../../assets/tips/tip_2.jpg"
import tip_3 from "../../assets/tips/tip_1.jpg"
function TipSection() {
    return (
        <>
            <div className="mt-5">
            <div className='montserrat-bold text-3xl'>
                <h1 className=' ml-6'>Resort & Tips
                
            </h1>
            <h1 className=' ml-6 mt-1.5'>
                 For Traveler!
            </h1>
        </div>
        </div>

            <div className="grid grid-cols-3 h-auto w-full mt-10 justify-items-center">
                <Tip img={tip_1} name={"Kind of Resort in Japan TH-Translate"} desc={"Resort"}/>  
                <Tip img={tip_2} name={"Knowlege for travel in Japan"} desc={"Lifestyle"}/>  
                <Tip img={tip_3} name={"10 Experience in Japan travels"} desc={"Experience"}/>  
            </div>
        </>
    )
}


export default TipSection