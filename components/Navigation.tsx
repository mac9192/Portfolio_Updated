"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from "next/link"
import Dropdown from './Dropdown'
import { usePathname } from 'next/navigation'
 






const Navigation = () => {

    const location = usePathname()
    console.log('location')
 

   console.log('location',location)
 

    //Mobile -- Lang(To Do)

 
const [toggle, setToggle] = useState(false)

    return (
  /* 
     
      <div className=" md:block hidden ">

         <div className=" relative isolate flex   items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          
           
            <div className="container   flex justify-between flex-wrap items-center  gap-y-2 gap-x-4">
                <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold bg-rose-500 text-white  rounded-full  p-2">Call us at (770)-864-4063</strong> 
                </p>
              
                <div className="flex justify-center space-x-2">
  
  
                
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-instagram.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-facebook.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-twitter.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-youtube.svg" alt="/" width="70" height="50" />
            

 
                </div>
           
              
            </div>
            
            <div className="flex flex-1 justify-between">
                
            </div>
        </div>


         </div>
     
     
     */
 
       
<nav className=" p-5 relative mx-auto p-5 bg-white sticky">

        <div className="flex items-center justify-between  container  mx-auto sticky   ">
        <Link className="text-lg font-bold text-white" href="/">
        <Image src = "/assets/mlogo1.webp" alt="/" width="130" height="50" priority={true} /> 
            
          </Link>
            <div className="hidden md:flex flex space-x-6 text-md text-black ">
            <ul className=" hidden md:flex flex items-center gap-4 text-neutral-600 text-black">
            <Link href="/"className="text-[25px] p-5 text-black font-light text-md">
                      Home
                    </Link>

                    {location  !== '/resume' && (
          <li className="text-[25px] p-5 text-black font-light text-md">   <a className="text-md" href="#projects">Projects</a></li>
        )}

                     
          
                    <Link href="/resume"className="text-[25px] p-5 text-black font-light text-md">
                        Resume
                    </Link>
                  <li>
                  <a href="#contact"
                        type="button"
                        className="inline-block bg-white rounded-full border-[3px] border-bluebg px-6 pb-[12px] pt-3 text-[20px] font-medium uppercase leading-normal text-bluebg transition duration-150 ease-in-out hover:border-primary-600 hover:bg-bluebg  hover:text-white focus:border-primary-600 focus:text- focus:outline-none focus:ring-0 active:border-purplebg active:text-purplebg "
                             data-te-ripple-init>
               Lets Talk!
                    </a>
                    </li>
           
                </ul>
              
            </div>
 
       
 {/*Hamburger Icon - comes up when sm screens*/}
                 <button id="menu-btn"   aria-label="search" className={`${!toggle ? '' :'open' } block hamburger md:hidden focus:outline-none`} 
                    onClick={() =>setToggle(!toggle)}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
                  
            </button>
        </div>
        {/*Mobile Menu*/}
        <div>{!toggle ? "": <Dropdown  />}</div>
         
        </nav>
 

    )


}


export default Navigation;
