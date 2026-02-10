
import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Sparkles, Star, Send, Moon, Zap } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import TeddyBear from './components/TeddyBear';
import { generateTeddyMessage } from './services/geminiService';

const App: React.FC = () => {
  const [isWaving, setIsWaving] = useState(false);
  const [teddyMessage, setTeddyMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleTeddyClick = useCallback(async () => {
    if (loading) return;
    
    setIsWaving(true);
    setLoading(true);
    setShowMessage(false);

    const msg = await generateTeddyMessage("Maya");
    setTeddyMessage(msg);
    setLoading(false);
    setShowMessage(true);

    // Stop waving after 1.5 seconds
    setTimeout(() => setIsWaving(false), 1500);
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
        handleTeddyClick();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#110510] bg-[radial-gradient(circle_at_center,_#2a0a25_0%,_#110510_100%)] relative overflow-hidden flex flex-col items-center justify-start pb-12">
      <FloatingHearts />

      {/* Hero Section */}
      <header className="z-10 text-center mt-12 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-pink-600/20 blur-[100px] pointer-events-none"></div>
        <div className="flex justify-center gap-4 mb-4">
            <Moon className="text-purple-400 animate-pulse" />
            <Heart className="text-pink-500 fill-pink-500 animate-bounce" />
            <Zap className="text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-8xl font-cursive text-white mb-2 drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]">
          Happy Teddy Day, <span className="text-[#FF007F] text-glow">Maya!</span>
        </h1>
        <p className="text-xl md:text-2xl text-pink-300/80 font-medium italic mt-4">
          "Too cool to be just anyone's, but just soft enough for you."
        </p>
      </header>

      {/* Main Interaction Area */}
      <main className="z-10 flex flex-col items-center justify-center mt-8 w-full max-w-4xl px-4">
        <div className="relative mb-8">
            <TeddyBear isWaving={isWaving} onClick={handleTeddyClick} />
        </div>

        {/* Message Bubble */}
        <div className={`transition-all duration-700 transform w-full max-w-xl ${showMessage ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
            <div className="glass rounded-[40px] p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] border-2 border-pink-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF007F] text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-lg">
                    Confession from Kuromi
                </div>
                
                {loading ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-6">
                        <div className="w-12 h-12 border-4 border-pink-500/20 border-t-pink-500 rounded-full animate-spin"></div>
                        <p className="text-pink-400 font-bold tracking-widest uppercase text-xs">Summoning sassiness...</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <p className="text-3xl md:text-4xl font-cursive text-white leading-relaxed drop-shadow-md">
                            "{teddyMessage}"
                        </p>
                        <div className="mt-8 flex justify-center space-x-4">
                             <Star size={24} className="text-purple-500 fill-purple-500 animate-pulse" />
                             <Heart size={24} className="text-pink-500 fill-pink-500 animate-bounce" />
                             <Star size={24} className="text-purple-500 fill-purple-500 animate-pulse" />
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Love Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
            <LoveCard 
                title="Cheeky Love" 
                content="You make my heart race faster than Kuromi's tricycle. Happy Teddy Day, my gorgeous girl!" 
                icon={<Zap className="text-yellow-400" />}
            />
            <LoveCard 
                title="Black & Pink" 
                content="Life is better with you. You're the pink to my black hood, the sweetest part of my day." 
                icon={<Heart className="text-pink-500 fill-pink-500" />}
            />
            <LoveCard 
                title="Tough Love" 
                content="I'm only this soft for you, Maya. Everyone else gets the glare, you get the teddy hugs." 
                icon={<Moon className="text-purple-400" />}
            />
        </section>

        {/* Call to Action */}
        <button 
            onClick={handleTeddyClick}
            className="mt-16 pink-gradient hover:opacity-90 text-white px-12 py-5 rounded-full font-black text-xl shadow-[0_10px_30px_rgba(255,0,127,0.4)] transition-all hover:scale-110 active:scale-95 flex items-center gap-4 group uppercase tracking-widest"
        >
            Gimme More Love <Send size={22} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
        </button>
      </main>

      {/* Footer */}
      <footer className="z-10 mt-24 text-center px-4 mb-8">
        <p className="font-cursive text-4xl mb-3 text-white text-glow">To my Dearest Maya,</p>
        <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-cursive text-pink-400">Love of your life,</p>
            <p className="text-4xl font-cursive text-white drop-shadow-[0_0_8px_rgba(255,0,127,0.8)]">Sajak</p>
        </div>
      </footer>
    </div>
  );
};

const LoveCard: React.FC<{ title: string; content: string; icon: React.ReactNode }> = ({ title, content, icon }) => (
  <div className="glass p-8 rounded-3xl shadow-2xl border border-white/5 hover:border-pink-500/50 transition-all hover:-translate-y-3 group">
    <div className="bg-pink-500/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-white mb-3 tracking-wide">{title}</h3>
    <p className="text-pink-100/70 leading-relaxed font-medium text-lg">{content}</p>
  </div>
);

export default App;
