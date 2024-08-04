"use client"
import Link from 'next/link'
import React from 'react'
import "./ResponsiveMenu.css"
import { HiMiniUserCircle } from "react-icons/hi2";
import { usePathname } from 'next/navigation';

export default function ResponsiveMenu({dataNav   ,  isShowMenu}) {

    let  pathName  =  usePathname()
  return (

    <>
    
    <section   className= {`  ${isShowMenu    ?    "left-0"   :  "-left-[100%]" } z-20  duration-200 md:hidden  fixed  shadow-md shadow-black  dark:bg-black dark:text-white  top-0       text-black  bg-slate-100   w-3/4 h-screen `}>

<header  className='flex  items-center  justify-start   gap-2  ml-4  m-5'>
<HiMiniUserCircle   className='text-6xl' />
    <div  className='details  flex     justify-start  flex-col'>
        <h1  className='font-semibold  '>Hello  user</h1>
        <h1  className='text-sm text-gray-400'>Premium  user</h1>
    </div>
</header>
<main className='mt-6'>
    <ul   className='flex  gap-8  text-lg  ml-6   flex-col '>
        {
            dataNav.map((item)  =>  {
                let  isActive   =  pathName  === item.Link
                return (
                    
                    <li   key={item.id}   className={`    ${isActive    &&    "bg-primery   text-black"  }    hover:translate-x-4  relative  transition-custome  transition-all   p-2  rounded-md  hover:bg-primery   hover:text-black  duration-200  max-w-[90px]  text-center `}><Link  href={item.Link}>{item.title}</Link></li>
                )
            })
        }
    </ul>
</main>

<footer    className=' absolute  pb-2  my-4 inline-block   mx-auto w-full font-semibold border-b-4   border-primery   bottom-0'>

    <h1  className='text-center'>    made with  love  by  shahrooz 
    </h1>
</footer>

    </section>
    
    
    
    
    
    
    </>
  )
}
