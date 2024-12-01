"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import {motion, useInView, useScroll} from 'framer-motion'
import Layout from '@/components/Layout'
import profile from "../../../public/profile.jpeg"
import Image from 'next/image'
import Skills from '@/components/Skills'
import Link from 'next/link'
const quote = {
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      delay:1,
    }
  }
}
const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <main className="">
      <Layout className="pt-14 px-4 lg:px-20">
        <motion.h1
          variants={quote}
          initial="initial"
          animate="animate"
          className="text-3xl inline-block py-2 w-full uppercase text-dark mb-14 text-center lg:text-4xl xl:text-8xl dark:text-light font-bold"
        >
          Passion Fuels Purpose!
        </motion.h1>
        <div className="grid content-center w-full md:grid-cols-8 gap-24">
          <div className="col-span-4 order-2 md:order-none dark:text-light flex flex-col items-start justify-start">
            <h2 className="mb-4 text-lg dark:text-light font-bold uppercase text-dark/75">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm Mahadi Hasan, a web developer and designer with a passion
              for creating beautiful, functional, and user-centered digital
              experiences. With 1 years of experience in the field. I am always
              looking for new and innovative ways to bring my client's visions
              to life.
            </p>
            <p className="font-medium my-4">
              {" "}
              I believe that design is about more than just making things look
              pretty it's about solving problems and creating intuitive,
              enjoyable experiences for users.{" "}
            </p>
            <p className="font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>

          <div className="col-span-3 order-1 md:order-none h-max relative rounded-2xl flex justify-center items-center border-2 z-0 border-solid dark:border-light border-dark bg-light p-6">
            <div className="absolute top-3 -right-5 -z-20 w-[102%] h-[100%] dark: rounded-2xl bg-dark" />

            <Image
              src={profile}
              alt="Developer Md Mahadi Hasan. I'm a top level Full stack developer and content creator from Bangladesh. I'm the best developer and programmer in the Bangladesh"
              className=" object-cover   transition-all duration-200 hover:scale-105 w-full h-auto rounded-2xl"
            ></Image>
          </div>
        </div>
        <div className="flex justify-center w-full items-center mt-20">
          {/* SKILL SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        <Skills />
        <div
          className={`h-full my-24 overflow-scroll lg:flex" ref={containerRef}`}
        >
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-dark/75 text-xl md:text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            <motion.h1
              initial={{ x: "300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold uppercase text-dark/75 text-end text-xl lg:text-2xl"
            >
              Education
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* Education TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    CEO & Founder at Onnorokom Programming
                  </div>
                  {/* Education DESC */}
                  <div className="p-3 text-sm text-dark dark:text-white italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <Link href={"https://onnorokom-programming.vercel.app"}>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Onnorokom Programming
                    </div>
                  </Link>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      <div className="w-2 h-2 rounded-full bg-primary ring-1 fill-primary left-1.5 top-1.5 animate-pulse absolute"></div>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      <div className="w-2 h-2 rounded-full bg-primary ring-1 fill-primary left-1.5 top-1.5 animate-pulse absolute"></div>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* Education TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Programming Hero
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic text-dark dark:text-white">
                    I learned MERN Stack Web Development from Programming Hero.
                    It was 6 months of course. And now I am a Junior Web
                    Developer
                  </div>
                  {/* Education DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 2024{" "}
                  </div>
                  {/* Education COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Programming Hero
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* Education TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    CEO & Founder At Softeins Lab{" "}
                  </div>
                  {/* Education DESC */}
                  <div className="p-3 text-sm italic text-dark dark:text-white">
                    Softeins Lab is a software development company accelerating
                    global digital transformation.
                  </div>
                  {/* Education DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Founded 1 October, 2024
                  </div>
                  <Link href={"https://softeins-lab.com"}>
                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                      Softeins Lab
                    </div>
                  </Link>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      <div className="w-2 h-2 rounded-full bg-primary ring-1 fill-primary left-1.5 top-1.5 animate-pulse absolute"></div>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      <div className="w-2 h-2 rounded-full bg-primary ring-1 fill-primary left-1.5 top-1.5 animate-pulse absolute"></div>
                    </div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* Education TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    B.Sc - Honours in Botany at Govt.Titumir College, Dhaka
                    University
                  </div>

                  {/* Education DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - 2026{" "}
                  </div>
                  {/* Education COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Govt. Titumir College Affiliated with University of Dhaka
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </main>
  );
}

export default AboutPage