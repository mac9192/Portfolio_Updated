import React from 'react'
import Image from 'next/image'

const Resume = () => {
  return (

    <div className=" bg-purplebg">
            <div className="min-w-full     p-14 ">
            <h2 className="text-center mx-auto sm:text-3xl md:text-[60px] font-medium title-font text-white  lg:mb-0 mb-4 pb-8">My Current Resume</h2>
        <iframe className="w-full h-screen " src="/assets/mc_res.pdf" frameBorder="100"></iframe>
    </div> 
    </div>

  )
}

export default Resume