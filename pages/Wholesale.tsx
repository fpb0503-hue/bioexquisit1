
import React from 'react';

const Wholesale: React.FC = () => {
  return (
    <div className="flex flex-col">
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/11/1920/600" 
            className="w-full h-full object-cover" 
            alt="Sugarcane fields" 
          />
          <div className="absolute inset-0 bg-[#1b2e1b]/70 backdrop-blur-[1px]"></div>
        </div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
          <div className="max-w-2xl">
            <span className="text-[#c5a059] font-black tracking-[0.2em] text-xs uppercase bg-[#c5a059]/10 w-fit px-3 py-1 rounded mb-6 inline-block">Global Distribution Network</span>
            <h1 className="text-white text-7xl font-black leading-tight mb-8 tracking-tighter">
              Partner with <br/><span className="text-[#8fb23c] italic">BIOEXQUISIT.</span>
            </h1>
            <p className="text-gray-200 text-2xl font-medium leading-relaxed">Supply your business with the world's most refined organic panela. Direct from our Andean estates to your facility.</p>
          </div>
        </div>
      </section>

      <main className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl border border-gray-100">
              <h2 className="text-4xl font-black text-[#1b2e1b] mb-4">Wholesale Inquiry</h2>
              <p className="text-gray-400 text-lg font-medium mb-12">Complete the form below and our partnerships team will reach out within 24 hours.</p>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-[#1b2e1b]">Company Name</label>
                    <input type="text" placeholder="e.g. Artisanal Bakery Co." className="w-full px-6 py-5 bg-gray-50 border-transparent rounded-2xl focus:ring-[#8fb23c] focus:bg-white transition-all text-lg font-medium" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-[#1b2e1b]">Contact Person</label>
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-5 bg-gray-50 border-transparent rounded-2xl focus:ring-[#8fb23c] focus:bg-white transition-all text-lg font-medium" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-[#1b2e1b]">Type of Business</label>
                    <select className="w-full px-6 py-5 bg-gray-50 border-transparent rounded-2xl focus:ring-[#8fb23c] focus:bg-white transition-all text-lg font-medium">
                      <option>Select Category</option>
                      <option>Retailer</option>
                      <option>Distributor</option>
                      <option>Food Service</option>
                      <option>Manufacturer</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-[#1b2e1b]">Estimated Volume</label>
                    <select className="w-full px-6 py-5 bg-gray-50 border-transparent rounded-2xl focus:ring-[#8fb23c] focus:bg-white transition-all text-lg font-medium">
                      <option>Select Volume</option>
                      <option>Under 100kg / month</option>
                      <option>100kg - 500kg / month</option>
                      <option>500kg - 2000kg / month</option>
                      <option>Container Load</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1b2e1b]">Business Email</label>
                  <input type="email" placeholder="name@company.com" className="w-full px-6 py-5 bg-gray-50 border-transparent rounded-2xl focus:ring-[#8fb23c] focus:bg-white transition-all text-lg font-medium" />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest text-[#1b2e1b]">Your Message</label>
                  <textarea rows={5} placeholder="Tell us about your requirements or specific product interests..." className="w-full px-6 py-5 bg-gray-50 border-transparent rounded-2xl focus:ring-[#8fb23c] focus:bg-white transition-all text-lg font-medium resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-[#8fb23c] text-white py-6 rounded-2xl font-black text-xl hover:bg-[#1b2e1b] transition-all shadow-2xl shadow-[#8fb23c]/30 flex items-center justify-center gap-4 group">
                  Submit Inquiry
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-16">
            <div>
              <h3 className="text-3xl font-black text-[#1b2e1b] mb-12 border-b-2 border-[#c5a059]/20 pb-6 uppercase tracking-tight">Partner Benefits</h3>
              <div className="space-y-10">
                {[
                  { icon: 'public', title: 'Global Shipping', desc: 'Full logistical support for sea and air freight to over 40 countries, with all export documentation handled.', color: '#8fb23c' },
                  { icon: 'verified', title: 'Organic Certifications', desc: 'USDA Organic, EU Bio, and Fair Trade certified. Consistent lab-tested purity in every single batch.', color: '#c5a059' },
                  { icon: 'inventory_2', title: 'Consistent Supply', desc: 'Strategic inventory management ensuring year-round availability even during peak demand seasons.', color: '#d35400' },
                  { icon: 'palette', title: 'White Label Options', desc: 'Customized packaging and private label solutions for established premium global brands.', color: '#1b2e1b' }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-3xl flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: `${benefit.color}15`, color: benefit.color }}>
                      <span className="material-symbols-outlined text-3xl">{benefit.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 text-[#1b2e1b]">{benefit.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[3rem] overflow-hidden aspect-video shadow-2xl">
              <img src="https://picsum.photos/id/101/800/600" className="w-full h-full object-cover" alt="Warehouse" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b2e1b] to-transparent p-12 flex items-end">
                <p className="text-white text-xl font-bold italic">"The standard of excellence for wholesale panela distribution worldwide."</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wholesale;
