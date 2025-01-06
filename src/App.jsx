/* eslint-disable no-unused-vars */
import AboutMe from "./Components/AboutMe"
import Navbar from "./Components/Navbar"
import Stripes from "./Components/Stripes"
import Work from "./Components/Work"
import Projects from './Components/Projects';
import TechStack from "./Components/TechStack";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './Components/Cursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './ContactUs';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<div className="text-white  w-full h-screen bg-zinc-900 font-['satoshi']">
      <Cursor/>
      <Navbar/>
      <Work/>
      <Stripes/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <Footer/>
    </div>} />
      <Route path="/about" element={<div className="text-white w-full h-full bg-zinc-900 font-['satoshi']">
      <Cursor/>
      <AboutMe/>
    </div>} />
      <Route path="/projects" element={<div className="text-white  w-full h-screen bg-zinc-900 font-['satoshi']">
      <Cursor/>
      <Projects/>
    </div>} />
      <Route path="/contact-us" element={<ContactUs />  } />
      
    </Routes>
    </Router>
  )
}

export default App
