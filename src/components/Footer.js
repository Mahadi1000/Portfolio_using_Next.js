import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full dark:text-light border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between'>
            <span className='flex items-center'>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div>Build With <span className='text-primary text-2xl px-1'>&#9825;</span> by&nbsp; <span className='underline underline-offset-2'> Dev Mahadi </span>

            </div>
            <Link  className='underline underline-offset-2' href="/contact">Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer