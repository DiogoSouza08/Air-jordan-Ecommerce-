import React from 'react'
import HeaderIMG from '../components/HeaderIMG'

const Roupas = () => {
  return (
    <div className='bg-red-500 w-full px-0 '>
       <section className='w-full px-0 py-0'>
          <HeaderIMG
            backgroundImage='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/53f0f324-16b5-4c24-9363-5fe31522459e/jordan-mj-baseline-pullover-hoodie-big-kids-hoodie-VPCSGc.png'
            title="ROUPAS"
          >
          </HeaderIMG>
        </section>
        <section className='lg:px-24 bg-zinc-700 gap-10 flex flex-col px-5 text-gray-400 justify-center text-center items-center py-24'>
          <div className='w-full'>dsds</div>
        </section >
    </div>
  )
}

export default Roupas