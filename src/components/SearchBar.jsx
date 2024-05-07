import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="Como podemos ajudar?"
        value={query}
        onChange={handleChange}
        className="py-2 px-4 focus:outline-none "
      />
      <button
        type="submit"
        className=" text-white py-2 px-4  "
      >
        <SearchIcon className='text-gray-400' />
      </button>
    </form>
  );
};

export default SearchBar;

