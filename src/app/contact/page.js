"use client"
import React, { useRef, useState } from 'react'
import {motion} from 'framer-motion'
import Layout from '@/components/Layout';
import emailjs from "@emailjs/browser";
const ContactPage = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const text = "Say Hello";
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      setError(false);
      setSuccess(false);
  
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccess(true);
            form.current.reset();
          },
          () => {
            setError(true);
          }
        );
    };
  

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
       onSubmit={sendEmail}
       ref={form}
        className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 dark:bg-light rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
      >
        <span>Dear Mahadi Dev,</span>
        <textarea
        required
          rows={2}
          className="bg-transparent border-b-2 border-b-dark outline-none resize-none"
          name="user_message"
        />
        <span>My mail address is:</span>
        <input
        required
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