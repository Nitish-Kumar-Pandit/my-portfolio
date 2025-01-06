import Button from './Button.jsx';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <motion.div className="max-w-screen-lg mx-auto px-1 pt-5 pb-3 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <h3 className="logo font-bold text-xl ">nitish</h3>
        <motion.div className="links flex gap-14 ml-20 ">
          {["Home", "About", "Projects", "", "Resume"].map((elem, index) => {
            const links = {
              "Home": "/",
              "About": "/about",
              "Projects": "/projects",
              "Resume": "/resume.pdf"
            };
            return (
              <Link
                onMouseEnter={() => {
                  gsap.to("#cursor", { backgroundColor: "transparent", border: "0.5px solid", scale: 3, duration: 0.3 });
                }}
                onMouseLeave={() => {
                  gsap.to("#cursor", { scale: 1, duration: 0.3, backgroundColor: "white", border: "none" });
                }}
                key={elem}
                to={links[elem] || "#"}
                className="text-sm flex items-center gap-1.5"
              >
                {elem.length === 0 ? <span className="w-[1px] h-6 rounded-full bg-zinc-700"></span> : null}
                {index === 0 ? <span style={{ boxShadow: "0 0 0.45em #00FF19" }} className="inline-block w-1 h-1 rounded-full bg-green-500"></span> : null}
                {elem}
              </Link>
            );
          })}
        </motion.div>
      </div>
      <Link to="/contact-us">
        <Button />
      </Link>
    </motion.div>
  );
}

export default Navbar;
