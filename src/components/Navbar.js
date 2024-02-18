"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import Logo from './Logo'
import { usePathname } from "next/navigation";
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import useThemeSwitcher from './hooks/useThemeSwitcher'
const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded-md dark:text-white p-1 ${pathName === link.url && "hover:bg-dark hover:text-white border border-solid border-dark mx-2 dark:hover:bg-white dark:hover:text-black dark:border-white  text-black"}`} href={link.url}>
      {link.title}
    </Link>
  );
};
const MobileNavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded-md dark:text-dark text-white p-1 ${pathName === link.url && "hover:bg-dark hover:text-white border border-solid border-light mx-2 dark:hover:bg-white dark:hover:text-black dark:border-white dark:text-dark text-light"}`} href={link.url}>
      {link.title}
    </Link>
  );
};
const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/projects", title: "Projects" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useThemeSwitcher()
  const handleClick = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-full lg:py-7 py-8 z-10 font-medium flex items-center px-8 lg:px-20  justify-between relative'>
      <button className=' flex-col justify-center items-center flex lg:hidden' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1':'-translate-y-0.5'} `}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0': 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>

      </button>

    {/* desktop navlink */}
    <div className='w-full hidden justify-between items-center lg:flex'>
    <nav>
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      
        </nav>

        <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="/" target={"_blank"} whileHover={{y:-3}} whileTap={{scale:0.9}} className='w-6 mr-3'> <TwitterIcon></TwitterIcon> </motion.a>
        <motion.a href="/" target={"_blank"} className='w-6 mr-3 dark:bg-light rounded-full' whileHover={{y:-3}} whileTap={{scale:0.9}}><GithubIcon></GithubIcon></motion.a>
        <motion.a href="/" target={"_blank"}className='w-6 mx-3' whileHover={{y:-3}} whileTap={{scale:0.9}}><LinkedInIcon></LinkedInIcon>
        </motion.a>
        <motion.a href="/" target={"_blank"} className='w-6 mx-3' whileHover={{y:-3}} whileTap={{scale:0.9}}><PinterestIcon></PinterestIcon></motion.a>
        <motion.a href="/" target={"_blank"} className='w-6 ml-3' whileHover={{y:-3}} whileTap={{scale:0.9}}><DribbbleIcon></DribbbleIcon>
        </motion.a>
        <button className= {`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"?"bg-dark text-light" : "bg-light text-dark" } `}
         onClick={()=> setMode(mode === "light" ? "dark" : "light")} >
          {
            mode === "dark" ? <SunIcon className={"fill-dark"}></SunIcon> : <MoonIcon></MoonIcon>
          }
        </button>
        </nav>
    </div>

          {/* mobile navlink */}

{
  isOpen ?
  <motion.div 
  initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
  animate={{scale:1, opacity:1}}
  className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 lg:hidden'>
  <nav className='flex items-center flex-col justify-center'>
      {links.map((link) => (
        <MobileNavLink link={link} key={link.title} />
      ))}
    
      </nav>

      <nav className='flex items-center justify-center flex-wrap mt-2'>
      <motion.a href="/" target={"_blank"} whileHover={{y:-3}} whileTap={{scale:0.9}} className='w-6 mr-3'> <TwitterIcon></TwitterIcon> </motion.a>
      <motion.a href="/" target={"_blank"} className='w-6 mr-3 bg-light rounded-full' whileHover={{y:-3}} whileTap={{scale:0.9}}><GithubIcon></GithubIcon></motion.a> 
      <motion.a href="/" target={"_blank"}className='w-6 mx-3' whileHover={{y:-3}} whileTap={{scale:0.9}}><LinkedInIcon></LinkedInIcon>
      </motion.a>
      <motion.a href="/" target={"_blank"} className='w-6 mx-3' whileHover={{y:-3}} whileTap={{scale:0.9}}><PinterestIcon></PinterestIcon></motion.a>
      <motion.a href="/" target={"_blank"} className='w-6 ml-3' whileHover={{y:-3}} whileTap={{scale:0.9}}><DribbbleIcon></DribbbleIcon>
      </motion.a>
      <button className= {`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"?"bg-dark text-light" : "bg-light text-dark" } `}
       onClick={()=> setMode(mode === "light" ? "dark" : "light")} >
        {
          mode === "dark" ? <SunIcon className={"fill-dark"}></SunIcon> : <MoonIcon></MoonIcon>
        }
      </button>
      </nav>
  </motion.div>
  : null
}
        <div className='absolute left-[40%] lg:left-[45%] top-1 translate-x-[45%]'>
          <Logo></Logo>
        </div>
    </header>
  )
}

export default Navbar