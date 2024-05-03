import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import LoginBtn from './loginBtn'
import SearchIcon from '@mui/icons-material/Search';
import TemporaryDrawer from './mobileHeader';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import FadeInSection from './FadeinSection';



const Header = () => {
    return (
    <header className='bg-zinc-700 px-3 lg:px-24 py-5 flex items-center justify-between'>
        <div className='lg:hidden flex z-50' >
            <TemporaryDrawer/>
        </div>

        <FadeInSection>
        <div>
        <img src="./jordan-logo.webp" alt="" className='w-12 hidden sm:flex' />
        </div>
        </FadeInSection>

        <div className='hidden lg:flex'>
        <Navbar layout="horizontal" applyFadeEffect={true} />
        </div>

       <FadeInSection>
        <div className='flex items-center gap-5 sm:gap-6'>
            <div className='lg:flex hidden'>
                <LoginBtn/>
            </div>
            <SearchIcon fontSize="large" className='text-white'/>
            <div className='lg:hidden'>
            <PersonIcon fontSize="large" className='text-white ' />
            </div>
            
            <Link to='/Sacola'>  
            <div className='bg-red-700 cursor-pointer p-2 rounded-full'>
                   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>      
            </div>
            </Link>
        </div>
        </FadeInSection>

        
        
    </header>
  )
}

export default Header