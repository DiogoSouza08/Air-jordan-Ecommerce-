import React from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Rodape from './components/footer';
import Header from './components/header';
import Home from './routes/Home';

//fonts
import "@fontsource/poppins"; 
import "@fontsource/antonio";

function App() {
  const location = useLocation();

  const isRootPath = location.pathname === '/';

  return (
    <div className='flex justify-center bg-zinc-700 '>
    <div className=' w-full  max-w-screen-2xl'>
      <div className='flex items-center justify-center py-2.5 sm:hidden border-gray-400 border-b'>
          <img src="jordan-logo.webp" alt="" className='w-12' />
        </div>
      <Header />
      {isRootPath && <Home />}
      <Outlet />
      <footer>
        <Rodape />
        <div className='border-gray-400 py-3 text-gray-400 justify-center items-center text-sm border-b flex text-center'>
          <div className='flex items-center justify-center flex-col gap-4'>
            <img src="./jordan-logo.webp" alt="" className='w-10 sm:hidden' />
            <span>Todos os direitos reservados por Diogo Souza©</span>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
