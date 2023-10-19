import {FC} from 'react'
import Image from 'next/image'

import robot from '../public/assets/robot.svg'

interface ChatHeaderProps {}


const ChatHeader: FC<ChatHeaderProps> = () =>{

    return (

        <div className='flex w-full gap-3 justify-start items-center text-zinc-800'>
            <div className='flex flex-col items-start text-sm'>
              
                <div className='flex gap-1.5 items-center'>
                <Image className="rounded" src={robot} alt="/" width="30" height="50" priority={true} />
                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                    <p className="font-medium"> PortfolioBot OpenAI Powered Chatbot</p>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader