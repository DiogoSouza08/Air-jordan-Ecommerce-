import React, { useState, useEffect } from 'react';
import './App.css';
import CardsMandF from './components.js/CardsMadnF';
import ClothingOptions from './components.js/ClothingOptions';
import BuyBtn from './components.js/buyBtn';
import CustomSection from './components.js/customSection';
import Header from './components.js/header';
import "@fontsource/poppins";
import ProductCard from './components.js/productCard';
import SeeAllBtn from './components.js/seeAllBtn';
import EmailInput from './components.js/emailInput';
import Rodape from './components.js/footer';
import MobileHeader from './components.js/mobileHeader';
import CadastroBtn from './components.js/cadastrar';
import LoginBtn from './components.js/loginBtn';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App bg-zinc-700 ">
      <div className='flex items-center justify-center py-2.5 sm:hidden'>
        <img src="jordan-logo.webp" alt="" className='w-12' />
      </div>
      <header className="App-header z-40">
        <main className='flex-col  bg-white sm:pb-0 pb-0 flex  '>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <div className=' px-3.5 lg:px-24  justify-between flex-col-reverse md:flex-row flex  items-center '>
            <div className='pb-20 sm:pb-0 h-auto  items-start space-y-6 text-center sm:text-start   flex-col justify-center  flex'>
              <span className='title font-bold text-red-700 text-8xl lg:text-9xl'>THE LAST<br></br> DANCE</span>
              <p className='text-zinc-700 text-xl'>Descubra a história por trás da <br></br>coleção Air Jordan</p>
            </div>
            <img src="https://cdn.afew-store.com/assets/38/388297/1200/air-jordan-1-retro-high-og-sp-university-red-black-summit-white-dv1748-601-footwear%20%3E%20sneaker-packshots-120.jpg" alt="" className=' w-full md:w-45 sm:w-42 ' />
          </div>
          <div className={`absolute lg:hidden transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}  flex flex-col gap-20 pt-28 px-5 bg-zinc-700 t-0 l-0 w-full sm:w-2/5 z-40 h-auto sm:h-full py-14`}>
            <MobileHeader />
            <div className='gap-8 flex flex-col'>
            <p className='text-gray-300'>Torne-se um membro da Jordan para conhecer os melhores produtos, inspiração e histórias do esporte.</p>
            <CadastroBtn/>
            <LoginBtn/>
            </div>
          </div>
        </main>
      </header>
      <section>
        <CardsMandF />
      </section>
      <section>
        <CustomSection
          backgroundImage='https://images.unsplash.com/photo-1640000013087-842012285d30?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          title="O que você está procurando?"
          subtitle="Temos qualquer tipo de Air Jordan que levanta sua alma!"
        >
          <BuyBtn />
        </CustomSection>
      </section>
      <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
        <div className='gap-2 flex flex-col'>
          <span className='title uppercase sm:text-8xl text-6xl  font-extrabold '>Roupas</span>
          <p>Descubra a essência jordan</p>
        </div>
        <ClothingOptions />
      </section>
      <section>
        <CustomSection
          backgroundImage='https://images.unsplash.com/photo-1565261189855-95dac103929d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          title="Você nas alturas"
          subtitle="O melhor da Jordan, estilo moderno, utilidade de rua!"
        >
          <BuyBtn />
        </CustomSection>
      </section>
      <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
        <span className='title uppercase sm:text-8xl text-6xl font-black '>Coleção Air Jordan</span>
        <ProductCard />
        <SeeAllBtn />
      </section >
      <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
        <span className='title uppercase text-3xl sm:text-4xl font-black '>Inscreva-se para receber notícias e promoções</span>
        <EmailInput />
      </section>
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
  );
}

export default App;
