
import { motion } from 'framer-motion';
function TechStack() {

  return (
    
    <div className="max-w-screen-xl mx-auto py-10">
        <h1 className="text-center font-semibold text-pink-500 text-5xl mb-7">My Tech Stack</h1>
        <p className="text-3xl text-center mb-10">I bring expertise across a diverse array of <span className="text-green-500">technologies</span>, allowing me to deliver <span className="text-yellow-500">innovative</span> and <span className="text-blue-500">high-quality</span> solutions tailored for multiple platforms.
</p>
        <div className="flex marquee  mb-10 gap-10 items-center overflow-hidden">
          <motion.div initial={{x: 0}} animate={{x:"-102%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className="flex flex-shrink-0 gap-10 ">
       <img className="w-16" src="https://www.thegr8binil.me/mongodb.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/express.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/react.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/node.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/app.svg" alt="" />
       <img className="w-16 rounded-full "  src="https://p92.com/binaries/content/gallery/p92website/technologies/firebase-overview.png" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/sql.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/psql.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/nextjs.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/html.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/css.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/tailwind.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/git.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/aws.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/shadcn.svg" alt="" />
       <img className="w-16 rounded-lg " src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/python.svg" alt="" />
       <img className="w-16 rounded-lg " src="https://www.thegr8binil.me/javascript.svg" alt="" />
       
          </motion.div>
          <motion.div initial={{x: 0}} animate={{x:"-102%"}} transition={{ease: "linear", duration: 10, repeat: Infinity}} className="flex flex-shrink-0 gap-10 ">
       <img className="w-16" src="https://www.thegr8binil.me/mongodb.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/express.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/react.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/node.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/app.svg" alt="" />
       <img className="w-16 rounded-full "  src="https://p92.com/binaries/content/gallery/p92website/technologies/firebase-overview.png" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/sql.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/psql.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/nextjs.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/html.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/css.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/tailwind.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/git.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/aws.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/shadcn.svg" alt="" />
       <img className="w-16 rounded-lg " src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="" />
       <img className="w-16" src="https://www.thegr8binil.me/python.svg" alt="" />
       <img className="w-16 rounded-lg " src="https://www.thegr8binil.me/javascript.svg" alt="" />
          </motion.div>
         
        </div>
    </div>
  )
}

export default TechStack
