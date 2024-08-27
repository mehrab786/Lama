"use Client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Search = () => {

  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    const formData =  new FormData(e.currentTarget);
    const name=formData.get('name') as string;
    if (name) {
      router.push(`/list?${name}`);
    }
  }
  return (
    <form className='hidden md:flex md:flex-row md:flex-1 justify-between items-center gap-2 p-4 rounded-md
     bg-slate-100' onSubmit={handleSearch}>
      <input type="text" name='name' placeholder="Search" className='bg-transparent md:flex-1 outline-none' />
      <Image src= '/search.png' alt='' width={16} height={16} />
    </form>
  )
}

export default Search