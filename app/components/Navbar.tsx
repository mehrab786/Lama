"use client"
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'
import Search from './Search'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:8 lg:16 xl:32 2xl:64 relative'>
      <div className='h-full justify-between items-center flex md:hidden'>
        {/* Mobile */}
       <Link href='/'>
         <div className='text-2xl tracking-wide '>Mehrab</div>
      </Link>
            <Menu/>
      </div>

      {/* bigger  screens */}
      <div className="hidden md:flex justify-between items-center gap-8 h-full">
        {/* Left side */}
        <div className="w-1/3">
          <Link href='/' className='md:flex md:flex-row gap-3'>
          
            <Image src='/logo.png' width={24} height={24} alt='logo image'/>
            <div className='text-2xl tracking-wide '>Mehrab</div>
          </Link>

        </div>
        {/* right side */}
        <div className="w-2/3 flex justify-between gap-8 items-center flex-row">
          <Search/>
          <NavIcons/>
        </div>
      </div>
    </div>
  )
}

export default Navbar