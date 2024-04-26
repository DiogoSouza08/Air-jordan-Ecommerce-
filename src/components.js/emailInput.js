import React, { useState } from 'react';

function EmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setError('Por favor, preencha o campo email antes do envio.');
      setSuccess(false); 
    } else {
      setError('');
      setSuccess(true); 
      console.log('Email do usuario:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gap-2 items-center flex flex-col">
      <div className='flex flex-row gap-5'>
        <input
          type="email"
          className={`border-b-2 border-gray-400 bg-transparent py-2 px-4 focus:outline-none ${error && 'border-red-700'}`}
          placeholder="Seu endereço de e-mail"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="bg-gray-400 text-white font-bold py-2 px-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
      {error && <p className="text-red-700 text-sm">{error}</p>}
      {success && <p className="text-green-700 text-sm">Email enviado com sucesso!</p>}
    </form>
  );
}

export default EmailInput;
