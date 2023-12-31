import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="bg-bluebg   w-full flex sm:flex-col md:flex-row text-white md:mx-auto w-full rounded-[50px] p-8 relative mt-5  ">
     
      <div className="md:w-3/5"> 
         <h2 className="md:text-[32px] sm:text-[18px] tracking-wide">GET IN TOUCH!</h2>
         <h3 className="md:text-[60px] sm:text-[38px] sm:py-3 tracking-wide">Do you have a question, an idea, or a project you need help with?</h3>
         <h4 className="md:text-[50px] sm:text-[30px]  tracking-wide" >Contact me!</h4>
         <div className="flex flex-row p-3 gap-x-6">
           <a href="https://github.com/mac9192">
              <Image src = "/assets/linkedin1.svg" alt="/" width="50" height="100" priority={true} /> 
           </a>
          <a href="https://www.linkedin.com/in/miguel-colmenares-a32537119/">
            <Image src = "/assets/github1.svg" alt="/" width="50" height="100" priority={true} /> 
          </a>
           
         </div>
         
         <div className="flex flex-col flex  py-10">
         
            <div className="flex flex-row gap-x-10">
               
               
            </div>
        </div>

      </div>
  
        <div className="absolute bottom-0 right-20  sm:hidden md:block">
           <Image src = "/assets/computer2.svg" alt="/" width="270" height="500" priority={true} /> 
        </div>
           
    
    </div>
  )
}

export default Contact
/*

    <div className="container mx-auto rounded rounded-[50px] border md:flex-row  p-10 tracking-wide w-4/5">
        <h2 className="text-[24px]">GET IN TOUCH!</h2>
        <h3>Do you have a question, an idea, or a project you need help with?</h3>
        <h4>Contact us!</h4>
        <div className="flex flex-col">
            <div className="flex flex-row">
                  <button>miguel@email.com</button>
                  <button>770-864-4063</button>
            </div>
            <div className="flex flex-row">
                  <button>miguel@email.com</button>
                  <button>770-864-4063</button>
                  <button>770-864-4063</button>
            </div>
        </div>
        <div className="flex-1/5">
          <p>hello</p>
        </div>
    </div>
*/