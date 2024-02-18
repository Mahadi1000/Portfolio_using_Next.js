import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const Skill = ({ name, orbitRadius, speed }) => {
  const orbitControls = useAnimation();

  React.useEffect(() => {
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
    { name: 'HTML', orbitRadius: 120, speed: 0.2 },
    { name: 'CSS', orbitRadius: 160, speed: 0.15 },
    { name: 'JavaScript', orbitRadius: 200, speed: 0.1 },
    { name: 'ReactJS', orbitRadius: 240, speed: 0.08 },
    { name: 'NextJS', orbitRadius: 280, speed: 0.06 },
    { name: 'Node.js', orbitRadius: 320, speed: 0.05 },
    { name: 'Express.js', orbitRadius: 360, speed: 0.04 },
    { name: 'MongoDB', orbitRadius: 370, speed: 0.03 },
    { name: 'Firebase', orbitRadius: 385, speed: 0.02 },
    { name: 'GraphQL', orbitRadius: 400, speed: 0.015 },
    // Add more skills with different orbitRadius and speed as needed
  ];

  return (
    <>
      <h1 className='mt-52 font-bold text-7xl text-center uppercase dark:text-light '>Skills</h1>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
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
    </>
  );
};

export default Skills;
