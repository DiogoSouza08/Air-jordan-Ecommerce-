import React from 'react'
import MenuOptions from './menuOptions'
import SocialMedias from './socialMedias'

const Rodape = () => {
  return (
    <footer className='flex  justify-center items-center lg:gap-36 sm:gap-20 border-y lg:px-20 py-16 text-gray-300 border-gray-400'>
        <div>
        <img src="./jordan-logo.webp" alt="" className='w-12 hidden sm:flex' />
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-16'>
        <div className=' flex gap-20'>
        <div className='flex  text-start gap-3 flex-col'>
          <span className=' font-semibold'>MENU</span>
          <MenuOptions layout="vertical" />
        </div>
        <div className='flex  gap-3 flex-col'>
        <span className=' font-semibold  text-gray-300'>SOBRE A NIKE</span>
          <ul className=' text-sm font-light gap-10 flex flex-col uppercase '>
            <li>Notícias</li>
            <li>Carreiras</li>
            <li>Investidores</li>
            <li>Trabalhe Conosco</li>
            <li>Propósito</li>
          </ul>
          </div>
          </div>
          <div>
          <SocialMedias/>
          </div>
          </div>
    </footer>
  )
}

export default Rodape