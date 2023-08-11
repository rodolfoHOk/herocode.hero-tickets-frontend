'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const NavBar = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    const queryString = encodeURIComponent(search);
    router.push(`/filter-events?q=${queryString}`);
  };

  return (
    <nav className="bg-blue flex mx-auto px-6 absolute top-0 w-full h-16 items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={250}
        height={64}
        className="mr-[6rem]"
      />

      <div className="flex items-center w-[50vw]">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          type="text"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
          onChange={(event) => setSearch(event.target.value)}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
      </div>
    </nav>
  );
};
