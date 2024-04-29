import React from 'react';

const ImageTextOverlay = ({ imageUrl, text }) => (
  <div className="border cursor-pointer border-gray-500 w-full lg:py-72 py-60 overflow-hidden relative">
    <div
      className="absolute inset-0 flex flex-col justify-end bg-cover bg-center z-0"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    >
      <div className="bg-zinc-700 py-3">
        <span className="">{text}</span>
      </div>
    </div>
  </div>
);

const CardsMandF = () => (
  <section className=" gap-7  sm:mt-0 flex px-5 items-center flex-col sm:flex-row justify-between py-24 text-center text-gray-400 lg:px-24">
    <ImageTextOverlay
      imageUrl="https://images.unsplash.com/photo-1609535766154-e47e5aa87789?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text="Masculino"
    />
    <ImageTextOverlay
      imageUrl="https://images.unsplash.com/photo-1588117260148-b47818741c74?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      text="Feminino"
    />
  </section>
);

export default CardsMandF;
