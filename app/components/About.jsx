import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = ({isDarkMode}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-fulll flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-100 sm:w-80 rounded-3x1 max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'></Image>
        </div>
        <div className='flex-1'>
        <p className='mb-10 max-10-2x1 font-Ovo'>As an individual with a strong passion for transforming concepts into tangible, practical applications that have a tangible impact, I am dedicated to problem-solving and creating seamless and enjoyable user experiences. With an unwavering commitment to continuous learning and professional development, I thrive on challenging myself to overcome obstacles that foster my growth as a developer. My ultimate objective is to construct solutions that are not only efficient but also intuitive and user-friendly. Whether through ongoing education or engaging in exciting projects, I am constantly seeking opportunities to enhance my skills and contribute positively to society.</p>

        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2x1'>
            {infoList.map(({icon, iconDark, title, description}, index)=>(
                <li className='border-[0.5px] border-gray-400 rounded-x1 p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'></Image>
                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </li>
            ))}
        </ul>

        <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</h4>

        <ul className='flex items-center gp-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
                <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'></Image>
                </li>
            ))}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About
