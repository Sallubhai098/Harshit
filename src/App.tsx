import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { Terminal } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Content from './components/Content';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Loader animation
    const tl = gsap.timeline({
      onComplete: () => setLoading(false)
    });

    tl.to(percentRef.current, {
      duration: 2,
      innerText: 100,
      snap: { innerText: 1 },
      ease: "power2.inOut",
    })
    .to(loaderRef.current, {
      duration: 0.8,
      y: '-100%',
      ease: "expo.inOut"
    });

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {loading && (
          <motion.div
            ref={loaderRef}
            exit={{ y: '-100%' }}
            className="fixed inset-0 z-[100] bg-gaming-black flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-neon-green/20 border-2 border-neon-green flex items-center justify-center text-neon-green mb-8 animate-pulse shadow-neon">
                <Terminal size={40} />
              </div>
              <div className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter overflow-hidden">
                <span className="text-white/20 uppercase tracking-[0.2em]">Loading System</span>
                <span ref={percentRef} className="text-neon-green ml-4 font-mono">0</span>
                <span className="text-neon-green font-mono">%</span>
              </div>
            </div>
            
            {/* Animated Bar */}
            <div className="mt-8 w-64 h-1 bg-white/5 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 bg-neon-green shadow-neon" 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Content />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

