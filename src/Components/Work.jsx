import Lottie from "lottie-react";
import animationData from "../assets/animation.json";
import gsap from "gsap";

const Work = () => {
  return (
    <div className="w-full h-[45vh]">
      <div className="max-w-screen-lg mx-auto ">
        <div>
        <h1
          onMouseEnter={() => {
            gsap.to("#cursor", { scale: 7, duration: 0.3 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1, duration: 0.3 });
          }}
          className="text-[6vw] relative font-medium mt-32 text-center select-none tracking-tight"
        >
          Hello, Nitish this side!!!
        </h1>
          </div>
        <h3 onMouseEnter={() => {
            gsap.to("#cursor", { scale: 3, duration: 0.3 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1, duration: 0.3 });
          }} className="text-center text-[2vw] select-none">
          {" "}
          
          Here to bridge the gap between
        <h3 className="text-center text-[2vw] select-none ml-56">
          <span className="text-blue-500">aesthetics</span> and{" "}
          <span className="text-green-500">functionality </span>{" "}
        </h3>
        </h3>
      </div>
    </div>
  );
};

export default Work;
