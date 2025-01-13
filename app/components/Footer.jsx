import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'></Image>

<div className='w-max flex items-center gap-2 mx-auto'>
<Image src={assets.mail_icon} alt='' className='w-6'></Image>
padwani2003@gmail.com
</div>

      </div>

<div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
    <p></p>
    <ul className='flex itmes-center gap-10 mt-4 sm:mt-0'>
        <li><a target='_blank' href="https://github.com/ypadwani">Github</a></li>
        <li><a target='_blank' href="https://www.linkedin.com/in/yash-padwani-334573264/">LinkedIn</a></li>
    </ul>
</div>

    </div>
  )
}

export default Footer
