import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FadeInSection from '../components/FadeinSection';


const SearchBar = () => {
  return (
    <FadeInSection>
    <div>
        <div className='bg-white justify-center  px-3 lg:px-24 py-5 flex items-center'>
        <form  className="flex items-center border border-gray-300 rounded-md overflow-hidden">
      <input
        type="text"
        placeholder="O que esta procurando?"
        className="py-2 px-4 focus:outline-none "
      />
      <button
        type="submit"
        className=" text-white py-2 px-4  "
      >
        <SearchIcon className='text-gray-400' />
      </button>
    </form>
        </div>
    </div>
    </FadeInSection>
  )
}

export default SearchBar