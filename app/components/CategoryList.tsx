import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
        <div className="flex gap-4 md:gap-8">
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/5886043/pexels-photo-5886043.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>

            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/2896430/pexels-photo-2896430.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/9810903/pexels-photo-9810903.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/6153367/pexels-photo-6153367.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/14579191/pexels-photo-14579191.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/219023/pexels-photo-219023.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
            <Link href='/list?cat=test' className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6' >
                <div className="relative w-full h-96 bg-slate-500">
                 <Image className='object-cover ' 
                     src="https://images.pexels.com/photos/6069982/pexels-photo-6069982.jpeg?auto=compress&cs=tinysrgb&w=600" 
                     alt="" 
                     fill 
                     sizes='20vw'/>
                </div>
                <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
            </Link>
        </div>
    </div>
  )
}

export default CategoryList