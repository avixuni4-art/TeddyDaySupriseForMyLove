
import React from 'react';

interface TeddyBearProps {
  isWaving: boolean;
  onClick: () => void;
}

const TeddyBear: React.FC<TeddyBearProps> = ({ isWaving, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative w-72 h-72 md:w-96 md:h-96 cursor-pointer transition-transform duration-500 hover:scale-105 active:scale-95 z-20 ${isWaving ? 'animate-bounce' : 'animate-float'}`}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_25px_rgba(255,0,127,0.4)]">
        {/* Kuromi Jester Ears */}
        <path d="M40 60 L10 10 Q20 50 50 60 Z" fill="#1A1A1A" stroke="#000" strokeWidth="1" />
        <path d="M160 60 L190 10 Q180 50 150 60 Z" fill="#1A1A1A" stroke="#000" strokeWidth="1" />
        
        {/* Pompoms on ears */}
        <circle cx="10" cy="10" r="5" fill="#FF007F" />
        <circle cx="190" cy="10" r="5" fill="#FF007F" />

        {/* Head/Hood */}
        <circle cx="100" cy="90" r="65" fill="#1A1A1A" />
        
        {/* White Face */}
        <path d="M55 90 Q100 40 145 90 Q145 140 100 140 Q55 140 55 90" fill="#FFFFFF" />
        
        {/* Pink Skull on Forehead */}
        <path d="M100 45 L95 52 L105 52 Z" fill="#FF007F" />
        <circle cx="95" cy="48" r="4" fill="#FF007F" />
        <circle cx="105" cy="48" r="4" fill="#FF007F" />
        
        {/* Eyes - Sharp Sanrio Style */}
        <path d="M75 85 Q80 75 85 85" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <path d="M115 85 Q120 75 125 85" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" />
        <circle cx="80" cy="95" r="5" fill="#000" />
        <circle cx="120" cy="95" r="5" fill="#000" />
        
        {/* Nose & Mouth */}
        <circle cx="100" cy="105" r="3" fill="#FF007F" opacity="0.8" />
        <path d="M92 115 Q100 122 108 115" fill="none" stroke="#000" strokeWidth="1.5" />

        {/* Body */}
        <circle cx="100" cy="155" r="40" fill="#FFFFFF" />
        
        {/* Collar/Ruff with Pompoms */}
        <path d="M60 135 L50 145 L70 145 L80 155 L100 145 L120 155 L130 145 L150 145 L140 135 Z" fill="#1A1A1A" />
        <circle cx="50" cy="145" r="4" fill="#FF007F" />
        <circle cx="100" cy="145" r="4" fill="#FF007F" />
        <circle cx="150" cy="145" r="4" fill="#FF007F" />

        {/* Waving Arm */}
        <g style={{ transformOrigin: '70px 145px', transform: isWaving ? 'rotate(-40deg)' : 'rotate(0)' }} className="transition-transform duration-300">
           <path d="M65 145 Q40 155 35 140" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none" />
        </g>
        <path d="M135 145 Q160 155 165 140" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none" />
      </svg>
      
      {/* Interaction Hint */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,0,127,0.5)] text-sm font-bold border-2 border-[#FF007F] animate-pulse whitespace-nowrap">
        Tap for a Sassy Surprise! 🖤
      </div>
    </div>
  );
};

export default TeddyBear;
