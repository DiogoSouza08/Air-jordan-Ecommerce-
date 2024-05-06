import React from 'react'
import FadeInSection from '../components/FadeinSection';
import ProductCardCalçados from '../components/productCardCalçados';
import BuyBtn from '../components/buyBtn';
import SeeAllBtn from '../components/seeAllBtn';
import EmailInput from '../components/emailInput';
import CardsMandF from '../components/CardsMadnF';
import ClothingOptions from '../components/ClothingOptions';
import CustomSection from '../components/customSection';

const Home = () => {
  return (
    <div>
         <main className='flex-col bg-white sm:pb-0 pb-0 flex'>
          <FadeInSection>
            <div className='px-3.5 lg:px-24 justify-between flex-col-reverse sm:flex-row flex items-center'>
              <div className='pb-20 sm:pb-0 h-auto items-start space-y-6 text-center sm:text-start flex-col justify-center flex'>
                <span className='title font-bold text-red-700 text-8xl lg:text-9xl'>THE LAST<br /> DANCE</span>
                <p className='text-zinc-700 text-xl'>Descubra a história por trás da <br />coleção Air Jordan</p>
              </div>
              <img src="https://cdn.afew-store.com/assets/38/388297/1200/air-jordan-1-retro-high-og-sp-university-red-black-summit-white-dv1748-601-footwear%20%3E%20sneaker-packshots-120.jpg" alt="" className='w-full md:w-45 sm:w-96 ' />
            </div>
          </FadeInSection>
        </main>
        <FadeInSection>
          <CardsMandF />
        </FadeInSection>
        <section>
          <CustomSection
            backgroundImage='https://images.unsplash.com/photo-1600500989762-7944a0b802b1?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title="O que você está procurando?"
            subtitle="Temos qualquer tipo de Air Jordan que levanta sua alma!"
          >
            <BuyBtn/>
          </CustomSection>
        </section>
        <FadeInSection>
          <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
            <div className='gap-2 flex flex-col'>
              <span className='title uppercase sm:text-8xl text-6xl font-extrabold '>Roupas</span>
              <p>Descubra a essência jordan</p>
            </div>
            <ClothingOptions />
          </section>
        </FadeInSection>
        <section>
          <CustomSection
            backgroundImage='https://images.unsplash.com/photo-1565261189855-95dac103929d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title="Você nas alturas"
            subtitle="O melhor da Jordan, estilo moderno, utilidade de rua!"
          >
            <BuyBtn/>
          </CustomSection>
        </section>
        <FadeInSection>
          <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
            <span className='title uppercase sm:pb-4 sm:text-8xl text-6xl font-black '>Coleção Air Jordan</span>
            <ProductCardCalçados limit={4} />
            <SeeAllBtn />
          </section >
        </FadeInSection>
        <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
          <span className='title uppercase text-3xl sm:text-4xl font-black '>Inscreva-se para receber notícias e promoções</span>
          <EmailInput />
        </section>
    </div>
  )
}

export default Home