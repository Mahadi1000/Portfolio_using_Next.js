"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Layout from '@/components/Layout'
import profile from "../../../public/pic4.jpg"
import Image from 'next/image'
const quote = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      delay:1.5,
    }
  }
}
const AboutPage = () => {
  return (
    <main className=''>
      <Layout className='pt-14'>
      <motion.h1
          variants={quote}
          initial="initial"
          animate="animate"
           className="text-2xl inline-block py-2 w-full uppercase text-dark mb-14 text-center lg:text-4xl xl:text-8xl dark:text-light font-bold">
          
          Passion Fuels Purpose!  
         </motion.h1>
         <div className='grid w-full grid-cols-8 gap-24'>
          <div className='col-span-4 flex flex-col items-start justify-start'>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
            <p className='font-medium'>Hi, I'm Mahadi Hasan, a web developer and designer with a passion for creating beautiful, functional, 
and user-centered digital experiences. With 1 years of experience in the field. I am always looking for 
new and innovative ways to bring my client's visions to life.</p>
            <p className='font-medium my-4'> I believe that design is about more than just making things look pretty it's about solving problems and 
creating intuitive, enjoyable experiences for users. </p>
            <p className='font-medium'>Whether I'm working on a website, mobile app, or 
other digital product, I bring my commitment to design excellence and user-centered thinking to 
every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
          </div>

          <div className='col-span-3 h-max relative rounded-2xl flex justify-center items-center border-2 z-0 border-solid border-dark bg-light p-8'>
            <div className='absolute top-1 -right-3 -z-20 w-[102%] h-[103%] rounded-2xl bg-dark'/>

    <Image  src={profile} alt='Developer Mahadi' className='  object-contain w-full h-auto rounded-2xl' ></Image>
          </div>
         </div>
      </Layout>
    </main>
  )
}

export default AboutPage