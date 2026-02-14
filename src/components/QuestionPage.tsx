import { useState } from 'react';
import { Heart } from 'lucide-react';

interface QuestionPageProps {
  onYes: () => void;
}

function QuestionPage({ onYes }: QuestionPageProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;

    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="valentine-box bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 max-w-md w-full text-center animate-float">
        <div className="flex justify-center gap-2 mb-6">
          <Heart className="text-pink-500 fill-pink-500 animate-heartbeat" size={32} />
          <Heart className="text-red-500 fill-red-500 animate-heartbeat-delayed" size={40} />
          <Heart className="text-pink-500 fill-pink-500 animate-heartbeat" size={32} />
        </div>

        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-8">
        💖 Sanu, my love… will you be my Valentine?❤️
        </h1>

        <div className="flex justify-center gap-6 mt-8 relative">
          <button
            onClick={onYes}
            className="yes-button bg-gradient-to-r from-pink-500 to-red-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            Yes! 💕
          </button>

          <button
            onMouseEnter={moveNoButton}
            onClick={moveNoButton}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
            className="no-button bg-gray-300 text-gray-700 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl cursor-pointer"
          >
            No
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          <span className="text-3xl animate-bounce">❤️</span>
          <span className="text-3xl animate-bounce-delayed">💖</span>
          <span className="text-3xl animate-bounce">💝</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;