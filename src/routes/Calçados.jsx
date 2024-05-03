import React from 'react'
import HeaderIMG from '../components/HeaderIMG'
import ProductCard from '../components/productCard'


const Calçados = () => {
  return (
    <div>
        <section>
          <HeaderIMG
            backgroundImage='https://r4.wallpaperflare.com/wallpaper/134/262/452/michael-jordan-photos-wallpaper-b91088ad11facd9bb62708ff9061c6ed.jpg?timestamp=1714753107603'
            title="COLEÇÃO AIR JORDAN"
          >
          </HeaderIMG>
        </section>
        <section className='lg:px-24 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
        <ProductCard limit={16} />
        </section >
    </div>
  )
}

export default Calçados