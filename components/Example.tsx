"use client"
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { genjutsuatl,visionTech } from "../types/image-data"; 
import {Project} from "../types/collection"
import { PROJECT_DATA} from '../PROJECT_DATA'

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

 

const Example = ( {project}:{project:any}) => {



//  const gallery = PROJECT_DATA.find((project) => project.slug === params?.slug)
//image.name
//image = PROJECT_DATA_IMAGESSS.find(image) =>project.image === params?.slug (Look @ how Udemy did categories)
//Find the project data images array that is eqeal to params?.slug show that array (genjustuatl)

 
  const isEqual = true

  console.log(project)
 

  const image = project?.image
  const image1 = project?.image1
  const image2 = project?.image2
  const image3 = project?.image3
  const image4 = project?.image4
  const image5 = project?.image5

  const images = [image1,image2,image3,image4,image5,image]
  console.log('last',images, typeof images)

  console.log('concated101:',image1,image2,image3,image4,image5,image, typeof image3, typeof images, typeof project)
  console.log('original form:',visionTech, typeof visionTech)
  console.log('image length:', images.length)

  const [[page, direction], setPage] = useState([0, 0]);

  
  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
 
  const imageIndex = wrap(0, images.length, page);
  //console.log('imageIndex:' ,imageIndex)
 
  

 const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

//console.log('images:::::',images[0], images.length, typeof images)
//console.log('length:',images.length)
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
   
          src={images[imageIndex]}
          className=" img1"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};
export default Example