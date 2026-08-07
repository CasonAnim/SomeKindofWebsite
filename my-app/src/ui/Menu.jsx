import btn from "../assets/bu.svg"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


function Menu() {
    const zone = useRef(null)
    const something = ((e)=> {
        gsap.to(".button" , {
            scale : 1.1,
            ease : "circ.out"
        })
    })
    const leave = ((e)=> {
        gsap.to(".button" , {
            scale : 1,
            ease : "circ.out",
            fill : 'white'
        })
    })
    return (
        <>
            <div className="fixed z-50 flex h-screen w-screen">
                    <div className=" w-4/12 h-10/12 self-end">
                        <div className="text-end h-3/4">
                            <div>
                                <p className="viaoda-libre-regular text-white text-7xl "> STEP {`>`} INTO</p>
                            </div>
                            <div>
                                <p className="viaoda-libre-regular text-white text-8xl"> WONDER</p>
                            </div>
                            <div>
                                <p className="imprima-regular text-white text-lg"> Walk into the deep resting view of forest</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="fixed z-50 flex h-screen w-screen">
                    <div ref={zone} className="mx-auto self-end h-3/12 ">
                        <img onMouseEnter={something} onMouseOut={leave} className="button" src={btn} ></img>
                    </div>
            </div>

            
       
        </>

    )
}

export default Menu