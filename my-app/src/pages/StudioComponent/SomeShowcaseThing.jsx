import Card from "../TopRatedComp/Card"
import Larp from "../../assets/Larp.jpg"
import RoomCard from "./RoomCard"

import p1 from '../../assets/PicSet_1/pic_1.jpg'
import p2 from '../../assets/picSet_2/pic_2.jpg'
import p3 from '../../assets/PicSet_3/pic_3.jpg'
import p4 from '../../assets/PicSet_4/pic_4.jpg'
import p5 from '../../assets/PicSet_5/pic_5.jpg'
import p6 from '../../assets/PicSet_6/pic_5.jpg'


function SomeShowcaseThing() {
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

        <div className="grid grid-cols-3 h-auto w-full mt-10 justify-items-center gap-3.5">
           <RoomCard img={p1} name={"Modern Luxury Villa with Pool"} address={"742 Evergreen Terrace, Springfield, USA"}
            carCount={2} bedCount={2} petCount={1}
            minPrice={3500} maxPrice={7000} id={1}
           />
           <RoomCard img={p2} name={"Cozy Studio near Metro"} address={"123 Sukhumvit Road, Bangkok, Thailand"}
            carCount={0} bedCount={1} petCount={0}
            minPrice={800} maxPrice={1500} id={2}
           />
           <RoomCard img={p3} name={"Traditional Muji Style House"} address={"45-2 Sakura Lane, Kyoto, Japan"}
            carCount={1} bedCount={2} petCount={0}
            minPrice={2200} maxPrice={4000} id={3}
           />
           <RoomCard img={p4} name={"Penthouse with Ocean View"} address={"88 Beachfront Blvd, Miami, USA"}
            carCount={2} bedCount={3} petCount={2}
            minPrice={5000} maxPrice={12000} id={4}
           />
           <RoomCard img={p5} name={"Mountain Cabin in Chiang Mai"} address={"99 Moo 4, Mae Rim, Chiang Mai, Thailand"}
            carCount={2} bedCount={2} petCount={1}
            minPrice={1500} maxPrice={3000} id={5}
           />
           <RoomCard img={p6} name={"Industrial Loft in City Center"} address={"500 Broadway St, New York, USA"}
            carCount={1} bedCount={1} petCount={0}
            minPrice={2800} maxPrice={6000} id={6}
           />
           
        </div>
        </>

    ) 
}

export default SomeShowcaseThing