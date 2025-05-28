import React from 'react';

// inport links
import { Link } from "react-router-dom";
// import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
  <header className='py-6 mb-12 border-b'>
  <div className='container flex items-center justify-between mx-auto'>
    {/* Logo */}
    <Link to='/'>
    <img src={Logo} alt='Agu Real Estate' />
    </Link>
    {/* Buttons */}
    <div className='flex items-center gap-6'>
      <Link className='px-4 py-3 transition hover:text-violet-900 hover:bg-violet-300' to=''>Log in</Link>
      <Link className='px-4 py-3 text-white transition rounded-lg bg-violet-700 hover:bg-violet-500' to=''>Sign up</Link>
    </div>

  </div>
  </header>
  ); 
};

export default Header;
