import '../AboutMe.css';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const AboutMe = () => {
  return (
    <motion.div className=" about-container bg-zinc-900">
      <h1 onMouseEnter={() => {
            gsap.to("#cursor", { scale: 1, backgroundColor: "white", border: "none" });
          }}
          
      className='about-title font-semibold  text-purple-500'>About me</h1>
      <p  onMouseEnter={() => {
            gsap.to("#cursor", { scale: 5, duration: 0.3, backgroundColor: "transparent", border: "none" });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1, duration: 0.3, backgroundColor: "white", mixBlendMode: "difference" });
            }} className="about-content font-medium" >
        My name is <span className='text-green-500'>Nitish Kumar Pandit</span>. I am aspiring <strong>FULL Stack Developer</strong>, committed to making a positive impact in the professional world.
        Driven to create seamless and <span className='text-blue-500'>interactive user experiences</span>,  I am building my skills as a Full-Stack Developer
        while pursuing <span className='text-yellow-500'>B. Tech in Artificial Intelligence and Data Science</span>. I believe in the power of collaboration and I am always learning and looking for opportunities to work with other passionate developers.
      </p>
      <div className="location flex justify-between">#Based in Panchkula, Haryana 
        <Link to="/contact-us">
          <button className="hire-me-button ">Hire me </button>
        </Link>
        </div>
    
    </motion.div>
  );
};

export default AboutMe;
