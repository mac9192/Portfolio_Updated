"use client"
import React from 'react'
import Image from 'next/image'
import ProjectsCard from '../components/ProjectsCard'
 
import { genjutsuatl } from "../types/image-data"; 
import { PROJECT_DATA } from '../PROJECT_DATA'
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            45,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          450,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Projects = () => {
  
  return (
<div id="projects" className=" md:container md:mx-auto">
        <section className="text-gray-600 body-font">
  <div  className="  px-5 py-24 mx-auto flex flex-wrap">
    <div  className="flex w-full mb-20   rounded">
        <div className="flex flex-col mx-auto">
            <h1 className="text-center mx-auto sm:text-3xl md:text-[60px] font-medium title-font text-gray-900  lg:mb-0 mb-4 pb-8">My Recent Projects</h1>
      <p className="lg:pl-6 lg:w-3/3 mx-auto leading-relaxed text-black text-xl sm:text-3xl">Here are some of the projects I have workerd on throughout the course of my coding career:</p>
        </div>
      
    </div>
    <div>
        
    </div>
        <div className="flex flex-col lg:flex-row w-full mx-auto items-center text-center gap-x-10 gap-y-10">
            <div className="w-full">
                <div className="text-white  text-center mx-auto   ">
                    <div className=" flex flex-row w-full items-center text-center md:gap-x-10 sm:gap-x-1   ">

                     
                    <div className="w-1/2 text-white  bg-white rounded-[50px]  mx-auto card1   ">
                                <ProjectsCard project={PROJECT_DATA[0]}/>
                        </div>
                        
                        
                        <div className="w-1/2 text-white  bg-white rounded-[50px]   mx-auto   card1 ">
                                <ProjectsCard project={PROJECT_DATA[1]}/>
                        </div>
                    </div>

                 
                </div>
                <div className="w-full bg-white text-white items-center text-center mx-auto rounded-[50px] gap-y-10   mt-12 card1  ">
                       <ProjectsCard project={PROJECT_DATA[2]} />
                </div>
            </div>

            <div className="w-full   ">
            <div className="w-full   text-white items-center text-center rounded-[50px]   card1  ">
            <ProjectsCard project={PROJECT_DATA[3]} />
                </div>
                <div className="   text-white flex flex-row text-center mx-auto mt-12   ">
                    <div className=" flex w-full items-center text-center md:gap-x-10 sm:gap-x-1  ">
                        <div className="w-1/2   rounded-[50px]   card1 ">
                                <ProjectsCard project={PROJECT_DATA[4]}  />
                        </div>
                        <div className="w-1/2 bg-white  text-black rounded-[50px]   card1 ">
                                <ProjectsCard project={PROJECT_DATA[5]} />
                        </div>
                    </div>

                 
                </div>
               
            </div>
        </div>
        
   
    </div>
</section>
    
    </div>

    
  )
}

export default Projects

/*
 <div className=" ">
        <section className="text-gray-600 body-font">
  <div  className="  px-5 py-24 mx-auto flex flex-wrap">
    <div  className="flex w-full mb-20   rounded">
        <div className="flex flex-col mx-auto">
            <h1 className="text-center mx-auto sm:text-3xl md:text-[60px] font-medium title-font text-gray-900  lg:mb-0 mb-4 pb-8">My Recent Projects</h1>
      <p className="lg:pl-6 lg:w-3/3 mx-auto leading-relaxed text-2xl">Here are some of the projects I have workerd on throughout the course of my coding career:</p>
        </div>
      
    </div>
    <div>
        
    </div>
        <div className="flex flex-col lg:flex-row w-full mx-auto items-center text-center gap-x-5 gap-y-5">
            <div className="w-full">
                <div className="text-white  text-center mx-auto   ">
                    <div className=" flex flex-row w-full items-center text-center md:gap-x-2 sm:gap-x-1 ">
                        <p className="w-1/2 bg-bluebg min">1</p>
                        <p className="w-1/2 bg-black">1</p>
                    </div>

                 
                </div>
                <div className="w-full bg-bluebg text-white items-center text-center mx-auto  gap-y-5">
                    3
                </div>
            </div>

            <div className="w-full   ">
                <div className="   text-white flex flex-row text-center mx-auto   ">
                    <div className=" flex w-full items-center text-center md:gap-x-5 sm:gap-x-1 ">
                        <p className="w-1/2 bg-bluebg">1</p>
                        <p className="w-1/2 bg-black">1</p>
                    </div>

                 
                </div>
                <div className="w-full bg-bluebg text-white items-center text-center mx-auto">
                    3
                </div>
            </div>
        </div>
        
   
    </div>
</section>
    
    </div>



*/