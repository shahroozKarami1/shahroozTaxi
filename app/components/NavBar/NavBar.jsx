'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoMoon } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import Theme from '../theme/theme';
import { CgMenuGridR } from "react-icons/cg";
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';
import Error from 'next/error';
import { usePathname } from 'next/navigation';

export default function NavBar() {

let  pathName   =  usePathname()
console.log(pathName);

    let  [dataNav  ,  setDataNav]  =  useState([])


    let  [isShowMenu  ,  setIsShowMenu]  =  useState(false)

    function toggleMenu  () {
        setIsShowMenu(!isShowMenu)
    }
useEffect(()  =>  {

    try {
        fetch("http://localhost:7500/navbar") 
.then (res  =>  {

    return  res.json()

 
})
.then(data  =>  {
    setDataNav(data)
})
    } catch (error) {
          console.log(error);
    }

}  ,  [])


    


  return (

    <nav   className='sticky  top-0  z-50          dark:text-white  dark:bg-black  bg-white   py-4    md:py-0     shadow-md  shadow-black flex justify-center '>
<div  className='  mx-14  w-full    flex  items-center  justify-between md:py-3   '>

<div  className='left'>
<h1   className='font-bold  text-3xl '  >Shahrooz
    <span  className='text-primery'>Taxi</span>
</h1>
</div>

<div  className='right  flex  items-center'>
<ul  className='  items-center     gap-8   hidden  md:flex  '>

{
   dataNav.map((item)  =>  {
      let isActive   =  pathName  === item.Link
    return (
        <li  key={item.id}><Link href={item.Link}  className={`${isActive     &&  ("bg-primery   text-black   ")} hover:dark:text-black   font-semibold  hover:bg-primery  p-3  rounded-full  duration-200`}>{item.title}</Link></li>

    )
     }
    
    
    )
}
    </ul>
    <div  className='flex  items-center  gap-4'>

    <Theme  ></Theme>  {
        isShowMenu   ?  (
            <>
            <span   onClick={     toggleMenu}  className='md:hidden   text-3xl   hover:text-primery   cursor-pointer '><CgMenuGridR /></span>
            </>
            
        )  :   (
            
            <span   onClick={   toggleMenu}  className='md:hidden   text-3xl   hover:text-primery   cursor-pointer '><CgMenuGridO /></span>
        )
    }
    </div>
</div>


</div>

<ResponsiveMenu  dataNav  =  {dataNav}  isShowMenu  =  {isShowMenu}></ResponsiveMenu>


    </nav>
  )
}
