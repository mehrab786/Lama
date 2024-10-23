import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
      
      <h4 className='font-medium'>choose a color</h4>
      <ul className="flex items-center gap-3">
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500'>
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "></div>
        </li>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500'></li>
        <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-500'>
          <div className="absolute w-10 h-[2px] bg-red-400  rounded-full rotate-45  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  "></div>
        </li>
      </ul>
      <h4 className='font-medium'>choose a size</h4>
      <ul className="flex items-center gap-3">
        <div className="bg-pink-300 text-white rounded-md  py-1 px-4 cursor-not-allowed">Large</div>
        <div className="ring-1 ring-red-400 text-red-400 rounded-md  py-1 px-4 cursor-pointer">Medium</div>
        <div className="bg-red-400 text-white rounded-md  py-1 px-4 cursor-pointer">Small</div>
      </ul>
    </div>
  )
}

export default CustomizeProducts