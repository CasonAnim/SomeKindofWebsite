import { useRef } from 'react';
import gsap, { Elastic } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function Test() {
    const zone = useRef(null)
    const strength = 0.15;
    const { contextSafe } = useGSAP({scope:zone})
    

    const handleMousemove = contextSafe((e) => {
        const rect = zone.current.getBoundingClientRect();
        const x = gsap.utils.mapRange(rect.left, rect.right,-rect.width / 2, rect.width / 2, e.clientX);
        const y = gsap.utils.mapRange(rect.top, rect.bottom,-rect.height / 2, rect.height / 2, e.clientY);
        
        gsap.to(".test", {
            x: x * strength
            ,y: y * strength,
            duration : 1,
            ease : "power4.out",
            // overwrite : true
        })

            console.log(`X : ${e.clientX}`)
            console.log(`Y : ${e.clientY}`)
    })
    
    const Leave = contextSafe(() => {
        gsap.to(".test", {
            x: 0,
            y: 0,
            duration :0.7,
            ease: 'sine.out'
        })
    })
    
    

    return(
    <div className='flex justify-center items-center h-screen w-screen'>
            <div onMouseMove={handleMousemove} onMouseLeave={Leave} ref={zone} className=' border-zinc-950 border-2  zone flex justify-center w-1/2 h-1/2 items-center'>
                <div className=''>
                    <p className='test p-4 rounded-3xl text-amber-50 bg-amber-800'>HEllo</p>
                    
                </div>
            </div>
    </div>
    )
}