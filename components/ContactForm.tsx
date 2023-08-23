import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div id="contact" className="flex sm:flex-col md:flex-row w-full text-white tracking-wide py-1">
    <form className="w-full flex md:flex-row sm:flex-col gap-x-3">
        <div className ="flex-col w-full">
              <div className="w-full flex md:flex-row sm:flex-col">
            <input type="name" id="name" className="w-full bg-bluebg tracking-wide border rounded-[50px] text-[30px] text-center md:h-40 sm:h-20  text-white placeholder-white  focus:outline-none  focus:border-mintbg border-4 border-solid p-10  " placeholder="name" required/>
        
            <input type="email" id="email" className="w-full bg-bluebg tracking-wide border rounded-[50px] text-[30px] text-center  md:h-40 sm:h-20 h-40 placeholder-white focus:outline-none  focus:border-mintbg border-4 border-solid p-10" placeholder="email" required/>
            <input type="subject" id="subject" className="w-full bg-bluebg  border rounded-[50px] text-[30px] text-center md:h-40 sm:h-20 h-40 placeholder-white focus:outline-none  focus:border-mintbg border-4 border-solid p-10" placeholder="subject" required/>
        
            </div>
            <div className="py-1">
                 <textarea id="message"  className=" w-full bg-bluebg rounded-[50px] tracking-wide h-[500px] py-10 text-[30px]  text-white placeholder-white text-center align-center justify-center items-center " placeholder="Leave a comment..."></textarea>
            </div>
      
        </div>
      
      
        <button className="text-white bg-mintbg md:w-1/5 text-[30px] sm:w-full tracking-wide rounded-[50px] md:h-full sm:h-[100px]">
            Submit
        </button>
    </form>
        
      
      
    </div>
  )
}

export default Header

/*


     <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>

*/