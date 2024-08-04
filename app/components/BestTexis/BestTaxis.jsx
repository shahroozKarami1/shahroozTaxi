"use client"

import AuthContext from '@/app/context/authContext'
import  Image from  "next/image"
import React, { useContext } from 'react'
import carTestImage  from   "../../assert/car5.png"
import HeaderSection from '../HeaderSection/HeaderSection'
export default function BestTaxis() {

let  contextData  =  useContext(AuthContext)
    console.log(contextData);
  return (

    <>
    <section  className='dark:bg-black  py-10   w-full
      dark:text-white    '>
      <HeaderSection     isSubTitle={true}  textSubTitle={"Choose Best Cab"}></HeaderSection>

<div   className=' xl:px-32  my-10  w-full   '>

<div        data-aos="fade-up"
      data-aos-duration="1000"   className='grid  grid-cols-12    place-items-center    '>

   {
    contextData.map  ((item)  =>   (


      <div      className='   xs:mb-10  xs:m-3      xs:shadow-lg   lg:mb-0  xs:col-span-12  md:col-span-6   lg:col-span-4    max-w-[350px]   hover:scale-90   transition-all  cursor-pointer  lg:shadow-lg      dark:shadow-white   p-2      shadow-black rounded-lg    text-center    '  key={item.id}>
       
          <header      className='pb-6     top-0     w-full'>
           <Image src= {carTestImage} alt="love "   className='w-3/4   mx-auto'/>
          </header>

<main>
  <h1  className='font-semibold   text-xl  pb-2'>{item.title}</h1>
  <p  className='text-gray-500   py-1    text-xs   dark:text-gray-300   leading-relaxed  '>{item.desc}</p>
  <div  className='text-primery    text-xl  font-bold   py-3   '>${item.price}/km</div>
</main>

<footer>
  <button   className='bg-black  text-white  rounded-md  text-sm    p-2  '  >Read More</button>
</footer>
      </div>

    ))
   }
</div>

</div>




    </section>
    
    
    
    
    
    </>
  )
}
