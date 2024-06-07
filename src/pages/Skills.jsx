import React from 'react'
import t from "../assets/t.jpg"
import c from "../assets/c.png"
import j from "../assets/j.png"
import b from "../assets/b.jpg"
import r from "../assets/r.png"
import h from "../assets/h.jpg"
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
    initial={{ opacity: 1 ,scale:1.1}}
    animate={{ opacity: 1,scale:1 }}

    transition={{ duration: 3 }}
    className=' p-10 lg:h-screen   bg-black'>
      <div className="text-center">
  <p className="text-5xl font-bold text-orange-500 ">Skills Overview</p>
  <p className="text-[26px] mt-8 text-white">I am expert in these skills. </p>
</div>
  <div className="grid grid-col-1 gap-8 lg:grid-cols-3 place-items-center pt-10 ">
        <div className="w-[200px] h-[200px]"><img src={t} alt="" className="w-full h-full p-4 border-2 border-orange-500 rounded-full overflow-hidden" /></div>
        <div className="w-[200px] h-[200px]"><img src={c} alt="" className="w-full h-full p-4 border-2 border-orange-500 rounded-full overflow-hidden" /></div>
        <div className="w-[200px] h-[200px]"><img src={j} alt="" className="w-full h-full p-4 border-2 border-orange-500 rounded-full overflow-hidden" /></div>
        <div className="w-[200px] h-[200px]"><img src={b} alt="" className="w-full h-full p-4 border-2 border-orange-500 rounded-full overflow-hidden" /></div>
        <div className="w-[200px] h-[200px]"><img src={r} alt="" className="w-full h-full p-4 border-2 border-orange-500 rounded-full overflow-hidden" /></div>
        <div className="w-[200px] h-[200px]"><img src={h} alt="" className="w-full h-full p-4 border-2 border-orange-500 rounded-full overflow-hidden" /></div>
       


  </div>





    </motion.div>
  )
}

export default About