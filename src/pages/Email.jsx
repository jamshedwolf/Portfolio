import React from 'react';
import { motion } from 'framer-motion';


const Email = () => {






  return (
    <> <div className="bg-black w-[100vw]">
      <motion.div
         initial={{ opacity: 0 ,scale:2}}
         animate={{ opacity: 1,scale:1 }}

         transition={{ duration: 1 }}
        className="text-5xl mx-10 pt-10  bg-black font-bold text-white ">Feel free to contact us</motion.div>
      <div className=" h-screen bg-black flex max-w-1200px flex-col gap-5 items-center justify-center">

        <motion.form 
        initial={{ opacity: 0 ,scale:1.5}}
        animate={{ opacity: 1,scale:1 }}

        transition={{ duration: 1 }}


         action="https://getform.io/f/panvgqxa" method="POST" className='  flex flex-col gap-8 items-center justify-center'>
          <motion.label 
          initial={{ opacity: 0 ,scale:1.5}}
          animate={{ opacity: 1,scale:1 }}
  
          transition={{ duration: 1 }}
          
          className='text-3xl  text-orange-500 '>Your Name</motion.label>
          <motion.input
           initial={{ opacity: 0 ,scale:1.5}}
          animate={{ opacity: 1,scale:1 }}
  
          transition={{ duration: 1 }}
           type="text" name="user_name " className='lg:w-[600px] w-[300px] border-2 border-orange-500 lg:text-[20px] px-4 h-[60px] rounded-lg' />

          <motion.label
          initial={{ opacity: 0 ,scale:1.5}}
          animate={{ opacity: 1,scale:1 }}
  
          transition={{ duration: 1 }}
          
          className='text-3xl  text-orange-500 '>Message</motion.label>
          <motion.textarea 
          initial={{ opacity: 0 ,scale:1.5}}
          animate={{ opacity: 1,scale:1 }}
  
          transition={{ duration: 1 }}
          
          name="message" className='lg:w-[600px] w-[300px] h-[300px]   lg:h-[300px] text-[20px] border-2 border-orange-500 p-4 rounded-lg' />

          <motion.button  
           initial={{ opacity: 0 ,scale:1.5}}
          animate={{ opacity: 1,scale:1 }}
  
          transition={{ duration: 1 }} 
          
          type='submit' className='bg-orange-500 text-white rounded-lg w-[300px] lg:w-[600px] py-2 text-2xl'>submit</motion.button>
        </motion.form>
      </div>
    </div>
    </>
  );
};

export default Email