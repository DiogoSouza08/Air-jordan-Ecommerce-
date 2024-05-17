import React from 'react'
import FadeInSection from '../components/FadeinSection'

const Sacola = () => {
  return (
    <div className='flex items-start md:items-center py-10 md:py-0 bg-white h-full justify-center'>
      <FadeInSection>
      <p className='text-gray-400'>Sua Sacola esta vazia</p>
      </FadeInSection>
    </div>
  )
}

export default Sacola