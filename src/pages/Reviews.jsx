import React from 'react';
import Slider from "react-slick";
import pic from "../assets/next.jpg"
import p2 from "../assets/2.jpg"
import p1 from "../assets/p1.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import p5 from "../assets/p5.jpg"
import p6 from "../assets/p6.jpg"
import p7 from "../assets/p7.jpg"


function Reviews() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: null, // hide previous arrow
    nextArrow: null, // hide next arrow
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>




      <div className=" text-center py-5 lg:h-screen lg:p-20 bg-black overflow-x-hidden">
      <div className=" text-5xl text-orange-500 font-bold text-center ">Testamonials</div>
        <Slider {...settings} className='flex space-y-8'>



         
          <div className='border p-10 md:mt-10 max-w-[350px]  bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex  gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p7} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Jhon</p>
                <p className="">Fiver</p>
              </div>
            </div>
            <div className="p-4 border-l rounded-full border-orange-500 border-r ">
              Jamsheed Ali is a coding maestro, effortlessly unraveling complex problems with finesse and efficiency. His solutions are as elegant as they are effective, making collaboration a seamless joy.
            </div>

          </div>
          <div className='border p-10 md:mt-10 max-w-[350px] bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p2} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Emily</p>
                <p className="">Up work</p>
              </div>
            </div>
            <div className="p-4 border-l rounded-full border-orange-500 border-r ">
            With Jamsheed Ali, innovation is a given. His approach to development is refreshingly creative, consistently pushing boundaries and delivering solutions that exceed expectations.


            </div>

          </div>
          <div className='border p-10 md:mt-10 max-w-[350px]  bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p1} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Jhon</p>
                <p className="">Fiver</p>
              </div>
            </div>
            <div className="p-4 border-l rounded-full border-orange-500 border-r ">
              Jamsheed Ali is a coding maestro, effortlessly unraveling complex problems with finesse and efficiency. His solutions are as elegant as they are effective, making collaboration a seamless joy.
            </div>

          </div>
          <div className='border p-10 md:mt-10 max-w-[350px] bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p3} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">David</p>
                <p className="">Fiver</p>
              </div>
            </div>
            <div className="p-4 border-l rounded-full border-orange-500 border-r ">
            Beyond technical prowess, Jamsheed Ali is a natural leader, inspiring and motivating others with ease. With him at the helm, success is not just a goal but an inevitable outcome.
            </div>

          </div>
          <div className='border p-10 md:mt-10 max-w-[350px] bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p4} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Ava</p>
                <p className="">Fiver</p>
              </div>
            </div>
            <div className="p-4 border-l rounded-full border-orange-500 border-r ">
            A versatile developer, Jamsheed Ali seamlessly navigates front-end finesse and back-end brilliance. His adaptability to new technologies makes him an invaluable asset to any team
            </div>

          </div>
          <div className='border p-10 md:mt-10 max-w-[350px]  bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p5} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Evans</p>
                <p className="">Freelancer</p>
              </div>
            </div>
            <div className="p-4  border-l rounded-full border-orange-500 border-r ">
            Jamsheed Ali is a troubleshooting virtuoso, adept at untangling even the most intricate coding conundrums.
            he is also good listener and speaker for and best at understanding  
            </div>

          </div>
          <div className='border p-10 md:mt-10 max-w-[350px] bg-white rounded-[40px] shadow-lg border' >
            <div className=" mx-auto flex gap-4 justify-center  text-center ">
              <div className="h-[100px] w-[100px]  overflow-hidden rounded-full border-2 border-orange-500">
                <img src={p6} alt="" className="w-full h-full" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-semibold text-xl">Michael</p>
                <p className="">Fiver</p>
              </div>
            </div>
            <div className="p-4 border-l rounded-full border-orange-500 border-r ">
            Count on Jamsheed Ali for top-notch expertise in development. His commitment to quality and timely delivery is unwavering, ensuring project success every time.
            </div>

          </div>
          
        </Slider>

      </div>
    </>


  )



}

export default Reviews




