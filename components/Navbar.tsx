
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#c5a059]/10">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="text-[#8fb23c] flex items-center group-hover:rotate-12 transition-transform duration-300">
            <span className="material-symbols-outlined text-4xl text-[#c5a059]">filter_hdr</span>
          </div>
          <h2 className="text-[#1b2e1b] text-2xl font-black tracking-tighter uppercase">BIOEXQUISIT</h2>
        </NavLink>

        <div className="hidden md:flex items-center gap-10">
          <NavLink 
            to="/" 
            className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-[#8fb23c]' : 'text-[#1b2e1b] hover:text-[#8fb23c]'}`}
          >
            Home
          </NavLink>
          <NavLink 
            to="/shop" 
            className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-[#8fb23c]' : 'text-[#1b2e1b] hover:text-[#8fb23c]'}`}
          >
            Products
          </NavLink>
          <NavLink 
            to="/recipes" 
            className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-[#8fb23c]' : 'text-[#1b2e1b] hover:text-[#8fb23c]'}`}
          >
            Recipes
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-[#8fb23c]' : 'text-[#1b2e1b] hover:text-[#8fb23c]'}`}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/wholesale" 
            className={({ isActive }) => `text-sm font-bold transition-colors ${isActive ? 'text-[#8fb23c]' : 'text-[#1b2e1b] hover:text-[#8fb23c]'}`}
          >
            Wholesale
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <NavLink to="/shop" className="bg-[#8fb23c] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#1b2e1b] transition-all shadow-md">
            Shop Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
