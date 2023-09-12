import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=" md:mx-auto mx-auto  ">
 
    <div className="mx-auto items-center text-center flex justify-center bg-darkbluebg p-10 flex">
        <Image src = "/assets/mlogo1.webp" alt="/" width="100" height="500" priority={true} /> 
    </div>
          
 
  
 
    </div>
  )
}

export default Header