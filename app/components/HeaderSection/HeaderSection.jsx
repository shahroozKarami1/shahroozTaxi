import React from 'react'

export default function HeaderSection({text   ,   isSubTitle   ,  isDark   ,  textSubTitle }) {
  return (
    <section  className='text-center    font-bold  text-4xl'>
        

{
  text  &&   <h1  className='text-primery'>
  {
      text
  }
  </h1>
  
}

{
  isSubTitle    &&   

    <h1   className={`  ${isDark  ?  "text-black   dark:text-white"  :  "text-white"}  mt-5 text-xl font-semibold `}>

{
  textSubTitle
}

    </h1>
}

    </section>
  )
}
