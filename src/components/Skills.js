"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const MoblieSkill = () => {
  const skillRef = useRef(null);
  const [isSkillRefInView, setIsSkillRefInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSkillRefInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
        {/* SKILL TITLE */}
        <motion.h1
          initial={{ x: "-300px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-bold text-2xl"
        >
          SKILLS
        </motion.h1>
        {/* SKILL LIST */}
        <motion.div
          initial={{ x: "-300px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          className="flex gap-4 flex-wrap"
        >
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            JavaScript
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            TypeScript
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            React.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Next.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            SCSS
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Tailwind CSS
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            MongoDB
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Mongoose
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            PostgreSQL
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Prisma
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Node.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Nest.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Express.js
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            GraphQL
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Redux
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Framer Motion & GSAP
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Docker
          </div>

          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Git & GitHub
          </div>
          <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            System Design And Architecture.
          </div>
        </motion.div>
      </div>
    </>
  );
};

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
      className="flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light px-5 py-3 shadow-dark absolute"
      animate={orbitControls}
      transition={{ ease: "linear", duration: 1.5 }}
      whileHover={{ scale: 1.1 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = [
    { name: "HTML", orbitRadius: 110, speed: 0.2 },
    { name: "CSS", orbitRadius: 150, speed: 0.15 },
    { name: "JavaScript", orbitRadius: 180, speed: 0.1 },
    { name: "ReactJS", orbitRadius: 220, speed: 0.08 },
    { name: "TypeScript", orbitRadius: 250, speed: 0.07 },
    { name: "NextJS", orbitRadius: 270, speed: 0.06 },
    { name: "Redux", orbitRadius: 290, speed: 0.05 },
    { name: "Node.js", orbitRadius: 320, speed: 0.04 },
    { name: "Express.js", orbitRadius: 360, speed: 0.03 },
    { name: "MongoDB", orbitRadius: 370, speed: 0.02 },
    { name: "SQL", orbitRadius: 380, speed: 0.01 },
    { name: "Nest JS", orbitRadius: 390, speed: 0.007 },
    { name: "Mongoose", orbitRadius: 400, speed: 0.005 },
    { name: "Prisma", orbitRadius: 410, speed: 0.004 },
    { name: "PostgreSQL", orbitRadius: 420, speed: 0.003 },
    { name: "Docker", orbitRadius: 430, speed: 0.002 },
    { name: "MySQL", orbitRadius: 440, speed: 0.001 },
    { name: "GraphQL", orbitRadius: 450, speed: 0.004 },
  ];

  return (
    <>
      <h1 className="mt-52 font-bold text-4xl md:text-5xl lg:text-7xl text-center uppercase dark:text-light">
        Skills
      </h1>
      {/* laptop and desktop */}
      <div className="w-full h-screen relative hidden lg:flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light p-6 shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            name={skill.name}
            orbitRadius={skill.orbitRadius}
            speed={skill.speed}
          />
        ))}
      </div>
      {/* mobile devices */}
      <div className="w-full h-screen relative lg:hidden flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark cursor-pointer text-light p-6 shadow-dark"
          whileHover={{ scale: "1.05" }}
        >
          Web
        </motion.div>
        <MoblieSkill />
      </div>

      <div className="flex justify-center w-full items-center mt-10">
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
    </>
  );
};

export default Skills;
