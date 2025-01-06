import { IoMdReturnRight } from "react-icons/io";
import { motion } from "framer-motion";

const Button = ({ title = "Contact me" }) => {
  // Split the title into two halves
  const firstHalf = title.slice(0, Math.floor(title.length / 2));
  const secondHalf = title.slice(Math.floor(title.length / 2));

  return (
    <motion.div
      className="min-w-[130px] px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between cursor-pointer shadow-md transition-all"
      whileHover={{
        scale: 1.05, // Slightly scale the button up
        backgroundColor: "#e5e5e5", // Change background color on hover
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }} // Scale down on click
    >
      {/* Split text animation */}
      <motion.div className="flex items-center">
        <motion.span
          className="text-sm font-medium"
          initial={{ x: 0, rotate: 0, scale: 1 }}
          whileHover={{
            x: -10, // Move left
            rotate: -10,
            scale: 1.1, // Scale up slightly
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.1,
          }}
        >
          {firstHalf}
        </motion.span>

        <motion.span
          className="text-sm font-medium"
          initial={{ x: 0, rotate: 0, scale: 1 }}
          whileHover={{
            x: 10, // Move right
            rotate: 10,
            scale: 1.1, // Scale up slightly
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.15,
          }}
        >
          {secondHalf}
        </motion.span>
      </motion.div>

      {/* Rotating icon */}
      <motion.div
        initial={{ rotate: 0 }}
        whileHover={{ translateX: 20 }} // Rotate the icon on hover
        transition={{ duration: 0.5 }} // Duration of the rotation
      >
        <IoMdReturnRight />
      </motion.div>
    </motion.div>
  );
};

export default Button;
