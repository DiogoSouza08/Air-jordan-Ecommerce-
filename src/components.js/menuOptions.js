import React from 'react';
import ManIcon from '@mui/icons-material/Man';
import { Woman } from '@mui/icons-material';

const MenuOptions = ({ layout, isMobileHeader }) => {
  const menuClass = layout === 'horizontal' ? 'flex' : 'flex-col';
  const textSize = isMobileHeader ? 'text-2xl' : 'text-sm';

  return (
    <div>
      <ul className={`gap-10 flex text-gray-300 ${textSize} lg:flex ${menuClass}`}>
        <li>
          <span className=" lg:hidden"></span>
          MASCULINO
        </li>
        <li>
          <span className="lg:hidden"></span>
          FEMININO
        </li>
        <li>
          <span className="lg:hidden"></span>
          KIDS
        </li>
        <li>
          <span className="lg:hidden"></span>
          CALÇADOS
        </li>
        <li>
          <span className="lg:hidden"></span>
          ROUPAS
        </li>
      </ul>
    </div>
  );
};

export default MenuOptions;
