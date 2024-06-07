import React from 'react'
import Nav from '../components/Nav'
import About from './Skills'
import Projects from './Projects'
import Reviews from './Reviews'
import pic from "../assets/next.jpg"
import "../App.css"
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { motion } from 'framer-motion';
import Bento from './Bento'

import { TypeAnimation } from 'react-type-animation';

function Home() {

  return (
    <><div className="bg-black  w-[100vw] overflow-x-hidden">

      <Nav />

      <motion.div 
      initial={{ opacity: 0,scale:1.2 }}
      animate={{ opacity: 1 ,scale:1}}
      transition={{ duration: 2 }}
      className='p-10 md:h-[100vh] grid bg-black grid-cols-1 lg:grid-cols-2 place-items-center  gap-8'>
        <div className="">
          <div className="w-80 h-80  lg:w-[500px] lg:h-[500px] overflow-hidden rounded-full">
            <img src={pic} alt="" className="h-full pic w-full" />
          </div>
        </div>
        <div className="text-white flex flex-col gap-4">
          <p className="text-[48px] lg:text-7xl  font-bold">I,m </p>
          <p className="text-[26px] text-orange-500 lg:text-5xl font-bold">   <TypeAnimation
            sequence={[
              'Frontend Dev', // Types 'One'
              1000, // Waits 1s
              'Consultant', // Deletes 'One' and types 'Two'
              1000, // Waits 2s
              'Coder', // Types 'Three' without deleting 'Two'
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper="span" 
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2em', display: 'inline-block' }}
          /> <div>

            </div> </p>
          <p className=" box">My name is jamshed Ali and i have 1 year web development experience.</p>
          <div className="flex gap-2">
            <button className="px-4 text-[12px] md:text-xl py-2 mt-4 rounded-lg text-white bg-orange-600">Download CV</button>
            <button className="px-4 text-[12px] md:text-xl hidden lg:block py-2 mt-4 rounded-lg text-white border border-white bg-black hover:bg-black-400 hover:border-orange-500">Contact us</button>
            <div className="block lg:hidden  ">
              <Link to="./Email" className=''><button className="px-4 text-[12px] md:text-xl  py-2 mt-4 rounded-lg text-white border border-white bg-black hover:bg-black-400 hover:border-orange-500">Email us</button></Link>
            </div>

          </div>
        </div>




      </motion.div>
    </div>
    <Bento/>
      <About />
      
      
      <Projects />
      <Reviews />
      
      <Footer />
      
    </>
  )
}

export default Home