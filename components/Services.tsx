import React from 'react'
import Image from 'next/image'
import { PROJECT_QUALIFICATIONS } from '../PROJECT_DATA'

const Services = () => {

  const qualifications1 = PROJECT_QUALIFICATIONS[0].skills 
  const qualifications2 = PROJECT_QUALIFICATIONS[1].skills
  const qualifications3 = PROJECT_QUALIFICATIONS[2].skills
  console.log(qualifications1)
   

  return (



    <div className="md:container md:mx-auto flex-col md:flex-row rounded-[50px]  mx-auto md:mt-[-240px] md:mt-[-200px] ">
      <div className="flex flex-col md:flex-row p-10  ">
     <div className="w-1/3 bg-white md:rounded-l-[50px]   border  border-b border-l w-full    tracking-wide">

{
/*
       <div className="flex flex-col mx-auto text-center items-center tracking-wide">
          
          {PROJECT_QUALIFICATIONS.map((qualification, index) => (
            <div className="border b-2" key={qualifications1}>
                {qualification.title}
             </div>
          ))}
           
       </div>

*/
}

    
     <div className="flex flex-col mx-auto text-center items-center tracking-wide">
          
       
               <Image className="p-3" src = "/assets/icon1.svg" alt="/" width="100" height="500" priority={true} /> 
                <div className="text-4xl">Designer</div>
                <div className="p-7 text-2xl sm:text-xl">I value quality within content structure, clean and inviting designs and designs and design.</div>
                <div className="p-2 text-2xl text-bluebg">Things I enjoy designing:</div>
                <div className="pb-5 text-2xl sm:text-xl">UX, UI, Web, Apps, Logos</div>
                <div className="p-5 text-2xl text-bluebg ">Design Tools:</div>
                <div className="text-2xl">
             
            
                <ul>{qualifications1.map((qualification, index)=> (
                    <li key={index} className="flex flex-col gap-x-3 y-3">
                      <div className=""> {qualification} </div> 
                    </li>
                  ))
                }
                </ul>
      
               

                </div>
                
            </div>
      </div>
      <div className="w-1/3 bg-white  border-r   border border-l border-b w-full  ">
      <div className="flex flex-col mx-auto text-center items-center tracking-wide  ">
               <Image className="p-3" src = "/assets/icon2.svg" alt="/" width="100" height="500" priority={true} /> 
                <div className="text-4xl">Frontend Developer</div>
                <div className="p-7 text-2xl sm:text-xl">I like to code things from scratch and enjoy watching designs come to life on the browser.</div>
                <div className="p-2 text-2xl text-bluebg">Languages I Speak:</div>
                <div className="pb-5 text-2xl sm:text-xl">JavaScript, TypeScript HTML, CSS</div>
                <div className="p-5 text-2xl text-bluebg">Dev Tools:</div>
                <div className="text-xl">
                <ul>{qualifications2.map((qualification, index)=> (
                    <li key={index} className="flex flex-col gap-x-3 y-3">
                      <div className=""> {qualification} </div> 
                    </li>
                  ))
                }
                </ul>

                </div>
                
            </div>
      </div>
      <div className="w-1/3 bg-white md:rounded-r-[50px] border   border-b border-r w-full   ">
            <div className="flex flex-col mx-auto text-center items-center tracking-wide   h-full">
               <Image className="p-3"src = "/assets/icon3.svg" alt="/" width="100" height="500" priority={true} /> 
                <div className="text-4xl">Block Chain</div>
                <div className="p-7 text-2xl sm:text-xl">Navigating the Cosmos: My Journey in Powering the Future of Blockchain through Proof of Stake.</div>
                <div className="p-2 text-2xl text-bluebg">Things I enjoy in blockchain:</div>
                <div className="pb-5 text-2xl sm:text-xl">UX, UI, Web, Apps, Logos</div>
                <div className="p-5 text-2xl text-bluebg">Blockchain Tools:</div>
                <div className="text-2xl">
                <ul>{qualifications2.map((qualification, index)=> (
                    <li key={index} className="flex flex-col gap-x-3 y-3">
                      <div className=""> {qualification} </div> 
                    </li>
                  ))
                }
                </ul>

                </div>
                
            </div>
      </div>
      </div>
 
 
    
    </div>
  )
}

export default Services