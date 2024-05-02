import React from 'react';


const MenuOptions = ({ layout, isMobileHeader }) => {
  const menuClass = layout === 'horizontal' ? 'flex' : 'flex-col';
  const textSize = isMobileHeader ? 'text-2xl' : 'text-sm';

  return (
    <div>
      <ul className={`gap-10 flex text-gray-300 ${textSize} lg:flex ${menuClass}`}>
        <li>
          MASCULINO
        </li>
        <li>
          FEMININO
        </li>
        <li>
          KIDS
        </li>
        <li>
          CALÇADOS
        </li>
        <li>
          ROUPAS
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
