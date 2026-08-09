import Sakura from "./StudioComponent/Hero.jsx"
import Banner from "./StudioComponent/Banner.jsx"
import Toprated from "./TopRate.jsx"
import Sasakure from "../assets/sasakure.jpg"
import SomeShowcaseThing from "./StudioComponent/SomeShowcaseThing.jsx"
import Tip from "./StudioComponent/Tip.jsx"
import TipSection from "./StudioComponent/TipSection.jsx"
import Footer from "../Footer.jsx"

function Studio() {
    return (
        <>
        <div>
        <div className="relative w-screen h-screen">
            
            <Sakura/>   
        </div>
        <div className="mx-15">
            <div className="h-screen">
            <Toprated/>
            <Banner img = {Sasakure} />
            <SomeShowcaseThing/>
            <TipSection/>
            <div className="mt-20"/>
            <Footer/>
            </div >
        </div>
        </div>
        </>
    )
}


export default Studio