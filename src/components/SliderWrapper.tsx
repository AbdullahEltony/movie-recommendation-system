import React from 'react'

const SliderWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-[#181818] rounded-lg p-4 w-[95%] mx-auto overflow-hidden'>
        {children}
    </div>
  )
}

export default SliderWrapper