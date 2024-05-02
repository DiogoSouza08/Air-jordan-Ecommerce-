import React from 'react';
import { Link } from 'react-router-dom';

const LoginBtn = () => {
  return (
    <div>
      <Link to="/login">
        <button className='border border-gray-300 text-gray-300 min-w-36 py-2.5 lg:py-1.5'>
          Login
        </button>
      </Link>
    </div>
  );
}

export default LoginBtn;
