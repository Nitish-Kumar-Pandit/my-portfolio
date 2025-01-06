/* eslint-disable react/jsx-no-comment-textnodes */
import Button from "./Button"
import gsap from "gsap"
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="w-full p-10">
      <div className=" max-w-screen-2xl mx-auto p-10 flex gap-3 border-[1px] border-zinc-600 rounded-lg">
        <div onMouseEnter={() => {
            gsap.to("#cursor", { scale: 7, duration: 0.3 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1, duration: 0.3 });
          }} className="basis-1/2 select-none font-medium text-[10rem]">nitish.</div>
        <div className="basis-1/2 flex gap-4">
            <div className="basis-1/3">
                <h4 className="mb-10 text-green-500">Socials</h4>
                {["Instagram", "Linkedin", "Github", "Twitter (X?)"].map((item, index) => {
                  const links = {
                    Instagram: "https://www.instagram.com/_nitishpandittt/",
                    Linkedin: "https://www.linkedin.com/in/nitishkumarpandittt",
                    Github: "https://github.com/Nitish-Kumar-Pandit",
                    "Twitter (X?)": "https://x.com/_nitishpanditt"
                  };
                  return (
                    <a key={index} href={links[item]} target="_blank" rel="noopener noreferrer" className="block mt-2 text-white">
                      {item}
                    </a>
                  );
                })}
                </div>
            <div className="basis-1/3">
                <h4 className="mb-10 text-pink-500">Explore</h4>
                {["Home", "About", "Projects"].map((item, index) => {
                  const paths = {
                    Home: "/",
                    About: "/about",
                    Projects: "/projects"
                  };
                  return (
                    <Link key={index} to={paths[item]} className="block mt-2 text-white">
                      {item}
                    </Link>
                  );
                })}
                </div>
            <div className="basis-1/3 ">
                <p className="flex text-right text-zinc-400">Thanks for visiting! hope you have enjoyed. I am always open to new projects. You can also connect me through my socials.</p>
                <span className=" flex justify-end">< Link to="/contact-us">< Button/></Link></span>
                </div>
        </div>
      </div>
      <div className="flex justify-between"><div className="text-zinc-400 text-xl ml-10">copyright &copy; 2024</div>
      <div className="text-zinc-400 text-xl mr-10">//Based in Panchkula, Haryana</div></div>
    </div>
  )
}

export default Footer
