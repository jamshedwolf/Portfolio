import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import { motion } from 'framer-motion';


const top =()=>{
window.scroll({top:0,left:0,behavior:"smooth"});

};



function Top() {
  return (
    <motion.div
    animate={{
        y: [-10, 10, -10], // Move up and down in a smooth manner
      }}
      transition={{
        duration: 2, // Total duration for one loop
        ease: 'easeInOut', // Smooth animation
        loop: Infinity, // Repeat indefinitely
      }}
    
    onClick={top} className=' px-2 m-5 py-2 rounded-full bg-orange-500 text-white'>
<FaArrowUp />

    </motion.div>
  )
}

export default Top