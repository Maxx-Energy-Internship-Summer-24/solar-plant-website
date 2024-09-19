import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home', to: '/' },
    { id: 2, text: 'About', to: '/About' },
    { id: 3, text: 'FAQ', to: '/FAQ' },
    { id: 4, text: 'Data', to: '/Data' },
    { id: 5, text: 'UserProfile', to: '/UserProfile' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 w-full px-4 text-white'>
      {/* Logo wrapped in Link */}
      <Link to="/">
        <div className='text-3xl font-bold text-purple-500'>
          MAXX Energy
        </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link key={item.id} to={item.to} style={{ textDecoration: 'none' }}>
            <li className='p-4 hover:bg-purple-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-white'>
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo wrapped in Link */}
        <Link to="/">
          <div className='text-3xl font-bold text-purple-500 m-4'>MAXX Energy</div>
        </Link>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link key={item.id} to={item.to} style={{ textDecoration: 'none' }}>
            <li className='p-4 border-b rounded-xl hover:bg-purple-500 duration-300 hover:text-white cursor-pointer border-gray-600'>
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
