import { Youtube, Instagram, Heart, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-gaming-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 rounded-lg bg-neon-green/20 border border-neon-green/30 flex items-center justify-center text-neon-green">
              <Terminal size={14} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Harshit <span className="text-neon-green">|</span> Sallubhai
            </span>
          </div>
          <p className="text-sm text-white/30 max-w-xs md:text-left text-center">
            Empowering individuals and improving each day. Building the future of Minecraft and community ecosystems.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg glass-dark border-white/5 flex items-center justify-center text-white/30 hover:text-red-500 hover:border-red-500/30 transition-all">
              <Youtube size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg glass-dark border-white/5 flex items-center justify-center text-white/30 hover:text-pink-500 hover:border-pink-500/30 transition-all">
              <Instagram size={18} />
            </a>
          </div>
          <p className="text-xs text-white/20 flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-current" /> by Sallubhai
          </p>
        </div>
      </div>
    </footer>
  );
}
