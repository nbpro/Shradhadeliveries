import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header class="py-2 bg-orange-100 pl-20 pr-20 max-h-20">
      <div class="flex-2 flex justify-between items-center">
        <div class="logo-box flex-row">
          <img src='/assets/images/logo.png'  height="50rem" width="50rem" alt="logo"></img> 
        </div>       
      </div>
    </header>
  );
};

export default Header;
