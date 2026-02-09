
import React from 'react';

const RECIPES = [
  { id: 1, title: 'Refreshing Panela Lemonade', time: '10 mins', difficulty: 'Easy', desc: 'A traditional natural energy booster with freshly squeezed lemons.', img: 'https://picsum.photos/id/105/600/400' },
  { id: 2, title: 'Organic Oatmeal Cookies', time: '25 mins', difficulty: 'Medium', desc: 'Fiber-rich oats meet the caramel notes of panela for the perfect snack.', img: 'https://picsum.photos/id/106/600/400' },
  { id: 3, title: 'Sweet Potato Panela Glaze', time: '15 mins', difficulty: 'Easy', desc: 'A savory-sweet side dish featuring roasted potatoes.', img: 'https://picsum.photos/id/107/600/400' },
  { id: 4, title: 'Traditional Colombian Canelazo', time: '15 mins', difficulty: 'Easy', desc: 'Warm, spiced comfort drink for cool Andean evenings.', img: 'https://picsum.photos/id/108/600/400' }
];

const Recipes: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      {/* Featured Recipe */}
      <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl mb-20 overflow-hidden flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-xl">
          <img src="https://picsum.photos/id/104/800/600" className="w-full h-full object-cover" alt="Lava cake" />
        </div>
        <div className="w-full lg:w-1/2 space-y-8">
          <span className="text-[#d35400] font-black uppercase tracking-[0.2em] text-xs">Recipe of the Month</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1b2e1b] leading-tight tracking-tighter">Golden Panela Lava Cake</h1>
          <p className="text-gray-500 text-xl font-medium leading-relaxed">Experience the rich, earthy sweetness of BIOEXQUISIT panela in this decadent and healthy dessert. Perfect for satisfying cravings naturally.</p>
          <div className="flex gap-4">
            <button className="bg-[#d35400] text-white px-10 py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all shadow-xl shadow-[#d35400]/20">
              View Recipe
            </button>
            <button className="w-16 h-16 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:text-[#d35400] hover:border-[#d35400] transition-all">
              <span className="material-symbols-outlined">bookmark</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-10 mb-16 items-center">
        <div className="flex-1 w-full group">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8fb23c]">search</span>
            <input type="text" placeholder="Search for BIOEXQUISIT recipes..." className="w-full pl-16 pr-8 py-5 bg-white border-2 border-gray-100 rounded-[2rem] text-lg font-medium focus:ring-[#8fb23c] focus:border-[#8fb23c] outline-none transition-all" />
          </div>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
          {['All Recipes', 'Beverages', 'Desserts', 'Breakfast', 'Healthy Snacks'].map((cat, i) => (
            <button key={cat} className={`whitespace-nowrap px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider transition-all ${i === 0 ? 'bg-[#8fb23c] text-white shadow-lg shadow-[#8fb23c]/20' : 'bg-white text-gray-400 border-2 border-gray-100 hover:border-[#8fb23c] hover:text-[#8fb23c]'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-black text-[#1b2e1b]">Healthy Recipe Ideas</h2>
        <span className="text-sm font-bold text-gray-400">84 recipes found</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {RECIPES.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={recipe.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={recipe.title} />
              <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#d35400] hover:bg-[#d35400] hover:text-white transition-all shadow-lg">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <div className="absolute bottom-6 left-6 bg-[#1b2e1b] text-white text-[9px] font-black px-4 py-2 rounded-lg uppercase tracking-widest">
                Made with BIOEXQUISIT
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex justify-between text-xs font-bold text-gray-400 mb-4 uppercase tracking-wider">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> {recipe.time}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">equalizer</span> {recipe.difficulty}</span>
              </div>
              <h3 className="text-2xl font-black text-[#1b2e1b] mb-4 group-hover:text-[#8fb23c] transition-colors">{recipe.title}</h3>
              <p className="text-gray-500 font-medium mb-8 leading-relaxed line-clamp-2">{recipe.desc}</p>
              <button className="mt-auto w-full py-4 bg-gray-50 text-[#1b2e1b] font-black rounded-xl hover:bg-[#8fb23c] hover:text-white transition-all">
                View Full Recipe
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="flex items-center gap-3 px-12 py-5 border-2 border-[#8fb23c] text-[#8fb23c] rounded-full font-black uppercase tracking-widest hover:bg-[#8fb23c] hover:text-white transition-all group">
          Load More Recipes
          <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
        </button>
      </div>

      {/* Newsletter */}
      <div className="mt-32 bg-[#1b2e1b] rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
        <div className="max-w-md relative z-10 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Want more healthy tips?</h3>
          <p className="text-white/60 text-lg font-medium">Subscribe and get 5 exclusive panela recipes delivered to your inbox every month.</p>
        </div>
        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 relative z-10">
          <input type="email" placeholder="Your email address" className="bg-white/10 border-white/20 rounded-2xl px-8 py-5 text-white placeholder:text-white/40 min-w-[320px] focus:ring-[#8fb23c] focus:border-[#8fb23c]" />
          <button className="bg-[#8fb23c] text-white px-10 py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all shadow-2xl">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
