import React from 'react';

function CustomSection({ backgroundImage, title, subtitle, children }) {
  return (
    <section className='relative'>
      <div className='inset-0 bg-cover flex lg:px-24 px-5 lg:justify-start justify-center text-center lg:text-start items-center py-40 sm:py-40 lg:py-60 bg-center z-0' style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className='relative space-y-6 text-white z-10'>
          <div>
            <span className='title  text-6xl font-bold uppercase'>{title}</span>
            <p>{subtitle}</p>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomSection;
