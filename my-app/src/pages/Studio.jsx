import Sakura from "./StudioComponent/Hero.jsx"
import Banner from "./StudioComponent/Banner.jsx"
import Toprated from "./TopRate.jsx"
import Sasakure from "../assets/sasakure.jpg"

function Studio() {
    return (
        <>
        <div className="relative w-screen h-screen">
            <Sakura/>   
        </div>
        <div className="mx-15">
            <div className="h-screen">
            <Toprated/>
            <Banner img = {Sasakure} />
            </div >
        </div>

        </>
    )
}


export default Studio