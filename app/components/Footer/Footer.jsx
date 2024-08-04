import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaAndroid } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMousePointer } from "react-icons/fa";

import { IoIosCall } from "react-icons/io";
import Link from 'next/link';

export default function Footer() {
  return (

    <>
    
    
    <section>

<div data-aos="fade-down"  className='partOne  gap-6   flex-col  bg-primery  text-black   flex   items-center  justify-center   py-10'>


<h1  className='uppercase  md:text-xl   font-semibold text-black     xs:text-sm  '>we are ready  to take your call  24  hours ,  7 days</h1>
<h1  className=' font-bold text-3xl  leading-relaxed  '>(+98) 9305151712</h1>
</div>


<div  className='partTwo     '  data-aos="fade-down"> 
        
    <div  className=''>
    <div  className='grid   grid-cols-12  px-10  py-6  items-stretch  place-items-center bg-white  dark:bg-black     text-black  dark:text-white  '>

<div  className='   xl:col-span-4     md:col-span-6      xs:col-span-12     xs:m-5       xs:max-w-[400px]      '>

<div  className='  flex  flex-col  '>

<h1  className='uppercase    border-b-4  font-bold border-primery py-2 '>about shahrooz taxi</h1>
<p  className='text-sm   py-5   leading-relaxed  text-black  dark:text-gray-400'>
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi?
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sed ad autem recusandae? Minus voluptates quasi hic quis nostrum dolores.</p>


<div  className='icons   text-xl  cursor-pointer  flex   gap-4  text-primery'>
<RiTwitterXLine   />
<FaInstagram />
<FaGoogle />
<FaFacebook />


</div>

</div>


</div>
<div  className='   xl:col-span-4      md:col-span-6     xs:col-span-12    xs:m-5       xs:max-w-[400px]       '>

<div  className='  flex  flex-col  '>

<h1  className='uppercase    border-b-4  font-bold border-primery py-2 '>Download</h1>
<p className='text-sm   py-5   leading-relaxed   text-black   dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam labore, debitis obcaecati velit nesciunt facilis!</p>

<div  className='footer   flex flex-col  gap-4 '>
<Link  href={""}   className='flex gap-4    text-lg items-center font-bold   text-primery '>Android  user

<FaAndroid  className='   text-black   dark:text-white  text-xl' />


</Link>
<h1   className='flex gap-4    text-lg items-center font-bold   text-primery'>IOS  user 
<FaAppStoreIos   className='   text-black   dark:text-white  text-xl ' />
</h1>

</div>

</div>


</div>
<div  className=   '    xl:col-span-4       md:col-span-6    xs:col-span-12    xs:m-5         xs:w-[400px]        '>

<div  className='  flex  flex-col      '>

<h1  className='uppercase  font-bold  border-b-4   border-primery  mb-2 py-2  '>contact</h1>
<h1     className='flex  text-black  gap-2   text-sm  py-3    font-light   dark:text-white ' >
    <span><FaLocationPin />    </span>
    Iran  -  Tehran - Jannat Abad</h1>
<h1    className='flex   text-black  text-sm  dark:text-white    gap-2    font-light    py-3' >
<span>
<IoIosCall    className='text-lg'  />

</span>
    09305151712</h1>
<h1    className='flex     text-black  text-sm  dark:text-white  gap-2     font-light   py-3' >
    <span>
    <MdEmail    className='text-lg'  />

    </span>
    www.shahroozdev@gmail.com</h1>
<h1    className='flex  gap-2   text-sm  dark:text-white     font-light     py-3' >
    <span>
    <FaMousePointer    className='text-lg'  />

    </span>
    www.shahroozdev@gmail.com</h1>



</div>


</div>

    </div>


    </div>
    
    
    
    
    
    
    
    
    
     </div>


    </section>
    
    
    
    
    
 
    
    
    
    
    
    
    
    
    
    </>
  )
}
