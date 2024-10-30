'use client';

import { useState } from 'react';
import NavLinks from './nav-links';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // 点击空白处关闭菜单
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="bg-gray-700 text-white p-4 flex justify-between items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="text-xl">Inspire Quill</div>
      </nav>

      {isMenuOpen && (
        <>
          {/* 遮罩层 */}
          <div 
            className="fixed inset-0 z-10 opacity-50" 
            onClick={closeMenu}
          ></div>

          {/* 菜单 */}
          <div className="fixed left-0 w-64 h-screen bg-gray-700 text-white p-4 z-20">
            <NavLinks />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;

