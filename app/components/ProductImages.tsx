"use client"
import Image from 'next/image'
import React, { useState } from 'react'


const images= [
    {
        id: 1,
        url: "https://images.pexels.com/photos/10037708/pexels-photo-10037708.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=279.825&fit=crop&h=453.05",
        alt: "Product 1",
    },
    {
        id: 2,
        url: "https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 2",
    },
    {
        id: 3,
        url: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 3",
    },
    {
        id: 4,
        url: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 4",
    },
    {
        id: 5,
        url: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 4",
    },
    {
        id: 6,
        url: "https://images.pexels.com/photos/3317434/pexels-photo-3317434.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 4",
    },
    {
        id: 7,
        url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Product 4",
    },
    {
        id: 8,
        url: "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=600",
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