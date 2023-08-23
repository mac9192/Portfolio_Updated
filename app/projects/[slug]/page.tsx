//Individual Project Page
"use client"
import { PROJECT_DATA } from '../../../PROJECT_DATA'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import { genjutsuatl } from "../../../types/image-data"; 
import Example from '../../../components/Example'
import Contact from '../../../components/Contact';
import Badge from '../../../components/Badge'


 

const ProjectsPage = ({ params}: { params: {slug: string;};
}) => {


    const project = PROJECT_DATA.find((project) => project.slug === params?.slug)
     
                                                  //image.name
    //image = PROJECT_DATA_IMAGESSS.find(image) =>project.image === params?.slug (Look @ how Udemy did categories)
    //Find the project data images array that is eqeal to params?.slug show that array (genjustuatl)

    console.log(project?.slug)
   
    console.log('new badges',project?.badges)
    return (
    <div id="projects"   className="  mb-[120px]">
        <div className="example-container   ">
          <Example project={project} />
        </div>
        <div  className="md:container md:mx-auto text-left   p-5">
        <div className="text-[72px] sm:text-[50px] text-center text-bluebg  text-left tracking-wide   ">
              {project?.title}
        </div>
        <div className= "md:text-[24px] sm:text-[18px] text-center text-bluebg  text-left tracking-wide   ">
        <a href={project?.url}>{project?.url}</a>
        </div>
            <div className="flex-row flex text-center mx-auto text-center justify-center p-10 gap-x-10">
                <div className="text-[24px] text-center text-black tracking-wide gap-x-5 flex-row flex  ">
                 
                    <Badge badges={project?.badges} />
                </div>
                 
            </div>
             
        <div className="md:text-[32px] sm:text-[24px] md:leading-[65px] sm:leading-[45px]">
            <div>
                  {project?.intro}
            </div>
            <div className="py-5">
                  {project?.techUsed}
            </div>
            <div className="py-5">
                  {project?.issues}
            </div>
            <div className="py-5">
                  {project?.learned}
            </div>
               
        </div>
     
    </div>
   
        
    
  
    </div>
  
  )
}

export default ProjectsPage


/*

<div className="md:container md:mx-auto text-left   p-5">
            <div className="text-[72px] text-center text-bluebg  text-left tracking-wide   ">
                  {project?.title}
            </div>
                <div className="flex-row flex text-center mx-auto text-center">
                    <div className="text-[24px] text-center text-black tracking-wide   ">
                         badge1
                    </div>
                    <div className="text-[24px] text-center text-black tracking-wide   ">
                         badge1
                    </div>
                </div>
                 
            <div className="text-[32px]">
                   {project?.description}
            </div>
         
        </div>

*/