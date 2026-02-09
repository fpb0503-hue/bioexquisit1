
import React, { useState } from 'react';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  { id: '1', name: 'Organic Granulated Panela', price: 12.50, weight: '500g', category: 'Standard', description: 'Standard Eco-Bag. The signature flavor profile.', image: 'https://picsum.photos/id/42/400/400', tags: ['100% Organic'] },
  { id: '2', name: 'Artisanal Pantry Jar', price: 18.00, weight: '350g', category: 'Premium', description: 'Premium Glass. Refillable and display-ready.', image: 'https://picsum.photos/id/43/400/400', tags: ['100% Organic', 'Glass Jar'] },
  { id: '3', name: 'Family Size Pack', price: 22.00, weight: '1kg', category: 'Bulk', description: '1kg Value Bag. Best choice for heavy use.', image: 'https://picsum.photos/id/44/400/400', tags: ['Bulk Value'] },
  { id: '4', name: 'Travel Sachet Box', price: 14.00, weight: '250g', category: 'Standard', description: '50 x 5g Individual Sachets. On the go sweetness.', image: 'https://picsum.photos/id/45/400/400', tags: ['Convenience'] },
  { id: '5', name: 'Discovery Bundle', price: 35.00, weight: '1.5kg', category: 'Bundle', description: '1kg Bag + 350g Jar + Wooden Scoop.', image: 'https://picsum.photos/id/46/400/400', tags: ['Best Value'] },
  { id: '6', name: 'Sample Pack', price: 8.00, weight: '250g', category: 'Trial', description: '250g Trial Pouch. Taste the difference.', image: 'https://picsum.photos/id/47/400/400', tags: ['100% Organic'] }
];

const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
        <a href="/" className="hover:text-[#8fb23c]">Home</a>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-[#1b2e1b]">Shop</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
        <div>
          <h1 className="text-6xl font-black text-[#1b2e1b] tracking-tighter mb-4">Our Organic Selection</h1>
          <p className="text-gray-500 text-xl font-medium max-w-xl">Pure, unrefined granulated panela delivered directly from our sustainable Andean farms.</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-gray-400">Sort by:</span>
          <select className="bg-white border-2 border-gray-100 rounded-xl px-4 py-3 text-sm font-bold focus:ring-[#8fb23c] focus:border-[#8fb23c] outline-none">
            <option>Newest Arrivals</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-3 space-y-12">
          <div>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#8fb23c] rounded-full"></span>
              Bag Size
            </h3>
            <div className="space-y-4">
              {['250g Sample', '500g Standard', '1kg Family'].map(size => (
                <label key={size} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#8fb23c] focus:ring-[#8fb23c]" />
                  <span className="text-gray-600 font-bold group-hover:text-[#8fb23c] transition-colors">{size}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#8fb23c] rounded-full"></span>
              Packaging
            </h3>
            <div className="space-y-4">
              {['Eco Paper Bag', 'Artisanal Glass Jar'].map(pkg => (
                <label key={pkg} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#8fb23c] focus:ring-[#8fb23c]" />
                  <span className="text-gray-600 font-bold group-hover:text-[#8fb23c] transition-colors">{pkg}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="p-8 bg-[#8fb23c]/5 rounded-3xl border border-[#8fb23c]/20">
            <h3 className="text-xl font-black mb-4 flex items-center gap-2 text-[#1b2e1b]">
              <span className="material-symbols-outlined text-[#8fb23c]">loyalty</span>
              Bundle Deals
            </h3>
            <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">Save up to 15% when you buy in bulk or subscribe to monthly deliveries.</p>
            <button className="text-[#8fb23c] font-black text-sm uppercase tracking-wider underline underline-offset-4 decoration-2 hover:text-[#1b2e1b] transition-colors">
              View Bundles
            </button>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
            <img src="https://picsum.photos/id/22/400/500" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Andes harvest" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b2e1b] to-transparent flex flex-col justify-end p-8">
              <span className="text-[#c5a059] font-black text-[10px] uppercase tracking-[0.2em] mb-2">Premium Origin</span>
              <h4 className="text-white text-xl font-black leading-tight">Hand-harvested in the Andes Mountains</h4>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {PRODUCTS.map(product => (
            <div key={product.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col group">
              <div className="relative aspect-square bg-gray-50 p-8">
                <div className="absolute top-6 left-6 z-10 flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <span key={tag} className="bg-[#8fb23c] text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      {tag}
                    </span>
                  ))}
                </div>
                <img 
                  src={product.image} 
                  className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500" 
                  alt={product.name} 
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-black text-[#1b2e1b] leading-tight">{product.name}</h3>
                  <span className="text-2xl font-black text-[#c5a059]">${product.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium mb-8 leading-relaxed">{product.description}</p>
                <div className="mt-auto">
                  <button className="w-full bg-[#8fb23c] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#1b2e1b] transition-all shadow-xl shadow-[#8fb23c]/20 group-hover:shadow-[#1b2e1b]/20">
                    <span className="material-symbols-outlined text-xl">add_shopping_cart</span>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Pagination */}
      <div className="mt-20 flex items-center justify-center gap-3">
        <button className="w-12 h-12 rounded-xl border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#8fb23c] hover:border-[#8fb23c] transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-12 h-12 rounded-xl bg-[#c5a059] text-white font-black">1</button>
        <button className="w-12 h-12 rounded-xl border-2 border-gray-100 text-gray-500 font-black hover:text-[#8fb23c] hover:border-[#8fb23c] transition-all">2</button>
        <button className="w-12 h-12 rounded-xl border-2 border-gray-100 text-gray-500 font-black hover:text-[#8fb23c] hover:border-[#8fb23c] transition-all">3</button>
        <button className="w-12 h-12 rounded-xl border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#8fb23c] hover:border-[#8fb23c] transition-all">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Shop;
