// Bush.jsx
import layer_0 from '../assets/layer_0.png'
import layer_1 from '../assets/layer_1.png'
import layer_2 from '../assets/layer_2.png'
import bg from '../assets/bg.png'
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Menu from '../ui/Menu'
gsap.registerPlugin(useGSAP)

export default function Bush() {
    const zone = useRef(null)
    const strengthLayer0 = 0.19;
    const strengthLayer1 = 0.22;
    const strengthLayer2 = 0.1;
    const strengthBG = 0.05;

    useGSAP(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches
        if (isTouchDevice) return
        window.addEventListener('mousemove', movement)
        return () => {
            window.removeEventListener('mousemove', movement)
        }
    })

    const movement = ((e) => {
        const rect = zone.current.getBoundingClientRect();
        const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX)
        const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY)
        gsap.to(".Ly0", { x: x * strengthLayer0, y: y * strengthLayer0, ease: "Quad.easeOut", duration: 1, overwrite: true })
        gsap.to(".Ly1", { x: x * strengthLayer1, y: y * strengthLayer1, ease: "Quad.easeOut", duration: 0.85, overwrite: true })
        gsap.to(".Ly2", { x: x * strengthLayer2, y: y * strengthLayer2, ease: "Quad.easeOut", duration: 1.85, overwrite: true })
        gsap.to(".bg", { x: x * strengthBG, y: y * strengthBG, ease: "Quad.easeOut", duration: 2.2, overwrite: true })
    })

    const leave = (() => {
        gsap.to(".Ly0, .Ly1, .Ly2, .bg", { x: 0, y: 0, ease: "Quad.easeOut", duration: 1.2, overwrite: true })
    })

    return (
        <div ref={zone} onMouseLeave={leave} className="zone overflow-hidden h-screen w-screen flex justify-center items-center">
            <Menu/>
            <div className="flex z-2 fixed items-center justify-center m-0 h-[115vh] w-[115vw] sm:h-[120vh] sm:w-[120vw] lg:h-[125vh] lg:w-[125vw] Ly2">
                <img className="w-full h-full" src={layer_2}/>
            </div>
            <div className="flex z-10 fixed sm:right-8/12 items-center justify-center m-0 h-[115vh] w-[115vw] sm:h-[120vh] sm:w-[120vw] lg:h-[125vh] lg:w-[125vw] Ly1">
                <img className="w-full h-full" src={layer_1}/>
            </div>
            <div className="flex z-10 fixed sm:left-7/12 items-center justify-center m-0 h-[115vh] w-[115vw] sm:h-[120vh] sm:w-[120vw] lg:h-[125vh] lg:w-[125vw] Ly0">
                <img className="w-full h-full" src={layer_0}/>
            </div>
            <div className="fixed items-center justify-center w-screen bg">
                <img className="w-full h-full" src={bg}/>
            </div>
        </div>
    )
}