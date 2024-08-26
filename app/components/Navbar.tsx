import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:8 lg:16 xl:32 2xl:64 relative'>
      <div className='h-full justify-between items-center flex'>
      {/* Mobile */}
      <Link href='/'>
      <div className='text-2xl tracking-wide '>Mehrab</div>
      </Link>
      <Menu/>
      </div>
    </div>
  )
}

export default Navbar