import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3x1 text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>

      <div>

        <Image src={assets.profile_img} alt='' className='rounded-full w-32'></Image>
        
      </div>

    <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hey! I am Yash Padwani <Image src={assets.hand_icon} alt='' className='w-6'></Image></h3>
    <h1 className='text-3xl sm:text-6xl ld:text-[66px] font=Ovo'>Full-Stack Developer based in Canada.</h1>
    <p className='max-w-2xl mx-auto font_Ovo'>
    A Full-Stack Developer skilled in React, Node.js, MongoDB, and AWS, specializing in scalable web and mobile applications. Focused on performance optimization and seamless user experiences, I am passionate about leveraging modern technologies to deliver efficient and innovative solutions.
    </p>
    <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contacct" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4'></Image></a>
        <a href="/Yash_Padwani_Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume <Image src={assets.download_icon} alt='' className='w-4'></Image></a>
    </div>
    </div>
  )
}

export default Header
