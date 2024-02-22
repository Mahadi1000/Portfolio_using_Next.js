"use client"

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
const MoblieSkill = ({name,x,y})=>{
  return(
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light px-5 py-3 shadow-dark absolute'
      initial={{x:0, y:0}}
      animate={{x:x, y:y}}
      transition={{duration:1.5}}
      whileHover={{scale:"1.05"}}
      >
         {name}
      </motion.div>
  )
}

const Skill = ({ name, orbitRadius, speed }) => {
  const orbitControls = useAnimation();

  useEffect(() => {
    const updateOrbit = () => {
      const angle = (speed * Date.now()) / 1000;
      orbitControls.start({
        x: Math.cos(angle) * orbitRadius,
        y: Math.sin(angle) * orbitRadius,
      });
    };
    const intervalId = setInterval(updateOrbit, 16);
    return () => clearInterval(intervalId);
  }, [orbitRadius, speed, orbitControls]);

  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light px-5 py-3 shadow-dark absolute'
      animate={orbitControls}
      transition={{ ease: 'linear', duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = [
    { name: 'HTML', orbitRadius: 110, speed: 0.2 },
    { name: 'CSS', orbitRadius: 150, speed: 0.15 },
    { name: 'JavaScript', orbitRadius: 180, speed: 0.1 },
    { name: 'ReactJS', orbitRadius: 220, speed: 0.08 },
    { name: 'TypeScript', orbitRadius: 250, speed: 0.07 },
    { name: 'NextJS', orbitRadius: 270, speed: 0.06 },
    { name: 'Redux', orbitRadius: 290, speed: 0.05 },
    { name: 'Node.js', orbitRadius: 320, speed: 0.04 },
    { name: 'Express.js', orbitRadius: 360, speed: 0.03 },
    { name: 'MongoDB', orbitRadius: 370, speed: 0.02 },
    { name: 'SQL', orbitRadius: 380, speed: 0.01 },
    { name: 'Firebase', orbitRadius: 390, speed: 0.007 },
    { name: 'Mongoose', orbitRadius: 400, speed: 0.005 },
    // Add more skills with different orbitRadius and speed as needed
  ];


  return (
    <>
      <h1 className='mt-52 font-bold text-4xl md:text-5xl lg:text-7xl text-center uppercase dark:text-light'>Skills</h1>
      {/* laptop and desktop */}
      <div className='w-full h-screen relative hidden lg:flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light p-6 shadow-dark'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((skill, index) => (
          <Skill key={index} name={skill.name} orbitRadius={skill.orbitRadius} speed={skill.speed} />
        ))}
      </div>
          {/* mobile devices */}
      <div className='w-full h-screen relative lg:hidden flex items-center justify-center rounded-full bg-circularLight'>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light p-6 shadow-dark'
    whileHover={{scale:"1.05"}}
    >
        Web 
    </motion.div>
    <MoblieSkill name="HTML" x="-21vw" y="2vw" />
    <MoblieSkill name="CSS" x="-4vw" y="-8vw" />
    <MoblieSkill name="JavaScript" x="20vw" y="6vw" />
    <MoblieSkill name="ReactJS" x="-0vw" y="12vw" />
    <MoblieSkill name="NextJS" x="-20vw" y="-17vw" />
    <MoblieSkill name="Mongoose" x="15vw" y="-14vw" />
    <MoblieSkill name="Web Design" x="32vw" y="-8vw" />
    <MoblieSkill name="Redux" x="0vw" y="21vw" />
    <MoblieSkill name="Firebase" x="-25vw" y="20vw" />
    <MoblieSkill name="Tailwind Css" x="18vw" y="14vw" />
    </div> 

      <div className='flex justify-center w-full items-center mt-10'>
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
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
      </div>
    </>
  );
};

export default Skills;
