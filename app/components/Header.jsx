import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      >

        <Image src={assets.profile_img} alt='' className='rounded-full w-32'></Image>
        
      </motion.div>

    <motion.h3 
    initial={{y: -20, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay: 0.5}}
    className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hey! I am Yash Padwani <Image src={assets.hand_icon} alt='' className='w-6'></Image></motion.h3>
    <motion.h1
    initial={{y: -30, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8, delay: 0.5}} 
    className='text-3xl sm:text-6xl ld:text-[66px] font=Ovo'>Full-Stack Developer based in Canada.</motion.h1>


    <motion.p 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 0.7}} 
    className='max-w-2xl mx-auto font_Ovo'>
    A Full-Stack Developer skilled in React, Node.js, MongoDB, and AWS, specializing in scalable web and mobile applications. Focused on performance optimization and seamless user experiences, I am passionate about leveraging modern technologies to deliver efficient and innovative solutions.
    </motion.p>


    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}} 
        href="#contacct" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'></Image>
        </motion.a>


        <motion.a
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}  
        href="/Yash_Padwani_Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume <Image src={assets.download_icon} alt='' className='w-4'></Image>
        </motion.a>

    </div>
    </div>
  )
}

export default Header
