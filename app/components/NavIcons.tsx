"use Client"
import Image from 'next/image'
import React from 'react'

const NavIcons = () => {
  return (
    <div className='hidden md:flex md:flex-row items-center justify-between gap-4 p-4'>
        <Image src='/profile.png' alt='' height={22} width={22}/>
        <Image src='/notification.png' alt='' height={22} width={22}/>
        <Image src='/cart.png' alt='' height={22} width={22}/>
    </div>
  )
}

export default NavIcons