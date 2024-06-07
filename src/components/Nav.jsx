import React from 'react'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

function Nav() {
  const [nav, setnav] = useState(false);
function navhandler() {
  setnav(!nav)
  
}

  return (
    <>
    
{/* 
    large screen nav */}
<div className="relative">

      <div className="flex items-center justify-between bg-black text-white lg:mx-20 px-9  h-[10vh]  ">
        <div className="text-[24px]  lg:text-4xl font-bold primary-color text-orange-600">Coder Ali.</div>


        <div className=" gap-6 hidden lg:flex text-[24px]">
          <Link to="/">Home</Link>
          <Link to="/Aboutme">About me</Link>
          <Link to="/Skills">Skills</Link>

          <Link to="/projects">Projects</Link>
          <Link to="/Reviews">Reviews</Link>
          <Link to="/Location">Location</Link>


        </div>
        <div className="">
          <div className="lg:hidden block" >
            { nav  ?  <RxCross2 onClick={navhandler} size={30} />:<IoMenu onClick={navhandler} size={30} />}
          </div>

        <div className="hidden lg:block  ">
          <Link to="./Email" className=''><button className="text-[15px] px-4 py-1 bg-white font-bold text-black rounded-full">Email us</button></Link>
        </div>
        </div>
      </div>
{/* 
      small screen nav */}

<div className={nav? "w-[50vw] h-screen absolute top-0 z-[10] left-0 transition-all duration-300 ease-in bg-[#202121] lg:hidden text-white p-8":"fixed left-[-200px] transition-all duration-500 ease-in-out "}>
<div className="text-[24px]  font-bold block lg:hidden text-orange-600">Coder Ali.</div>


<div className=" gap-6 mt-8 flex flex-col  lg:hidden text-[15px]">
  <Link to="/">Home</Link>
  <Link to="/Aboutme">About me</Link>
  <Link to="/Skills">Skills</Link>

  <Link to="/projects">Projects</Link>
  <Link to="/Reviews">Reviews</Link>
  


</div>
</div>
</div>

    </>
  )
}

export default Nav