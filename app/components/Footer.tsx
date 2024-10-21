import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-100 mt-24 text-sm   px-4 py-12 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
       {/* TOP */}
       <div className='flex justify-between gap-24 flex-col md:flex-row'>
          {/* LEFT */}
            <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 '>
              <Link href="/"><div className='text-2xl tracking-wide '>Mehrab</div></Link>
              <p>HDS Tower Cluster F Jumeriah Lake Towers Dubai Postal code 500001</p>
              <span className='font-semibold'>mehrabtarrar@gmail.com</span>
              <span className='font-semibold'>+971 52 6353632</span>
              <div className='flex flex-row gap-6 mt-1 '>
                <Link href="https:facebook.com"><img src='/facebook.png' alt='facebook icon' width={16} height={16}/></Link>
                <Link href="https:twitter.com" ><img src='/x.png' alt='twitter icon' width={16} height={16}/></Link>
                <Link href="https:instagram.com" ><img src='/instagram.png' alt='instagram icon' width={16} height={16}/></Link>
                <Link href="https:pinterest.com" ><img src='/pinterest.png' alt='linkedin icon' width={16} height={16}/></Link>
              </div>
            </div>
          {/* CENTER */}
            <div className='hidden flex justify-between w-1/2'>

            </div>
          {/* RIGHT */}
            <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
                <h1 className='font-medium text-lg'>Subscribe</h1>
                <p>Be the first to get the latest news about trends, promotions, and much more! </p>
                <div className='flex '>
                  <input type="text" placeholder='Email Address' className='p-4 w-3/4' />
                  <button className='w-1/4 bg-red-500 text-white'>JOIN</button>
             </div>
                  <span className='font-semibold'>Secure Payments</span>
                  <div className="flex justify-between">
                    <Image src='/discover.png' alt='payment methods' width={40} height={20}/>
                    <Image src='/skrill.png' alt='payment methods' width={40} height={20}/>
                    <Image src='/paypal.png' alt='payment methods' width={40} height={20}/>
                    <Image src='/mastercard.png' alt='payment methods' width={40} height={20}/>
                    <Image src='/visa.png' alt='payment methods' width={40} height={20}/>
                  </div>
                
            </div>
       </div>
    </div>
  )
}

export default Footer