"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const images= [
    {
        id: 1,
        url: "https://images.pexels.com/photos/29012757/pexels-photo-29012757/free-photo-of-close-up-of-modern-smartphone-with-triple-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 1",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/29020349/pexels-photo-29020349/free-photo-of-modern-smartphone-on-wooden-surface.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 2",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/29005357/pexels-photo-29005357/free-photo-of-infinix-zero-30-smartphone-unboxing-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 3",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/29004276/pexels-photo-29004276/free-photo-of-minimalist-white-smartphone-case-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 4",
    }
]

const ProductImages = () => {

    const [index,setIndex] = useState(0)
  return (
    <div className=''>

        <div className="h-[500px] relative">

            <Image 
                src={images[index].url}
                alt=''
                fill
                sizes='50vw'
                className='object-cover rounded-md'
            />

             

        </div>

        <div className="flex justify-between gap-4 mt-8 cursor-pointer">
           {images.map((img,i)=>(
            <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={()=>setIndex(i)}>
                <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes='30vw'
                    className='object-cover rounded-md'
                />
            </div>
           ))}
        </div>

    </div>
  )
}

export default ProductImages