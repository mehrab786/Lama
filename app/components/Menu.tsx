"use client"
import Link from 'next/link';
import { useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";

const Menu = () => {


    const [open,setOpen] = useState(false);

  return (
    <div>
        <CiMenuKebab className='cursor-pointer '
         onClick={()=>setOpen((prev)=>!prev)}/>
            {open && 
                <div className='absolute bg-slate-200 text-black left-0 top-20 w-full h-[calc(100vh-80px)]
                flex flex-col items-center justify-center gap-8 text-xl z-10'>
                    <Link href='/'>HomePage</Link>
                    <Link href='/'>Deals</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>About</Link>
                    <Link href='/'>Contact</Link>
                    <Link href='/'>Logout</Link>
                    <Link href='/'>Cart(1)</Link>
            

                
                </div>
            }


    </div>
  )
}

export default Menu