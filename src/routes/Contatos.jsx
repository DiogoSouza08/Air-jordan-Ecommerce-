import React from 'react'
import SearchBar from '../components/SearchBar'
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import CustomSection from '../components/customSection';
import FadeInSection from '../components/FadeinSection';

const Contatos = () => {
  return (
    <div className=' bg-white pt-24 flex items-center justify-center flex-col gap-24'>
    <FadeInSection>
    <div className='w-full flex-col gap-4 flex items-center justify-center'>
      <span className='title text-4xl text-black'>Precisa de Ajuda?</span>
      <SearchBar/>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className='w-full flex  flex-col  justify-center items-center'>
    <span className='title text-4xl text-black'>Entre em contato</span>
    <div className='grid grid-cols-1 pt-6 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 '>
      <div className='w-56 flex-col flex text-center bg-gray-400 rounded-lg p-8' >
        <span>
        <div>
        <PermPhoneMsgIcon/>
        </div>
        Produtos e pedidos 4h - 23h (horário do Pacífico) 7 dias por semana
        </span>
      </div>
      <div className='w-56 flex-col flex  text-center bg-gray-400 rounded-lg p-8' >
        <span>
        <div>
        <SmartphoneIcon/>
        </div>
        Produtos e pedidos 1-800-806-6453 4h - 23h (horário do Pacífico) 7 dias por semana
        </span>
      </div>
      <div className='w-56 flex-col flex  text-center bg-gray-400 rounded-lg p-8' >
        <span>
        <div>
        <SmartphoneIcon/>
        </div>
        NRC, NTC e .SWOOSH 1-800-379-6453 8h - 17h (horário do Pacífico) seg a sex
        </span>
      </div>
      <div className='w-56 flex-col flex  text-center bg-gray-400 rounded-lg p-8' >
        <span>
        <div>
        <SmartphoneIcon/>
        </div>
        Informações e consultas da empresa 1-800-344-6453 7h - 16h (horário do Pacífico) seg a sex
        </span>
      </div>
    </div>
    </div>
    </FadeInSection>
    <div className='w-full'>
    <CustomSection
            backgroundImage='https://images.unsplash.com/photo-1637666725970-53822683726a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title="Encontre uma loja oficial"
            subtitle="Possuimos lojas para te atender pelo mundo todo!"
          >
          <button className='bg-red-700 mt-4 text-white  min-w-36 py-2.5'>
            VER LOJAS
          </button>
          </CustomSection>
        
          </div>
    </div>
  )
}

export default Contatos