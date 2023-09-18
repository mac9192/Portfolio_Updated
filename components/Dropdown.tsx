import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation' 

const Dropdown = () => {

    const location = usePathname()
  return (
    <div>
        <div className="md:hidden">
     
     <nav className=" border-gray-200 bg-bluebg  rounded ">
        
         <div id="mega-menu-full-image-dropdown" className="mt-1   g-purplebg border-gray-200 shadow-sm border-y    ">
             <div className="grid rounded max-w-screen-xl px-4 py-5 mx-auto text-md text-gray-500   md:grid-cols-3 md:px-6">
               
                 <ul className="mb-4 space-y-4 md:mb-0 text-white p-5">
                 
                 
                  
                    <li>
                        <Link href={`/`}>Home</Link>
                    </li>
                    {location  !== '/resume' && (
          <li >   <a className="text-md" href="#projects">Projects</a></li>
        )}
                    <li>
                        <Link href={`/resume`}>Resume</Link>
                    </li>
                 
                    <li>
                    <a href="#contact">Contact Me</a>
                    </li>
                    
                  
                    <li>
                 
                </li>
                 </ul>
            
             </div>
         </div>
     </nav>
     
         </div>
    </div>
  )
}

export default Dropdown
