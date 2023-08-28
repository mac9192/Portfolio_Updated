import React from 'react'
import Image from 'next/image'
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {

    const { pending } = useFormStatus()
    //bg-gradient-to-r from-indigo-300 to-purple-400
  return (
    <button className="text-white bg-mintbg md:w-1/5 text-[30px] sm:w-full tracking-wide rounded-[50px] md:h-full sm:h-[100px]" disabled={pending}>
        { pending ? (
            <div className="h-12 w-12 animate-spin rounded-full mx-auto text-center border-b-4 border-bluebg"></div>
        ): (
            <>
                Submit
            </>
        )
        

        }
  
</button>
    
    
 
  )
}

export default SubmitBtn