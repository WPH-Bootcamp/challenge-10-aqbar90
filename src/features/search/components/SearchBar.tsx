'use client';

import { useState } from 'react';

import { Search } from 'lucide-react';

export function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className='relative w-full max-w-md'>
      <Search
        className='
          absolute
          left-3
          top-1/2
          size-4
          -translate-y-1/2
        '
      />

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search restaurant...'
        className='
          h-11
          w-full
          rounded-full
          border
          pl-10
          pr-4
        '
      />
    </div>
  );
}
