"use client"
import Layout from "@/components/Layout";
import Image from "next/image";
import {motion} from 'framer-motion'
import profileImage from "../../public/4.png"
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import TransitionEffect from "@/components/TransitionEffect";
const quote = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
    }
  }
}

export default function Home() {

  return (
    <>
    <TransitionEffect></TransitionEffect>
    <main className="flex flex-col lg:flex-row dark:text-light items-center text-dark w-full min-h-screen">
     <Layout className="pt-5 md:p-16 sm:pt-8 lg:pt-0 min-h-screen">
      <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }} className="flex flex-col  md:justify-center lg:flex-row items-center lg:justify-between w-full">
        <div className="lg:w-1/2 w-full lg:flex md:hidden py-5 md:py-0  ">
          <Image src={profileImage} alt="Developer Mahadi" className="w-full h-auto" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-start dark:text-light ">
          <motion.h1
          variants={quote}
          initial="initial"
          animate="animate"
           className="text-2xl inline-block py-2 w-full uppercase text-dark lg:text-4xl xl:text-6xl dark:text-light font-bold">
          
         Turning Vision Into Reality With Code And Design. 
         </motion.h1>
         <p className="lg:text-xl md:text-lg self-center text-base font-medium">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
         <div className="flex items-center justify-center lg:justify-start 
         gap-4 mt-2">
          <Link className="flex items-center bg-dark text-light p-1.5 px-4 md:p-2.5 md:px-6 rounded-lg text-[14px] md:text-lg font-semibold hover:bg-light hover:text-dark border dark:border-light border-solid border-transparent hover:border-dark" href="/dummy.pdf" target={"_blank"}>Resume  <LinkArrow/> </Link>

          <Link className="md:text-lg text-[14px] font-medium dark:text-light capitalize text-dark underline" href="/contact">Contact</Link>
         </div>
        </div>
      </motion.div>
     </Layout>
     <HireMe></HireMe>
    </main>
    </>
  );
}
