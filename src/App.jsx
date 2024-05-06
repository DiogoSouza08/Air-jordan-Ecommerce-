import './App.css'
import { Outlet } from 'react-router-dom';
import Rodape from './components/footer';
import Header from './components/header';

//fonts
import "@fontsource/poppins"; 
import "@fontsource/antonio";

function App() {
  return (
    <div className='bg-zinc-700 w-full  max-w-screen-2xl'>
      <div className='flex items-center justify-center py-2.5 sm:hidden border-gray-400 border-b'>
          <img src="jordan-logo.webp" alt="" className='w-12' />
        </div>
      <Header />
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
  )
}

export default App;

