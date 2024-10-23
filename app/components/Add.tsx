"use client"

import React, { useState } from 'react'

const Add = () => {

const [quantity,setQuantity] = useState(1);

const handleQuantitiy = (type: "i" | "d") => {
  if (type === "i" && quantity < 4) {
    setQuantity(quantity + 1);
  } else if (type === "d" && quantity > 1) {
    setQuantity(quantity - 1);
  }
 
}

  return (
    <div className='flex flex-col gap-4'>
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
         <div className="flex w-32 rounded-3xl  bg-gray-100 py-2 px-4 justify-between">
          <button className='cursor-pointer text-xl' onClick={()=>handleQuantitiy("d")}>-</button>
          {quantity}
          <button  className='cursor-pointer text-xl' onClick={()=>handleQuantitiy("i")}>+</button>
        </div>
      </div>
        <div className="text-xs">Only <span className='text-orange-400'>4 items</span> left! <br /> {"Don't"} miss it</div>

        
      </div>
      <button className='w-36 text-sm rounded-3xl ring-1 ring-red-400 py-2 px-4 hover:bg-red-400 hover:text-white disabled:bg-pink-200 disabled:text-white disabled:ring-none '>Add to Cart</button>
    </div>
  )
}

export default Add