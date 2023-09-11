"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Project} from "../types/collection"
import {Tilt} from 'react-tilt'



const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            5,     // max tilt rotation (degrees)
	perspective:    700,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.0,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          800,   // Speed of the enter/exit transition
	transition:     false,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


interface ProjectProps {
    project:Project,
 
}



const ProjectsCard = ({project}:ProjectProps) => {
 
 
    //bg-gradient-to-r from-indigo-300 to-purple-400
  return (
 
  
    <Tilt options={defaultOptions}  >
    <div className=" flex flex-col   border  hover:    hover:border-bluebg w-full bg-color1 text-black min rounded-[50px] sm:min-h-[300px] relative lg:min-h-[370px] p-10 mx-auto align-center justify-center flex ">
    <Image
      layout="fill"
      className="object-center items-center mx-auto object-contain pointer-events-none p-5  flex "
      src={project?.image}
      alt="/"
    />
   
   <Link className=""href={`/projects/${project?.slug}`}>
       <Image
      
      className="object-center absolute bottom-0 right-0 onhover:bg-bluebg  mt-auto flex items-center mx-auto object-contain   p-10  flex "
      src='/assets/arrow.svg'
      height={100}
      width={105}
      alt="/"
    />
    </Link>

    <a className=""href={project.url}>
         <Image
      
      className="object-center absolute bottom-0 left-0   mt-auto flex items-center mx-auto object-contain   p-10  flex "
      src='/assets/link.svg'
      height={200}
      width={105}
      alt="/"
    />
    </a>
     

 

</div>

 </Tilt>
   
 
 
  )
}

export default ProjectsCard

/*



*/