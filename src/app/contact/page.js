"use client"
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Layout from '@/components/Layout';
const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Say Hello";
  return (
    <div> <Layout className='px-0 p-8'>
        <motion.div
    className="h-full "
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-full flex flex-col items-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-16">
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-7xl">
        <div>
          {text.split("").map((letter, index) => (
            <motion.span
            className='font-bold font-mont text-dark dark:text-light'
              key={index}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          😊
        </div>
      </div>
      {/* FORM CONTAINER */}
      <form
        className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 dark:bg-light rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
      >
        <span>Dear Mahadi Dev,</span>
        <textarea
          rows={2}
          className="bg-transparent border-b-2 border-b-dark outline-none resize-none"
          name="user_message"
        />
        <span>My mail address is:</span>
        <input
          name="user_email"
          type="text"
          className="bg-transparent border-b-2 border-b-dark outline-none"
        />
        <span>Regards</span>
        <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
          Send
        </button>
        {success && (
          <span className="text-green-600 font-semibold">
            Your message has been sent successfully!
          </span>
        )}
        {error && (
          <span className="text-red-600 font-semibold">
            Something went wrong!
          </span>
        )}
      </form>
    </div>
  </motion.div>
        </Layout></div>
  )
}

export default ContactPage