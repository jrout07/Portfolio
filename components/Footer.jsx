import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <a href="mailto:jr.rout.work@gmail.com " target='_blank' className='flex items-center gap-2' >
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            <span className='font-Ovo text-sm>'>jr.rout.work@gmail.com </span>
            </a>
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Jyoti Ranjan Rout. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/jrout07">GitHub</a></li>
            <li><a target='_blank' href="https://www.linkedin.com/in/jrout07">LinkedIn</a></li>
            <li><a target='_blank' href="https://leetcode.com/u/rout07/">LeetCode</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
