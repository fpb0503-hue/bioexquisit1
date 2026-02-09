
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/12/1920/1080" 
            className="w-full h-full object-cover brightness-[0.8]"
            alt="Sugarcane fields"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2e1b]/90 via-[#1b2e1b]/40 to-transparent"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-[#c5a059] font-extrabold tracking-[0.2em] text-xs uppercase bg-[#c5a059]/10 w-fit px-3 py-1 rounded mb-6 inline-block">Artisanal Organic Quality</span>
            <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
              Pure Gold, <br/>
              <span className="text-[#8fb23c] italic">Hand-Crafted.</span>
            </h1>
            <p className="text-white/90 text-xl leading-relaxed mb-10 font-medium">
              Experience <span className="font-extrabold">BIOEXQUISIT</span>, the world's most refined granulated panela. Sourced from the Andes, our unrefined sweetness preserves the essence of nature.
            </p>
            <div className="flex flex-wrap gap-5">
              <NavLink to="/shop" className="bg-[#c5a059] text-white px-10 py-5 rounded-xl text-lg font-black hover:brightness-110 transition-all shadow-2xl">
                Discover Collection
              </NavLink>
              <NavLink to="/about" className="bg-transparent border-2 border-[#8fb23c] text-[#8fb23c] px-10 py-5 rounded-xl text-lg font-black hover:bg-[#8fb23c] hover:text-white transition-all">
                Our Origin
              </NavLink>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center gap-6">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <img key={i} src={`https://picsum.photos/id/${60+i}/64/64`} className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-lg" alt="Reviewer" />
                 ))}
               </div>
               <p className="text-white/70 text-sm font-bold italic tracking-wide">Join 2,000+ conscious chefs using BIOEXQUISIT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why BIOEXQUISIT */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 mb-20">
            <h2 className="text-[#1b2e1b] text-5xl font-black tracking-tight">Why BIOEXQUISIT?</h2>
            <div className="w-24 h-2 bg-[#c5a059] rounded-full"></div>
            <p className="text-gray-500 text-lg max-w-2xl font-medium leading-relaxed">
              We set the benchmark for organic purity. Every crystal of panela reflects our commitment to excellence and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: 'eco', title: '100% Certified Organic', desc: 'Our panela is free from chemicals and additives. We use traditional evaporation methods to protect the natural integrity of our cane.' },
              { icon: 'handshake', title: 'Ethical Fair Trade', desc: 'BIOEXQUISIT ensures prosperity for our farmers. We invest back into the communities that nurture the land we share.' },
              { icon: 'verified', title: 'Nutrient Excellence', desc: 'Richer in vitamins and minerals than any refined sugar. BIOEXQUISIT provides a complex, caramel-rich flavor with genuine nutrition.' }
            ].map((feature, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-[#fdfbf7] border-b-4 border-transparent hover:border-[#8fb23c] hover:shadow-2xl transition-all group">
                <div className="w-16 h-16 bg-[#8fb23c]/10 rounded-2xl flex items-center justify-center text-[#8fb23c] mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-[#1b2e1b] text-2xl font-black mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <div className="bg-[#1b2e1b] rounded-[3rem] overflow-hidden p-10 md:p-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="flex flex-col gap-8">
              <h2 className="text-white text-5xl font-black leading-tight">Heritage Process, <br/><span className="text-[#c5a059]">Exquisite Taste.</span></h2>
              <p className="text-white/70 text-lg leading-relaxed font-medium">
                At BIOEXQUISIT, we honor the ancient art of panela making. No bleaching, no centrifugation—just pure, concentrated solar energy in every grain.
              </p>
              <ul className="space-y-6">
                {['Hand-selected heirloom sugar cane', 'Slow evaporation in open copper kettles', 'Granulated by master artisans'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold text-lg">
                    <span className="material-symbols-outlined text-[#8fb23c] bg-[#8fb23c]/20 p-1 rounded-full">check</span>
                    {item}
                  </li>
                ))}
              </ul>
              <NavLink to="/about" className="bg-[#8fb23c] text-white px-10 py-5 rounded-xl font-black text-lg w-fit mt-4 hover:scale-105 transition-all shadow-xl shadow-[#8fb23c]/20">
                Learn the BIOEXQUISIT Way
              </NavLink>
            </div>
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/10 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                <img src="https://picsum.photos/id/102/800/800" className="w-full h-full object-cover" alt="Artisan at work" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <div className="bg-[#c5a059] rounded-[3rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none">Join the BIOEXQUISIT Tribe</h2>
            <p className="max-w-xl text-white/90 text-xl font-medium">Subscribe for exclusive farm-to-table recipes, sustainability reports, and priority access to limited seasonal harvests.</p>
            <form className="flex flex-col sm:flex-row w-full max-w-lg gap-4 mt-6">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 bg-white/20 border-white/30 rounded-xl px-8 py-5 text-white placeholder:text-white/60 focus:ring-white border-2" 
              />
              <button className="bg-[#1b2e1b] text-white px-12 py-5 rounded-xl font-black text-lg hover:bg-black transition-all shadow-2xl">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
