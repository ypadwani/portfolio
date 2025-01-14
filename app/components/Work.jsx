import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = (isDarkMode) => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration:1}}
    
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}
      
      className='text-center mb-2 text-lg font-Ovo'>My Protfolio</motion.h4>

      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}

      className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.3, duration: 0.5}}

      className='text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo'>Welcome to my web development portfolio, showcasing diverse projects demonstrating my expertise in front-end development. Each project demonstrates my ability to create visually appealing and functional user interfaces using the latest technologies and best practices. Explore my work to observe seamless web experiences through responsive design, interactive features, and performance optimization. </motion.p>

<motion.div 
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 0.7, duration: 0.5}}

className='grid grid-cols-4 my-10 gap-5 dark:text-black'>
    {workData.map((project, index)=>(

        <motion.div 
        whileHover={{scale: 1.05}}
        transition={{duration: 0.3}}

        key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
        style={{backgroundImage: `url(${project.bgImage})`} }>

    <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>

        <div>
            <h2 className='font-semibold'>{project.title}</h2>
            <p className='text-sm text-gray-700'>{project.description}</p>
        </div>

        <div className='border rounded-full border-blcak w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
            <Image src={assets.send_icon} alt='send icon' className='w-5'></Image>
        </div>

    </div>

        </motion.div>
    ))}
</motion.div>

<motion.a 
initial={{opacity: 0}}
whileInView={{opacity: 1}}
transition={{delay: 1.1, duration: 0.5}}
href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
            Show More <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right Arrow' className='w-4'></Image>
            </motion.a>
    </motion.div>
  )
}

export default Work
