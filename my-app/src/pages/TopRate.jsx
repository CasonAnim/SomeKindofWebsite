import Card from './TopRatedComp/Card'
import Cason from '../assets/Larp.jpg'
import Bas from '../assets/Bas.png'
import Fat from '../assets/Fat.png'
import Tai from '../assets/Tai.png'

function TopRate() {
    return (
        <>
        <div className="h-full mt-10  text-[#484848] ">
            <div className='montserrat-bold text-3xl'>
                <h1 className=' ml-6'>Top Rated
                
            </h1>
            <h1 className=' ml-6 mt-1.5'>
                 Customers
            </h1>
            </div>
            <div id='cardSlot' className=' h-9/12 mt-10 flex gap-2.5 justify-center'>
                <Card img={Cason} name={"LLarper NiggerSon"} desc={"Larp Community"}/> 
                <Card img={Fat} name={"Peter PentorXC"} desc={"Larp Community"}/> 
                <Card img={Tai} name={"Rardjipud nunbun"} desc={"Teenoi"}/> 
                <Card img={Bas} name={"P'Bass"} desc={"PIM"}/> 

            </div>
        </div>

        </>
    )
}

export default TopRate