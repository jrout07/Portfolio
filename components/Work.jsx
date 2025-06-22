import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
      Browse My Recent</motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      Work</motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
      Interned at Oasis Infobyte as a Web Development Intern, where I built responsive web applications and gained hands-on experience in frontend and backend integration using modern development tools.</motion.p>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
        {workData.map((project, index)=>(
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                    </div>
                   <div className="grid grid-cols-[repeat(auto-fit, gap-2 mt-2">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn text-sm px-3 py-1 border rounded bg-white hover:bg-lime-300 w-full">
                      Github
                    </button>
                  </a>
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-color-2 project-btn text-sm px-3 py-1 border rounded bg-white hover:bg-lime-300 w-full">
                      Live Demo
                    </button>
                  </a>
                </div>
                </div>
                
            </motion.div>
        ))}
    </motion.div>



    </motion.div>
  )
}

export default Work
