import React from 'react'
import { Link } from 'react-router-dom';

const SeeAllBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });}

  return (
    <div>
      <Link to='/Calçados' onClick={scrollToTop}>
        <button className='bg-red-700 text-white  min-w-36 py-2.5'>
            VER TODOS
        </button>
        </Link>
    </div>
  )
}

export default SeeAllBtn