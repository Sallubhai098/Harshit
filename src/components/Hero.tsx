import { motion, useScroll, useTransform } from 'motion/react';
import { Rocket, MessageSquare, ChevronDown } from 'lucide-react';
import { useSound } from '../hooks/useSound';

export default function Hero() {
  const { playHoverSound, playClickSound } = useSound();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRYk8AndjxQLtCky_HVoZpJrJCiiZ0JEos_WulHmFYgtqC6-ZX-TBzEemCPRwi4zCrwgqDfBOZWx7vTcVm2aFcuVrCtTliXgQE&s=19&ec=121643169" 
          alt="Home Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gaming-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gaming-black/20 to-gaming-black" />
      </div>

      {/* Background Decorative Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" 
      />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border-white/10 text-neon-green text-xs md:text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          Proud to be a Pahadi 🌿
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
        >
          Harshit <span className="text-slate-800">|</span> <span className="text-gradient neon-glow">Sallubhai</span> 🏔️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-white/60 mb-12 font-medium"
        >
          Developer <span className="text-neon-green mx-2">•</span> 
          Gamer <span className="text-neon-green mx-2">•</span> 
          Manager
          <br />
          <span className="text-base md:text-lg block mt-4 text-white/40 max-w-2xl mx-auto">
            Building communities, servers, and tools that empower people.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="group relative px-8 py-4 bg-neon-green text-black font-bold rounded-xl flex items-center gap-2 overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket size={20} /> View Projects
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            onMouseEnter={playHoverSound}
            onClick={playClickSound}
            className="px-8 py-4 glass border-white/20 text-white font-bold rounded-xl flex items-center gap-2 transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
          >
            <MessageSquare size={20} /> Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
