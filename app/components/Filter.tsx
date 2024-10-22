import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex  justify-between lg:px-8'>
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
                <option value="type">Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>

            <input 
                type="text"
                name='min'
                placeholder='Min Price'
                className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
             />

            <input 
                type="text"
                name='max'
                placeholder='Max Price'
                className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400'
             />

            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100 onC'>
                <option value="type">Color</option>
                <option value="">Test</option>
                
            </select>

            <select name="ribbon" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
                <option value="">Category</option>
                <option value="">New Arrival</option>
                <option value="">Popular</option>
            </select>
            <select name="" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
                <option value="">All Filters</option>
            </select>
        </div>
        <div className="">
        <select name="" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-100'>
                <option >Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Price (Newest)</option>
                <option value="">Price (Oldest)</option>
            </select>
        </div>
    </div>
  )
}

export default Filter