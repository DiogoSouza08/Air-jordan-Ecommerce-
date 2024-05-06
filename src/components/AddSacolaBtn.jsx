import React from 'react';

const AddSacolaBtn = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-700 flex text-center items-center gap-1 py-1 px-1.5 hover:bg-red-900 text-white font-bold text-xs sm:text-sm "
      title="Adicionar à Sacola"
    ><span>+</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>   
    </button>
  );
};

export default AddSacolaBtn;
