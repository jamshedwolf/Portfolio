import React from "react";
import "../App.css"
import lite from "../assets/lite.jpg"
import pro from "../assets/pro.jpg"
import mirror from "../assets/mirror.jpg"
import pb from "../assets/pb.jpg"


function Bento() {
  return (
    <div className=" bg-black md:h-screen lg:h-auto lg:mt-0">
      <div className="flex flex-col lg:flex-row h-screen bg-black items-center justify-center gap-5 p-10 ">
        <div className="basis-1/3 ">
          <div className=" md:mt-20 lg:text-7xl text-5xl font-bold text-orange-500 text-center">
            About me
          </div>
          <p className="box p-5 text-white ">Hello! I'm Jamsheed Ali, a passionate and dedicated full-stack developer with a knack for creating dynamic and user-friendly web applications. With a strong foundation in front-end  development, I have a comprehensive understanding of the entire web development process, from initial design concepts to final deployment.</p>

        </div>
        <div className="grid basis-1/2 p-5 bg-white rounded-lg  shadow-lg rounded-[40px] border grid-cols-10 grid-rows-4 gap-4 h-full w-full">
          <div className="row-span-3  col-span-4 overflow-hidden rounded-[40px]  border    col-span-1 shadow-lg">
<img src={pro} alt="" className="w-full h-full inset-0 object-cover" />

          </div>
          <div className="row-span-2 col-span-4 overflow-hidden rounded-[40px] border   col-span- shadow-lg">
          <img src={pb} alt="" className="w-full h-full inset-0 object-cover" />
          </div>
          <div className="row-span-2 col-span-2 overflow-hidden  border rounded-[40px]    col-span- shadow-lg">
          <img src={mirror} alt="" className="w-full h-full    inset-0 object-cover" />
          </div>
          <div className="row-span-2  col-span-6 overflow-hidden   border rounded-[40px]  col-span- shadow-lg">
          <img src={lite} alt="" className="w-full h-full inset-0 object-cover" />
          </div>
          <div className="row-span-1  col-span-4 bg-orange-600  border rounded-[40px]  col-span- shadow-lg"></div>
         
        </div>
      </div>
    </div>
  );
}

export default Bento;
