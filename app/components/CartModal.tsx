"use client"

import Image from 'next/image';
import React from 'react'
const CartModal = () => {

const cartItems = true; // replace with your logic here


  return (
    <div className='absolute p-4 rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 w-max '>
        {!cartItems ? (
            <div>Your cart is empty.</div>
        ) : (

            // list
        <>
        <div className='flex flex-col gap-8'>
            {/* cart items */} 
            <div className='flex gap-2 p-3'>
                    <Image src= "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' height={96} width={72} className='rounded-md object-cover '/>
                <div className='flex flex-col justify-between w-full '> 
                {/* top section */}
                   <div className='flex gap-8 items-center justify-between'> 
                     {/* tittle */}
                     <h3 className='font-semibold'>Product Name</h3>
                     <div className='p-1 bg-gray-50 rounded-sm'> $49 </div>
                   </div>
                    {/* description */}
                    <div className='text-sm text-gray-500'> Product Description </div>

                {/* bottom section */}
                <div className='flex justify-between text-sm'>
                    <span className='text-gray-500'>Qty. 2</span>
                    <span className='text-blue-400 cursor-pointer '>Remove</span>
                 </div>
                </div>
            </div>

               {/* cart items */} 
               <div className='flex gap-2 p-3'>
                    <Image src= "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600" alt='' height={96} width={72} className='rounded-md object-cover '/>
                <div className='flex flex-col justify-between w-full '> 
                {/* top section */}
                   <div className='flex gap-8 items-center justify-between'> 
                     {/* tittle */}
                     <h3 className='font-semibold'>Product Name</h3>
                     <div className='p-1 bg-gray-50 rounded-sm'> $49 </div>
                   </div>
                    {/* description */}
                    <div className='text-sm text-gray-500'> Product Description </div>

                {/* bottom section */}
                <div className='flex justify-between text-sm'>
                    <span className='text-gray-500'>Qty. 2</span>
                    <span className='text-blue-400 cursor-pointer '>Remove</span>
                 </div>
                </div>
            </div>
        </div>
                
       {/* bottom */}
        <div className=''>
            <div className='flex items-center justify-between font-semibold'>
                <span className=''>Subtotal</span>
                <span className="">$49</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>loren sfhsbf fhefb ksjgfn </p>
            <div className="flex justify-between items-center text-sm">
                <button className='py-2 px-4 bg-gray-500 text-white rounded-md'>Checkout</button>
                <button className='py-2 px-4 text-gray-500 rounded-md'>Continue Shopping</button>
            </div>
        </div>
        </>
        )}
    </div>
  )
}

export default CartModal