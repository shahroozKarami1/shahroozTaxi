import Image from 'next/image'
import React from 'react'
import  imagePlayStore  from  "../../assert/website/taxi-and-map.png"
import  AppStoreImg  from  "../../assert/website/app_store.png"
import  PlayStoreImg  from  "../../assert/website/play_store.png"
import HeaderSection from '../HeaderSection/HeaderSection'
export default function AppStore() {
  return (

<>

<section  className='bg-white  dark:bg-black   '>
<div  className='  pt-20  '>

<HeaderSection    text={"Download"}   isSubTitle={true} isDark   =  {true}  textSubTitle={"BEST CAB SERVICE"}></HeaderSection>


<div>
    <div  className='grid  grid-cols-12  md:mx-20    xs:p-7   lg:p-0   place-items-center '>

<div   data-aos="zoom-in"    className=' left   xs:col-span-12    lg:col-span-6 max-w-[480px]   w-full    '>
<div  className=' flex   flex-col   items-start    justify-center '>
<h1  className='text-3xl  font-semibold  dark:text-white   xs:text-center   lg:text-left'>Download  the Cab voucher app  <br /> free ! Get  Exciting New Offers</h1>

<p  className='text-gray-500  mt-5  dark:text-gray-200    xs:text-center    lg:text-left '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro suscipit exercitationem quaerat fugit ipsa, quibusdam ipsum cum autem ex veniam?</p>


<div  className='btns  flex  justify-center  items-center  w-full  mt-5 '>
<Image  src=  {AppStoreImg}  height={70} ></Image>
<Image  src=  {PlayStoreImg}  height={70} ></Image>

</div>
</div>



</div>
<div    data-aos="zoom-in"   className=' hidden  lg:block  right  col-span-6'>

<Image  src={imagePlayStore}    className='w-3/4      m-0  p-0'    ></Image>
</div>

    </div>
</div>

</div>



</section>







</>


  )
}
