"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import HireMe from '@/components/HireMe';
import { HeroParallax } from '@/components/HeroParallax';

  
const item = [
  {
    title: "School Management System",
    link: "https://school-management-omega-ruddy.vercel.app/",
    thumbnail: "/p2.png",
    description:
      "This is a full stack shchool management software for students.",
  },

  {
    title: "Learning Management System Dashboard",
    link: "https://onnorokom-programming.vercel.app/courses",
    thumbnail: "/p4.png",
    description:
      "This is a Learning Management project for Youtube channel where I teaches you to learn how to be a better programmer.",
  },
  {
    title: "Fuzzie Automation",
    link: "https://fuzzie-six.vercel.app",
    thumbnail: "/p12.png",
    description:
      "This is a an Automation website where you can automate your work by it. You can connect your drive, discord, slack, notion on it.",
  },
  {
    title: "URL Shortener",
    link: "https://url-shortener-omega-three.vercel.app/",
    thumbnail: "/p11.png",
    description:
      "This is a an URL Shortener project with dashboard. You can shorten your URL.",
  },
  {
    title: "Blog",
    link: "https://onnorokom-programming.vercel.app/blog",
    thumbnail: "/p6.png",
  },

  {
    title: "Agency Website",
    link: "https://softeins-lab.com/",
    thumbnail: "/p1.png",
  },
  {
    title: "Visa Website",
    link: "https://evisa-welcomtoservia.com/",
    thumbnail: "/p10.png",
    description: "This is a Visa processing website for an agency.",
  },

  {
    title: "Nextwave",
    link: "https://next-brainwave.vercel.app/",
    thumbnail: "/p9.png",
  },
  {
    title: "Metaverse",
    link: "https://metaverse-ui-puce.vercel.app/",
    thumbnail: "/p15.png",
  },
  {
    title: "Apple Website Clone",
    link: "https://apple-clone-murex.vercel.app/",
    thumbnail: "/p14.png",
  },
  {
    title: "Voice and Video calling app",
    link: "https://live-five-beige.vercel.app/",
    thumbnail: "/p5.png",
    description:
      "This is a full stack zoom clone website built by Next js",
  },

  {
    title: "Blog",
    link: "https://onnorokom-programming.vercel.app/blog",
    thumbnail: "/p6.png",
  },
  {
    title: "Urban Market",
    link: "https://urban-market-sl.vercel.app",
    thumbnail: "/p7.png",
    description: "This is a full stack next js e-commerce website ",
  },
  {
    title: "FigTree Property",
    link: "https://figtreeproperty.com",
    thumbnail: "/p8.png",
  },
];

const ProjectsPage = () => {
  const ref = useRef();
  const containerRef = useRef(null);
  
  // Initialize scrollYProgress before using it
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <motion.h2
          className="text-5xl md:text-7xl dark:text-white font-black text-center my-12 text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Latest Projects
        </motion.h2>
        <div className=" py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={containerRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{ y }}
            >
              {item.map((product, index) => (
                <motion.div
                  key={product.title}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {product.title}
                    </h3>
                    <p className="text-gray-200 py-2">{product.description}</p>
                    <Link
                      href={product.link}
                      className="inline-block bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors"
                    >
                      View Project
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        <HeroParallax projects={item} />
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="lg:text-7xl md:text-4xl text-3xl text-wrap dark:text-white text-dark font-bold uppercase ">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-80 h-80 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="text-xl font-bold dark:text-light"
              >
                MERN Stack Developer.Web Designer.
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-24 h-24 md:w-32 md:h-32 font-bold
            text-xl absolute top-0 left-0 right-0 bottom-0 m-auto bg-dark hover:bg-light hover:text-dark hover:border-dark hover:border-solid border duration-300 dark:text-white text-light rounded-full flex items-center justify-center "
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsPage