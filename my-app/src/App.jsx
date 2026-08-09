import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Info from './Info.jsx';

import Bush from './decalayer/Bush';
import Test from './decalayer/Test.jsx';
import Menu from  './ui/Menu.jsx';
import FrameExam from './ui/FrameExam.jsx'
import Navbar from './ui/Navbar.jsx'
import Studio from './pages/Studio.jsx'
import A1 from './test/A1'
import React , {useState} from 'react';
import {Route , Routes} from "react-router-dom"
import 'remixicon/fonts/remixicon.css'
import RoomDetail from './RoomDetails.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/StudioComponent/Contact.jsx';
import Member from './Member.jsx'
import Features  from './Features.jsx';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
  
    <Route exact path="/" element={<Bush/>} />
    <Route  path="/studio" element={<Studio/>} />
    <Route  path="/exp" element={<Experience/>} />
    <Route  path="/contact" element={<Contact/>} />
    <Route  path="/member" element={<Member/>} />
    <Route  path="/features" element={<Features/>} />
    <Route path="/room/:roomId" element={<RoomDetail/>} />
    {/* <Menu/>
    <Bush/> */}
    
    </Routes>
    </>

  )
}

export default App