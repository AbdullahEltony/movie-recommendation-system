import React from 'react'

const SectionTitle = ({title}:{title:string}) => {
  return (
    <div className='flex gap-2 items-center mb-4 ml-4 sm:ml-8'>
        <span className='w-[7px] inline-block h-[25px] mt-1 bg-primary rounded-lg'></span>
        <h1 className="text-xl sm:text-3xl font-bold">{title}</h1>
    </div>
  )
}

export default SectionTitle
