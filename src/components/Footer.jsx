import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Top from './Top';

function Footer() {
  return (
    <motion.div
    initial={{ opacity: 1 ,scale:1.2}}
    animate={{ opacity: 1,scale:1 }}

    transition={{ duration: 3 }}
    
    
    className='p-10 relative  bg-gray-900'>
      <div className="flex flex-col  gap-8 items-center  justify-center">
        <div className="flex gap-2 items-center  justify-center">
          <div className="h-[40px] w-[40px] group flex items-center justify-center hover:border hover:border-white rounded-full bg-white hover:bg-black text-center">

            <FaDiscord size={30} className='text-black group-hover:text-white' />

          </div>
          <div className="h-[40px] w-[40px] group flex items-center justify-center hover:border hover:border-white rounded-full bg-white hover:bg-black text-center">

            <RiInstagramFill size={30} className='text-black group-hover:text-white' />

          </div>
          <div className="h-[40px] w-[40px] group flex items-center justify-center hover:border hover:border-white rounded-full bg-white hover:bg-black text-center">

            <TbBrandFiverr size={30} className='text-black group-hover:text-white' />

          </div>
          <div className="h-[40px] w-[40px] group flex items-center justify-center hover:border hover:border-white rounded-full bg-white hover:bg-black text-center">

            <RiFacebookFill size={30} className='text-black group-hover:text-white' />

          </div>
          <div className="h-[40px] w-[40px] group flex items-center justify-center hover:border hover:border-white rounded-full bg-white hover:bg-black text-center">

            <FaTelegram size={30} className='text-black group-hover:text-white' />

          </div>
          


        </div>

        <div className=" text-white flex gap-8 items-center justify-between text-[18px]">
              <Link to="/">Home</Link>
              <Link to="/Skills">Skills</Link>

              <Link to="/projects">Projects</Link>
              <Link to="/Reviews">Reviews</Link>


            </div>
<div className=" mt-8 text-white flex  items-center justify-between text-[18px]">Copyright © [2024] [jamsheed Ali]. All rights reserved.</div>

      </div>
<div className="absolute right-2 top-2">
  <Top  />
</div>

    </motion.div>
  )
}

export default Footer