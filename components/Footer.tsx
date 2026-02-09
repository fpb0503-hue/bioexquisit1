
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#c5a059]/10 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-8">
            <div className="flex items-center gap-3">
              <div className="text-[#c5a059]">
                <span className="material-symbols-outlined text-4xl">filter_hdr</span>
              </div>
              <h2 className="text-[#1b2e1b] text-2xl font-black tracking-tighter uppercase">BIOEXQUISIT</h2>
            </div>
            <p className="text-gray-500 text-base leading-relaxed font-medium">
              Honoring the Earth through the purest organic panela. Sustainable, ethical, and exquisite in every sense.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#1b2e1b] hover:bg-[#c5a059] hover:text-white transition-all">
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#1b2e1b] hover:bg-[#c5a059] hover:text-white transition-all">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#c5a059]/30 flex items-center justify-center text-[#1b2e1b] hover:bg-[#c5a059] hover:text-white transition-all">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#1b2e1b] text-lg font-black mb-8 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><NavLink to="/shop" className="hover:text-[#8fb23c] transition-colors">Granulated Panela</NavLink></li>
              <li><NavLink to="/wholesale" className="hover:text-[#8fb23c] transition-colors">Wholesale/Bulk</NavLink></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Limited Reserve</a></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Culinary Sets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1b2e1b] text-lg font-black mb-8 uppercase tracking-wider">Heritage</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><NavLink to="/about" className="hover:text-[#8fb23c] transition-colors">Our Philosophy</NavLink></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">The Farm Network</a></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Process & Purity</a></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Impact Report</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1b2e1b] text-lg font-black mb-8 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-bold">
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Visit the Estate</a></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Sustainability FAQ</a></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Contact BIOEXQUISIT</a></li>
              <li><a href="#" className="hover:text-[#8fb23c] transition-colors">Shipping & Export</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-[#c5a059]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-bold tracking-wider">© 2024 BIOEXQUISIT ORGANICS. AUTHENTIC ARTISANRY.</p>
          <div className="flex gap-8 text-xs text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#8fb23c]">Privacy Policy</a>
            <a href="#" className="hover:text-[#8fb23c]">Terms of Service</a>
            <a href="#" className="hover:text-[#8fb23c]">Certificates</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
