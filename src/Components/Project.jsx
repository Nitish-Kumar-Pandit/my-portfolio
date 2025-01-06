import { motion } from 'framer-motion';
import Button from './Button';
import gsap from 'gsap';

function Project({ val, mover, count }) {
  return (
    <>
      <motion.div whileHover={{ backgroundColor: "#282828"}} className="w-full win transition-all duration-200 p-10 h-[13rem] border-b-[1px] border-zinc-700">
        <motion.div
          whileHover={{ transition: { ease: [0.76, 0, 0.24, 1] } }}
          onMouseEnter={() => { mover(count); }}
          className="max-w-screen-xl mx-auto flex items-center justify-between project-container"
        >
          <h1 onMouseEnter={() => {
            gsap.to("#cursor", { scale: 5, duration: 0.3, });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1, duration: 0.3 });
          }} className="capitalize text-3xl">{val.title}</h1>
          <div className="dets w-1/3">
            <p onMouseEnter={() => {
            gsap.to("#cursor", { scale: 3, duration: 0.3 });
          }}
          onMouseLeave={() => {
            gsap.to("#cursor", { scale: 1, duration: 0.3 });
          }} className="mb-10 ">{val.desc}</p>
            <div className="flex demo-links items-center justify-end gap-5 translate-y-5 opacity-0  transition-all duration-300">
              {val.live && val.liveDemoUrl ? (
                <a href={val.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-5" title="Live Demo" />
                </a>
              ) : null}
              {val.case && val.githubUrl ? (
                <a href={val.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-5" title="Visit GitHub" />
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .project-container:hover .demo-links {
          opacity: 1;
          transform: translateX(0);
        }
        
      `}</style>
    </>
  );
}

export default Project;
