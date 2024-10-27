import Image from 'next/image'
import React from 'react'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

const listPage = () => {
  return (
    <div className='px-4 md:px:8 lg:px:16 xl:px:32 2xl:px:64 relative '>
      {/* campaign */}
      <div className="hidden bg-pink-50  sm:flex  flex-row justify-between h-64 ">
        <div className="w-2/3 flex flex-col px-4 py-6 items-center justify-between gap-8">
            <h1 className="text-4xl font-semibold leading-[48px] text-gray-700 ">
              Grab up to 500% off on <br /> selected products 
            </h1>
            <button className="rounded-3xl bg-red-500 text-white px-5 py-3 w-max text-sm">Buy Now</button>
        </div>

     
      <div className="w-1/3 relative">
        <Image src='/woman.png' alt='campaign' fill className='object-contain' />
      </div>
      </div>
      {/* FILTER */}
      <Filter/>
      {/* PRODUCTS */}
      <h1 className='font-semibold text-xl mt-12 '>Shopping for You</h1>
      <ProductList/>
    </div>
  )
}

export default listPage