import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        <Link href='/test' className='relative w-full h-80'>
            <Image src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" fill sizes='25vw'/>
        </Link>
    </div>
  )
}

export default ProductList