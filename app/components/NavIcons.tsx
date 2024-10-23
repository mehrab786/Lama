"use Client"
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import CartModal from './CartModal';

const NavIcons = () => {

  const [isProfileOpen,setIsProfileOpen] =useState(false);
  const [isCartOpen,setIsCartOpen] =useState(false);

  const router = useRouter();

  const isLoggedIn = false; // replace with your logic here
 
 
  const handleProfile = () => { 
    if(!isLoggedIn){
      router.push('/login');
    }
    setIsProfileOpen((prev) =>!prev);
    }


  return (
    <div className='hidden md:flex md:flex-row items-center justify-between gap-4 p-4 relative'>
        <Image src='/profile.png' alt='' height={22} width={22} className='cursor-pointer' onClick={handleProfile}/>
        {isProfileOpen && 
        <div className='absolute rounded-md text-sm top-12 left-0 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div> 
        </div> }
        <Image src='/notification.png' alt='' height={22} width={22} className='cursor-pointer'/>
      <div className='relative cursor-pointer' onClick={()=>setIsCartOpen((prev)=>!prev)}> 
      <Image src='/cart.png' alt='' height={22} width={22} className='cursor-pointer' />
       <div className='absolute bg-red-500 text-sm rounded-full text-white h-6 w-6 flex items-center justify-center -top-4 -right-4'>2</div>
      </div>
      {isCartOpen && <CartModal/>} 
    </div>
  )
}

export default NavIcons