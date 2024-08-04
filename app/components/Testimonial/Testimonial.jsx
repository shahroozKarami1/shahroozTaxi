'use client'

import { getData } from '@/app/service/service'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import  testImg  from  "../../assert/Testimonial/image1.jpg"
import HeaderSection from '../HeaderSection/HeaderSection';
export default function Testimonial() {
    const [dataTestimonial, setDataTestimonial] = useState([])


    

    useEffect (()  =>  {
        
getData("http://localhost:7500/testimonial")
.then (data  =>  {
    setDataTestimonial(data)
})




    }  ,  [])
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,

        
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

  return (


    <>

<section  className='  py-20  dark:bg-black  w-full '>
  <div  className='mb-5  text-2xl'>
  <HeaderSection    isSubTitle={false}  isDark={false}  text={"Testimonials"}></HeaderSection>

  </div>
    
    <div  className='    xl:px-6   w-full  overflow-hidden'    >

        <Slider   {...settings} className='p-5    overflow-hidden '   >


            {
                dataTestimonial.map((items)  => {
                return    (
                    
                        <div     data-aos="flip-left"  key={items.id}    className='  test  shadow-md  dark:shadow-white       shadow-black    overflow-hidden   bg-white  dark:bg-black  rounded-xl  '>


<div  className='flex   relative  flex-col  gap-10 py-8  px-6   '>
  <header  className=''>
       <p  className='text-sm  dark:text-white  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam eos, ratione soluta eius perferendis a earum explicabo reprehenderit nisi.</p> 
        </header>
                                    <footer  className='flex  items-center     '>
                                        <Image width={100}  height={100}   className='rounded-full  w-[70px]  h-[70px] '   src=   {testImg} alt="test" />
                                        <div  className='ml-4'>
                                            <h1  className='capitalize    pb-2  font-bold       dark:text-white  text-gray-500'>shahrooz Khan</h1>
                                            <h1  className='uppercase  font-light        dark:text-white text-gray-400  text-sm'>developer</h1>
                                        </div>
                                    </footer>

  
</div>

    
    
                            </div>
    
    )
                } 

)
}


        </Slider>

    </div>
    
    
    
    
    
    </section>    
    
    
    
    
    </>
  )
}
