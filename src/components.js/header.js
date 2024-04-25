import React from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import LoginBtn from './loginBtn'



const Header = () => {
  return (
    <header className='bg-zinc-700 px-3 lg:px-24 py-5 flex items-center justify-between'>
        <div className='lg:hidden flex' >
            <Hamburger color="#7e7e7e"/>
        </div>
        <img src="./jordan-logo.webp" alt="" className='w-12' />
        
        <ul className='gap-9 text-gray-300 lg:flex hidden'>
            <li>MASCULINO</li>
            <li>FEMININO</li>
            <li>KIDS</li>
            <li>CALÇADOS</li>
            <li>ROUPAS</li>
        </ul>

        <div className='flex items-center gap-6'>
            <div className='md:flex hidden'>
                <LoginBtn/>
            </div>

            <div className='bg-red-700 cursor-pointer p-2 rounded-full'>
                
            

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>      
            </div>
        </div>
    </header>
  )
}

export default Header