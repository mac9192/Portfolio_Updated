import Image from 'next/image'

 

const Badge = ({badges}:{badges:any}) => {
  console.log('badge_page',badges)
 
  return (
      <div className="flex flex gap-x-3 gap-y-3 flex-wrap">
          {badges.map((badge:any) => (
              <span  key={badges }className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 gap-x-3 flex flex-row md:text-2xl sm:text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">{ badge}</span>
          ))}
          
            
          
      </div>

  
  )
}

export default Badge