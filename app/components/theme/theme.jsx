import React, { useEffect, useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { IoSunny } from "react-icons/io5";

export default function Theme() {

    const [theme, setTheme] = useState(

        typeof  window !==  undefined  &&   localStorage.getItem("theme")    ?  localStorage.getItem("theme")   :  "light"
        
    )

    let  element   = typeof window !==  undefined   &&   document.documentElement
useEffect (()  => {

    localStorage.setItem("theme"    ,   theme)
if (theme  ===  "dark") {
        element.classList.add("dark")
    }else {
        element.classList.remove("dark")
        
}



}  ,  [theme])

  return (

    <>
{
    theme  ===  "light"  &&
<span className='text-2xl   cursor-pointer  ml-4    '   onClick={()  =>  setTheme("dark")} ><IoMoon /></span>
}
{
    theme  ===  "dark"  &&
<span className='text-2xl   cursor-pointer  ml-4    '   onClick={()  =>  setTheme("light")} ><IoSunny /></span> 
}
    </>
  )
}
