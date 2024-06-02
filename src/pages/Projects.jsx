import React from 'react'
import proj1 from "../assets/proj1.png"
import proj2 from "../assets/proj2.png"
import proj3 from "../assets/proj3.png"
import proj4 from "../assets/proj4.png"
import proj5 from "../assets/proj5.png"
import proj6 from "../assets/proj6.png"
import { motion } from 'framer-motion'
function Projects() {




  return (
    <div
      className="bg-black   pt-10 ">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center">
        <p className="text-5xl font-bold text-orange-500">My Projects</p>
        <p className="text-[26px] mt-8 text-white">Here are some of our recent projects </p>
      </motion.div>




      <div className='grid grid-cols-1 mt-8  lg:grid-cols-3 place-items-center  gap-12 items-center justify-center font-bold text-4xl pt-0 p-10'>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 3 }}


          className="xl:w-[400px] xl:h-[250px] lg:w-[300px] lg:h-[150px]  relative transform group transition-transform hover:scale-105 duration-300">

          <img src={proj1} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out w-full h-full bg-[black]/60 inset-0 opacity-0 group-hover:opacity-90  flex justify-center items-center ">
            <button className="text-gray-700 font-normal text-[26px] px-5 py-1 bg-white rounded-full ">Live</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}

          className="xl:w-[400px] xl:h-[250px] lg:w-[300px] lg:h-[150px] relative transform group transition-transform hover:scale-105 duration-300">

          <img src={proj2} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out w-full h-full bg-[black]/60 inset-0 opacity-0 group-hover:opacity-90  flex justify-center items-center ">
            <button className="text-gray-700 font-normal text-[26px] px-5 py-1 bg-white rounded-full ">Live</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="xl:w-[400px] xl:h-[250px]  lg:w-[300px] lg:h-[150px] relative transform group transition-transform hover:scale-105 duration-300">

          <img src={proj3} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out w-full h-full bg-[black]/60 inset-0 opacity-0 group-hover:opacity-90  flex justify-center items-center ">
            <button className="text-gray-700 font-normal text-[26px] px-5 py-1 bg-white rounded-full ">Live</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}

          className="xl:w-[400px] xl:h-[250px] lg:w-[300px] lg:h-[150px] relative transform group transition-transform hover:scale-105 duration-300">

          <img src={proj4} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out w-full h-full bg-[black]/60 inset-0 opacity-0 group-hover:opacity-90  flex justify-center items-center ">
            <button className="text-gray-700 font-normal text-[26px] px-5 py-1 bg-white rounded-full ">Live</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="xl:w-[400px] xl:h-[250px] lg:w-[300px] lg:h-[150px] relative transform group transition-transform hover:scale-105 duration-300">

          <img src={proj5} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out w-full h-full bg-[black]/60 inset-0 opacity-0 group-hover:opacity-90  flex justify-center items-center ">
            <button className="text-gray-700 font-normal text-[26px] px-5 py-1 bg-white rounded-full ">Live</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" xl:w-[400px] xl:h-[250px] lg:w-[300px] lg:h-[150px] relative transform group transition-transform hover:scale-105 duration-300">

          <img src={proj6} alt="" className="w-full h-full" />
          <div className="absolute top-0 left-0 transition-all duration-300 ease-in-out w-full h-full bg-[black]/60 inset-0 opacity-0 group-hover:opacity-90  flex justify-center items-center ">
            <button className="text-gray-700 font-normal text-[26px] px-5 py-1 bg-white rounded-full ">Live</button>
          </div>
        </motion.div>

      </div>




    </div>

  )
}

export default Projects