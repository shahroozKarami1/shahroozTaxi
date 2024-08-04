import React from 'react'
import  driverImg  from  "../../assert/website/driver.jpg"
import AboutSection from '../AboutSection/AboutSection'
import { IoIosStarOutline } from "react-icons/io";
import HeaderSection from '../HeaderSection/HeaderSection';

export default function AboutUs() {


    let  bgCity    =    {


        backgroundImage   :   `url(${driverImg.src})`  ,  
        backgroundSize  :  "cover"  ,  

        backgroundPosition :  "center"  ,  
        backgroundRepeat : "no-repeat"  ,  
width  : "100vw"  ,  

    }
  return (

    <>
    <section  style={bgCity}    className='' >


<div  className='   backdrop-blur-md  bg-black/50  w-full     h-full   xs:pb-20       pt-20  '  >
<HeaderSection  text={"WE DO  BEST "} isDark={false} isSubTitle={true}   textSubTitle={"Than You  Wish"} ></HeaderSection>


<div  className='grid   grid-cols-12   lg:mx-10   py-10  pb-20   md:p-5      '>

  <div    data-aos="flip-left"     data-aos-duration   =  "1500"   className='md:col-span-6   xs:col-span-12   '>
<div  className='flex  items-center  flex-col      '  >
<AboutSection  text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nesciunt."}   header={"fast booking"}  icon={<IoIosStarOutline />}   ></AboutSection>
<AboutSection  text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nesciunt."}   header={"fast booking"}  icon={<IoIosStarOutline />}   ></AboutSection>
</div>

  </div>
  <div    data-aos="flip-left"     data-aos-duration   =  "1500"   className='md:col-span-6   xs:col-span-12'>

<div  className='flex  items-center  flex-col      '  >
<AboutSection  text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nesciunt."}   header={"fast booking"}  icon={<IoIosStarOutline />}   ></AboutSection>
<AboutSection  text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, nesciunt."}   header={"fast booking"}  icon={<IoIosStarOutline />}   ></AboutSection>
</div>

  </div>
</div>
</div>

    </section>
    
    
    
    
    
    </>
  )
}
