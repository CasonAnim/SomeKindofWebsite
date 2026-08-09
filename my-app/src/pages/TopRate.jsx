import Card from './TopRatedComp/Card'
import Cason from '../assets/Larp.jpg'
import Fat from '../assets/Fat.png'
import Tai from '../assets/Tai.png'
import ps_1 from "../assets/Person/ps_1.jpg"
import ps_2 from "../assets/Person/ps_2.png"
import ps_3 from "../assets/Person/ps_3.jpg"
import ps_4 from "../assets/Person/ps_4.jpg"

function TopRate() {
    return (
        <>
        <div className="h-auto mt-10 text-[#484848] px-4 sm:px-6">
            <div className='montserrat-bold text-2xl sm:text-3xl'>
                <h1 className='ml-2 sm:ml-6'>Top Rated</h1>
                <h1 className='ml-2 sm:ml-6 mt-1 sm:mt-1.5'>Customers</h1>
            </div>
            <div id='cardSlot' className='h-auto mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2.5 justify-items-center'>
                <Card img={ps_1} rating={3} name={"Larper Anderson"} desc={"Larper Resort"}/> 
                <Card img={ps_2} rating={5} name={"Peter PentorXC"} desc={"2b2t Resort"}/> 
                <Card img={ps_3} rating={3} name={"Rosalia Kirkly"} desc={"Taiyee Resort"}/> 
                <Card img={ps_4} rating={5} name={"Abbraham Abdul"} desc={"ChobKin Jong"}/> 
            </div>
        </div>
        </>
    )
}

export default TopRate