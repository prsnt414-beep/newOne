import { Heart } from 'lucide-react';
import img from '../img/img.jpeg';

function YesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="valentine-box bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-2xl w-full text-center animate-scale-in">
        
        <div className="flex justify-center gap-3 mb-8">
          <Heart className="text-pink-500 fill-pink-500 animate-pulse" size={48} />
          <Heart className="text-red-500 fill-red-500 animate-pulse" size={60} />
          <Heart className="text-pink-500 fill-pink-500 animate-pulse" size={48} />
        </div>

        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-6 animate-fade-in">
          Yay! 🎉
        </h1>

        <p className="text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-delayed">
          I knew you'd say yes! ❤️
          <br />
          You've made me the happiest person in the world!
          <br />
          🥰 Happy Valentine’s Day to the one who makes my heart smile… my Ghonchu lal 💕
        </p>

        {/* ❤️ REAL IMAGE SECTION */}
        <div className="rounded-2xl overflow-hidden mb-8 border-4 border-pink-300 animate-fade-in-slow shadow-lg">
          <img
            src={img}
            alt="My Valentine"
            className="w-full h-[480px] object-cover rounded-xl"
          />
          <p className="text-gray-600 mt-3 text-lg">
            Our special moment 💝
          </p>
        </div>

        <div className="flex justify-center gap-2 text-4xl animate-hearts-float">
          <span>💕</span>
          <span>💖</span>
          <span>💗</span>
          <span>💓</span>
          <span>💝</span>
        </div>

      </div>
    </div>
  );
}

export default YesPage;
