import React from 'react'

export default function AboutSection({header   ,   icon   ,  text  }  ) {
  return (


    <>
    <section  className='max-w-[400px]     m-2  mt-10  '>

<div    className='flex   items-center '>

<div className="right">
<div   className=' text-black    bg-primery     p-4   mr-3  rounded-full  text-xl     '  >
  {icon  }
</div>

</div>
<div className="left  flex  items-start  flex-col    justify-start ">
<h1  className='uppercase    font-bold   text-primery   mb-2   '>{header}</h1>
<span  className='text-white   text-sm ' >{text}</span>

</div>


    
</div>



    </section>
    
    
    </>
  )
}
