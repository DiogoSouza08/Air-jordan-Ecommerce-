import React from 'react'
import HeaderIMG from '../components/HeaderIMG'
import ProductCardCalçados from '../components/productCardCalçados'


const Calçados = () => {
  return (
    <div>
        <section>
          <HeaderIMG
            backgroundImage='https://images.unsplash.com/photo-1646122408163-42332de7b4fa?q=80&w=1541&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            title="COLEÇÃO AIR JORDAN"
          >
          </HeaderIMG>
        </section>
        <section className='lg:px-24  gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center sm:py-16 py-11'>
        <ProductCardCalçados limit={20} />
        </section >
    </div>
  )
}

export default Calçados