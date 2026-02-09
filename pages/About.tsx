
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://picsum.photos/id/10/1920/800" className="w-full h-full object-cover brightness-[0.7]" alt="Andean farmers" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b2e1b] via-[#1b2e1b]/40 to-transparent"></div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-[#8fb23c] font-black tracking-[0.2em] text-xs uppercase border-l-4 border-[#c5a059] pl-4 mb-6 block">Our Roots & Heritage</span>
            <h1 className="text-white text-7xl font-black leading-tight mb-8 tracking-tighter">
              Cultivating Excellence, <br/>
              <span className="text-[#c5a059] italic font-medium">Naturally BIOEXQUISIT.</span>
            </h1>
            <p className="text-white/80 text-2xl font-medium leading-relaxed mb-10">Beyond the exquisite flavor of our organic panela lies a legacy of sustainability and devotion to the land.</p>
            <div className="flex gap-4">
              <button className="bg-[#8fb23c] text-white px-10 py-5 rounded-xl font-black text-lg">Read Our Story</button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-xl font-black text-lg">View Our Impact</button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-32 bg-[#fdfbf7]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img src="https://picsum.photos/id/103/800/1000" className="w-full h-full object-cover" alt="Artisan jar" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-12 rounded-[2rem] shadow-2xl max-w-xs border-b-8 border-[#c5a059]">
                <p className="text-[#1b2e1b] font-black italic text-xl leading-tight">
                  "At BIOEXQUISIT, we don't just harvest sugar; we preserve a legacy of ancestral wisdom."
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="w-20 h-2 bg-[#c5a059]"></div>
              <h2 className="text-6xl font-black text-[#1b2e1b] tracking-tighter">The Heart of the Andes</h2>
              <p className="text-gray-500 text-xl font-medium leading-relaxed">The BIOEXQUISIT journey began high in the Andean mountains, where for generations, families have practiced the art of hand-harvesting sugar cane.</p>
              <p className="text-gray-500 text-xl font-medium leading-relaxed">Unlike industrial sugar production, our process is slow, deliberate, and respectful. Every grain tells a story of mountain air and volcanic soil.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#c5a059]/10">
                  <span className="material-symbols-outlined text-[#8fb23c] font-black">landscape</span>
                  <span className="font-black text-[#1b2e1b]">High Altitude Grown</span>
                </div>
                <div className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-[#c5a059]/10">
                  <span className="material-symbols-outlined text-[#8fb23c] font-black">auto_fix_high</span>
                  <span className="font-black text-[#1b2e1b]">Ancient Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#1b2e1b] mb-6 tracking-tight">Measurable BIOEXQUISIT Progress</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto font-medium">Transparency is the core of our brand. Here is how choosing us helps the planet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { val: '72%', label: 'Lower Carbon Footprint', desc: 'Minimizing emissions through biomass energy and local processing.' },
              { val: '450+', label: 'Families Supported', desc: 'Direct fair-trade partnerships providing stable growth.' },
              { val: '85%', label: 'Water Reduction', desc: 'Rainwater harvesting systems saving millions of liters annually.' }
            ].map((stat, i) => (
              <div key={i} className="bg-[#fdfbf7] p-12 rounded-[3rem] border border-gray-100 flex flex-col items-center text-center group hover:shadow-2xl transition-all">
                <div className="w-32 h-32 rounded-full border-8 border-[#8fb23c]/20 flex items-center justify-center mb-8 relative">
                   <div className="absolute inset-0 border-8 border-[#8fb23c] rounded-full border-r-transparent animate-spin-slow"></div>
                   <span className="text-4xl font-black text-[#1b2e1b]">{stat.val}</span>
                </div>
                <h3 className="text-2xl font-black text-[#1b2e1b] mb-4">{stat.label}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-32 bg-[#1b2e1b] overflow-hidden relative">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-10">
               <h2 className="text-5xl font-black text-white leading-tight">BIOEXQUISIT Community Impact</h2>
               <p className="text-white/60 text-xl font-medium leading-relaxed">We invest 10% of our profits back into rural education and healthcare infrastructure within our farming communities.</p>
               <div className="space-y-8">
                 <div className="flex gap-6 group">
                   <div className="w-14 h-14 bg-[#8fb23c]/20 rounded-full flex items-center justify-center text-[#8fb23c] group-hover:scale-110 transition-transform">
                     <span className="material-symbols-outlined text-3xl">school</span>
                   </div>
                   <div>
                     <h4 className="text-2xl font-black text-white mb-2">Rural Education</h4>
                     <p className="text-white/50">Supporting over 1,200 children through BIOEXQUISIT funded schools.</p>
                   </div>
                 </div>
                 <div className="flex gap-6 group">
                   <div className="w-14 h-14 bg-[#8fb23c]/20 rounded-full flex items-center justify-center text-[#8fb23c] group-hover:scale-110 transition-transform">
                     <span className="material-symbols-outlined text-3xl">health_and_safety</span>
                   </div>
                   <div>
                     <h4 className="text-2xl font-black text-white mb-2">Health & Safety</h4>
                     <p className="text-white/50">Mobile health clinics offering free essential care to farming families.</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="grid grid-cols-2 gap-6">
                {[20, 21, 23, 24].map(id => (
                  <img key={id} src={`https://picsum.photos/id/${id}/400/300`} className="rounded-2xl shadow-2xl border-2 border-white/10" alt="Impact" />
                ))}
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
