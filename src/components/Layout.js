import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`${className} w-full h-full dark:bg-dark inline-block z-0 bg-light p-20 lg:px-32 `}>{children}</div>
  )
}

export default Layout