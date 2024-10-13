'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams(); // Get the current URL search params
  const pathname = usePathname(); // Get the current path
  const { replace } = useRouter(); // Get the router's replace method

  function handleSearch(term) {
    const params = new URLSearchParams(searchParams); // Create a new URLSearchParams instance
    if (term) {
      params.set('query', term); // Set the query parameter to the user's input
    } else {
      params.delete('query'); // Delete the query parameter if the input is empty
    }
    replace(`${pathname}?${params.toString()}`); // Update the URL with the new params
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search" // Add an ID for accessibility
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder="Search invoices..."
        onChange={(e) => {
          handleSearch(e.target.value); // Call handleSearch on input change
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
