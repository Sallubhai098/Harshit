import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Terminal, Volume2, VolumeX } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { cn } from '../lib/utils';
import { useSound } from '../hooks/useSound';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMuted, setIsMuted, playHoverSound, playClickSound } = useSound();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'glass-dark py-3 translate-y-0' : 'bg-transparent pt-8'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-neon-green/20 border border-neon-green/30 flex items-center justify-center text-neon-green shadow-neon">
            <Terminal size={20} />
          </div>
          <span className="hidden md:block font-display font-bold text-lg tracking-tight">
            Harshit <span className="text-neon-green">|</span> Sallubhai
          </span>
        </div>

        <ul className="flex items-center gap-6 md:gap-8 overflow-x-auto no-scrollbar">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="text-sm md:text-base font-medium text-white/70 hover:text-neon-green transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (isMuted) playClickSound();
            }}
            onMouseEnter={playHoverSound}
            className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-white/40 hover:text-neon-green transition-all"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <a
            href="#contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="px-6 py-2 rounded-full glass hover:bg-neon-green/10 border-white/20 hover:border-neon-green/50 text-sm font-semibold transition-all"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-neon-green origin-left w-full"
        style={{ scaleX }}
      />
    </nav>
  );
}
