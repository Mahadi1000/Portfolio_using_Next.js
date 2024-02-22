import React from 'react'
import { CircleText} from './Icons'
import Link from 'next/link'
const HireMe = ({className}) => {
  return (
    <>    <div className={`${className} `}>

    <div className='lg:w-36 w-20 h-auto flex items-center justify-center relative'>
        <CircleText className={'fill-dark dark:fill-light animate-spin-slow'}></CircleText>
        <Link href='mailto:muhammadmahdihasan1@gamil.com' className='flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-12 h-12 lg:w-20 lg:h-20 text-sm text-center rounded-full font-semibold hover:duration-500 hover:bg-light hover:text-dark dark:bg-light dark:hover:bg-dark dark:text-dark dark:hover:border-light dark:hover:text-light'>Hire Me</Link>
    </div>
</div>
{/* small device */}
<div className='lg:hidden flex absolute overflow-hidden right-5 top-1'>

<div className=' w-[85px] h-auto flex items-center justify-center relative'>
    <CircleText className={'fill-dark dark:fill-light animate-spin-slow'}></CircleText>
    <Link href='mailto:muhammadmahdihasan1@gamil.com' className='flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-[53px] h-[53px] text-[12px] text-center rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:hover:bg-dark dark:hover:border-light dark:hover:text-light dark:text-dark'>Hire Me</Link>
</div>
</div>
</>

  )
}

export default HireMe