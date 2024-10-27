"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

const Search = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if (name) {
      router.push(`/list?${name}`);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get('name') as string;
      if (name) {
        router.push(`/list?${name}`);
      }
    }
  };

  return (
    <form
      ref={formRef}
      className="hidden md:flex md:flex-row md:flex-1 justify-between items-center gap-2 p-2 rounded-md bg-slate-100"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="bg-transparent md:flex-1 outline-none"
      />
      <Image src="/search.png" alt="Search" width={16} height={16} onClick={handleClick} />
    </form>
  );
};

export default Search;
