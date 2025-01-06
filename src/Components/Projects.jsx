import { motion } from "framer-motion"
import Project from "./Project"
import { useState } from "react";

function Projects() {
    var projects=[
      {title: "Valorant Recreation", desc:"Valorant is my favorite video game. So I decided to recreate at least its website's frontend and this project was so much fun.", live: true, case: true, liveDemoUrl: "https://nitish-kumar-pandit.github.io/Valorant-Recreation", githubUrl: "https://github.com/Nitish-Kumar-Pandit/Valorant-Recreation"},
      {title: "CashTrack", desc:"Built a dynamic web application that enables user to track their finances. AI will summarize and give financial advice based on the transaction history.", live: true, case: true, liveDemoUrl: "https://cash-track-eruj.vercel.app/", githubUrl: "https://github.com/Nitish-Kumar-Pandit/CashTrack"},
      {title: "WaveLink", desc:"A Chat Application for real-time communication that enables users to send messages and connect seamlessly across devices.", live: true, case: true, liveDemoUrl: "https://wave-link-ab5sydwmx-nitish-kumar-pandits-projects.vercel.app/", githubUrl: "https://github.com/Nitish-Kumar-Pandit/WaveLink"},
      {title: "Realtime Device Tracker", desc:"A Real-Time Device Tracker is a system that continuously monitors and displays the live location or status of devices on a map.", live: true, case: true, liveDemoUrl: "https://realtime-tracker-8kyd.onrender.com/", githubUrl: "https://github.com/Nitish-Kumar-Pandit/Realtime-Tracker" },
      {title: "Spotify Clone", desc:"This project replicates the core functionalities of the popular music platform, offering a seamless user experience that includes playing, pausing, and skipping tracks.", live: false, case: true, githubUrl: "https://github.com/Nitish-Kumar-Pandit/Spotify-Clone"},
      {title: "News Application", desc:"A news application that fetches news from newsapi.org and displays them in a user friendly manner with a responsive UI", live: false, case: true, githubUrl: "https://github.com/Nitish-Kumar-Pandit/News-Application"},
      // {title: "DASH", desc:"Built a ride-hailing application to replicate core functionalities of Uber. The app offers seamless booking and ride management experiences for users and drivers.", live: false, case: true, githubUrl: "https://github.com/Nitish-Kumar-Pandit/Dash"},
]

  const [pos, setPos] = useState(13);

  const mover = (val) => {
    setPos(val*13)
  };

  return (
      <>
    <h1 className="text-[2.5rem] font-semibold text-blue-500 pb-5 mx-8 border-b-[1px] mb-0 border-zinc-700">My Projects</h1>
    <div className="px-[30px] relative">
    {projects.map((val, index)=> <Project mover={mover} key={index} count={index} val={val} liveDemoUrl={val.liveDemoUrl} githubUrl={val.githubUrl}/>)}
    <div className="absolute top-0 w-[96vw] h-full pointer-events-none ">
      <motion.div 
      initial={{y: pos}} 
      animate={{y: pos+`rem`}}
      transition={{ease: [0.76, 0, 0.24, 1], duration: .5}}
      className="window absolute w-[22rem] h-[13rem] bg-white left-1/3 overflow-hidden ">
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-100  "> <video muted autoPlay loop className="w-full h-full object-cover" src="/valorant.mp4"></video> </motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-200  "> <video muted autoPlay loop className="w-full h-full object-cover" src="/cashtrack.mp4"></video> </motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-300  "> <video muted autoPlay loop className="w-full h-full object-cover" src="/wavelink.mp4"></video> </motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-400  "> <video muted autoPlay loop className="w-full h-full object-cover" src="/realtime.mp4"></video> </motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-500  "> <video muted autoPlay loop className="w-full h-full object-cover" src="/spotify.mp4"></video> </motion.div>
        <motion.div animate={{y: -pos+`rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className="w-full h-full bg-sky-500  "> <video muted autoPlay loop className="w-full h-full object-cover" src="/news.mp4"></video> </motion.div>
      </motion.div>

    </div>
    </div> 
    </>
  )
}

export default Projects
