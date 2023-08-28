import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=" md:mx-auto mx-auto sm:p-10 md:p-20 ">
      <div className="flex flex-col text-center text-text_blue ">
        <h1 className="mx-auto text-center sm:text-[30px] md:text-[60px] text-text_blue font-medium font-semibold tracking-wide ">Designer, Blockchain & Full Stack Developer</h1>
        <p className="p-5 sm:text-[20px] md:text-[30px] tracking-wide ">  Bringing Digital Dreams to Life, One Line at a Time</p>
        <div className="mx-auto">
          <Image src = "/assets/mf-avatar2.svg" alt="/" width={300} height={500} priority={true} />  
        </div>
        <div className="mx-auto py-10 text-center items-center">
           <Image src = "/assets/devices.svg" alt="/" width="1000" height="500" priority={true} /> 
        </div>
      
      </div>
    </div>
  )
}

export default Header