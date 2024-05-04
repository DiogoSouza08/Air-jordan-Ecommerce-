import React from 'react';

const AddSacolaBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-red-700 hover:bg-red-900 text-white font-bold py-2.5 w-full text-xs sm:text-sm mt-2">
      + Adicionar a Sacola
    </button>
  );
};

export default AddSacolaBtn;