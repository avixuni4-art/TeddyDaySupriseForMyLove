
import React, { useEffect, useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { FloatingHeart } from '../types';

const FloatingHearts: React.FC = () => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * (24 - 12) + 12}px`,
      duration: `${Math.random() * (12 - 6) + 6}s`,
      delay: `${Math.random() * 8}s`,
      type: Math.random() > 0.4 ? 'heart' : 'star',
      color: Math.random() > 0.5 ? '#FF007F' : '#7b00ff'
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute bottom-[-50px] opacity-40"
          style={{
            left: el.left,
            fontSize: el.size,
            color: el.color,
            animation: `float-up ${el.duration} linear infinite`,
            animationDelay: el.delay,
          }}
        >
          {el.type === 'heart' ? <Heart fill="currentColor" /> : <Star fill="currentColor" />}
        </div>
      ))}
      <style>{`
        @keyframes float-up {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default FloatingHearts;
