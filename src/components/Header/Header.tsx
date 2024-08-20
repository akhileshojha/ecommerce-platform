import React from 'react';
import logo from '../../assets/images/logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="brand-logo">
        <a href="/" className="flex items-center" aria-label="logo">
          <img src={logo} alt="" className="h-8" />
        </a>
      </div>
      <h1 className="text-2xl font-bold">E-commerce Platform</h1>
    </header>
  );
};

export default Header;
