import React from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from './FadeinSection';

const BuyBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <FadeInSection>
      <div>
        <Link to="/Calçados" onClick={scrollToTop}>
          <button className='bg-red-700 min-w-36 py-2.5 mt-5'>
            COMPRAR
          </button>
        </Link>
      </div>
    </FadeInSection>
  );
};

export default BuyBtn;
