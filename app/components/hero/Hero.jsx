"use client"

import React from 'react'
import    cityImage   from    "../../../app/assert/website/city.jpg"
import  Image from  "next/image"
import  carBanner  from  "../../assert/car2.png"
export default function Hero() {

    let  bgCity    =    {


        backgroundImage   :   `url(${cityImage.src})`  ,  
        backgroundSize  :  "cover"  ,  

        backgroundPosition :  "center"  ,  
        backgroundRepeat : "no-repeat"  ,  
width  : "100vw"  ,  
height :  "580px"

    }
  return (


    <>
    
    <section  style={bgCity}  >
        <div  className='  relative dark:bg-black/50  duration-300    dark:text-white   bg-white/50 backdrop-blur-sm  h-full   ' >

<div  className='flex  items-center   justify-center  '>
<div  className='container   grid  mt-20  grid-cols-1 place-items-center '>
    <h1  data-aos="fade-up"   data-aos-delay="600"   className='text-4xl     text-primery  font-bold  ' >BOOK  CAR NOW</h1>
    <span  data-aos="fade-up"    data-aos-delay="800" className='   xs:text-3xl   md:text-6xl     font-semibold  py-6  dark:text-white  ' >(+98)9305151712</span>
    <span data-aos="fade-up"   data-aos-delay="1000"  className='text-xl tracking-widest  mb-0	  " 	'>www.shahroozdev@gmail.com</span>
    <Image  data-aos="zoom-in-right"    data-aos-delay="1200"   className='z-20  fixed  -bottom-40   ' src={carBanner} ></Image>
</div>
        </div>

        </div>
    </section>
    
    
    
    
    
    
    
    
    </>
  )
}
{/* <Image  src={imageWay}        className='absolute right-0 z-10  bottom-0 w-full h-[200px]'></Image> */}
