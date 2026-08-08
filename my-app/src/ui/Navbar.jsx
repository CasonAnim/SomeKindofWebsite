import { Link } from 'react-router-dom'
import pim from '../assets/PIM_LOGO.svg'


function Navbar() {
    return(
        <>
        <div className=" fixed justify-center flex items-center text-white imprima-regular z-[500] h-1/12 w-full">
            
            <div className=" *:content-center gap-12  flex flex-row  text-2xl">
                <div className='  opacity-50 transition-opacity duration-200 hover:opacity-100'>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div className=' opacity-50 transition-opacity duration-200 hover:opacity-100'>
                    <Link to="./studio">
                        Studio
                    </Link>
                    
                </div>
                <div className=' opacity-50 transition-opacity duration-200 hover:opacity-100'>
                    <a href="#">
                        Experiences
                    </a>
                    
                </div>
                <div className=" flex items-center justify-center">
                    <img src={pim} className='w-2/12' ></img>
                </div>

                <div className=' opacity-50 transition-opacity duration-200 hover:opacity-100'>
                    <a href="#">
                        Technologies
                    </a>
                    
                </div>
                <div className=' opacity-50 transition-opacity duration-200 hover:opacity-100'>
                    <a href="#">
                        Journal
                    </a>
                    
                </div>
                <div className=' opacity-50 transition-opacity duration-200 hover:opacity-100'>
                    <a href="#">
                        Contact
                    </a>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar