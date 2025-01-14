import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}

    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.3, duration: 1}}

      className='text-center mb-2 text-lg font-Ovo'>
      </motion.h4>

      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{delay: 0.5, duration: 0.5}}

      className='text-center text-5xl font-Ovo'>What I have learnt
      </motion.h2>

      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-10 font-Ovo'>
      * Developed and delivered high-quality, scalable, and user-friendly applications.<br />
      * Optimize system performance to ensure seamless user experiences and optimal efficiency.<br />
      * Seamlessly integrate APIs to enhance functionality and connectivity.<br />
      * Test and debug code rigorously to ensure reliability.<br />
      * Manage data efficiently for day-to-day operations and impactful results.<br />
      * Develop a comprehensive skill set that builds robust, efficient, and innovative solutions.
</motion.p>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: 0.9, duration: 0.6}}
      
      className='grid grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div 
            whileHover={{scale: 1.05}}

            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>

                <Image src={icon} alt='' className='w-10'></Image>

                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>

                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image src={assets.right_arrow} alt='' className='w-4'></Image>
                </a>
            </motion.div>
        ))}

      </motion.div>
    </motion.div>
  )
}

export default Services
