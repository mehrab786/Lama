import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image 
              className='absolute object-cover rounded-md'
               src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt="" 
               fill 
               sizes='25vw'/>
            <Image className='absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500' 
             src="https://images.pexels.com/photos/2466756/pexels-photo-2466756.jpeg?auto=compress&cs=tinysrgb&w=600" 
             alt="" 
             fill 
             sizes='25vw'/>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$42</span>
            </div>
            <div className="text-sm text-gray-500 ">My Description</div>
            <button className='px-4 py-2 ring-1 rounded-2xl ring-red-500 w-max text-red-500 hover:bg-red-500 hover:text-white'>Add to Cart</button>

        </Link>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image 
              className='absolute object-cover rounded-md'
               src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt="" 
               fill 
               sizes='25vw'/>
            <Image className='absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500' 
             src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" 
             alt="" 
             fill 
             sizes='25vw'/>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$42</span>
            </div>
            <div className="text-sm text-gray-500 ">My Description</div>
            <button className='px-4 py-2 ring-1 rounded-2xl ring-red-500 w-max text-red-500 hover:bg-red-500 hover:text-white'>Add to Cart</button>

        </Link>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image 
              className='absolute object-cover rounded-md'
               src="https://images.pexels.com/photos/902030/pexels-photo-902030.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt="" 
               fill 
               sizes='25vw'/>
            <Image className='absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500' 
             src="https://images.pexels.com/photos/4672246/pexels-photo-4672246.jpeg?auto=compress&cs=tinysrgb&w=600" 
             alt="" 
             fill 
             sizes='25vw'/>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$42</span>
            </div>
            <div className="text-sm text-gray-500 ">My Description</div>
            <button className='px-4 py-2 ring-1 rounded-2xl ring-red-500 w-max text-red-500 hover:bg-red-500 hover:text-white'>Add to Cart</button>

        </Link>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
            <div className='relative w-full h-80'>
              <Image 
              className='absolute object-cover rounded-md'
               src="https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=600" 
               alt="" 
               fill 
               sizes='25vw'/>
            <Image className='absolute object-cover rounded-md hover:opacity-0 transition-opacity easy duration-500' 
             src="https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=600" 
             alt="" 
             fill 
             sizes='25vw'/>
            </div>
            <div className='flex justify-between'>
              <span className='font-medium'>Product Name</span>
              <span className='font-semibold'>$42</span>
            </div>
            <div className="text-sm text-gray-500 ">My Description</div>
            <button className='px-4 py-2 ring-1 rounded-2xl ring-red-500 w-max text-red-500 hover:bg-red-500 hover:text-white'>Add to Cart</button>

        </Link>
        
    </div>
  )
}

export default ProductList