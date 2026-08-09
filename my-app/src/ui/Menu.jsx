// Menu.jsx
import btn from "../assets/bu.svg"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Link } from 'react-router-dom'

function Menu() {
    const zone = useRef(null)
    const something = ((e) => {
        gsap.to(".button", { scale: 1.1, ease: "circ.out" })
    })
    const leave = ((e) => {
        gsap.to(".button", { scale: 1, ease: "circ.out" })
    })
    return (
        <>
            <div className="fixed z-50 flex h-full w-full px-4 sm:px-0">
                <div className="w-full sm:w-4/12 h-10/12 self-end">
                    <div className="text-center sm:text-end h-3/4">
                        <div>
                            <p className="viaoda-libre-regular text-white text-3xl sm:text-5xl lg:text-7xl leading-tight">
                                STEP {`>`} INTO
                            </p>
                        </div>
                        <div>
                            <p className="viaoda-libre-regular text-white text-4xl sm:text-6xl lg:text-8xl leading-tight">
                                WONDER
                            </p>
                        </div>
                        <div>
                            <p className="imprima-regular text-white text-sm sm:text-lg mt-2">
                                Walk into the deep resting view of forest
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed z-50 flex h-screen w-screen">
                <div ref={zone} className="mx-auto self-end h-3/12 w-32 sm:w-auto">
                    <Link to="./studio">
                        <img onMouseEnter={something} onMouseOut={leave} className="button w-full" src={btn} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Menu