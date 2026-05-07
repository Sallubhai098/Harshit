import { motion } from 'motion/react';
import { Youtube, ArrowRight } from 'lucide-react';

const CHANNELS = [
  { name: 'Icky yt', url: 'https://www.youtube.com/@ickYyt' },
  { name: 'DevuuuOG', url: 'https://www.youtube.com/@DevuuuOG' }
];

export default function Content() {
  return (
    <section id="content" className="py-24 px-6 md:px-12 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Content <span className="text-neon-green">Creator</span></h2>
            <p className="text-white/40">Sharing the journey and tutorials with the community.</p>
          </div>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neon-green font-bold text-sm hover:underline group">
            View All Content <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHANNELS.map((channel, index) => (
            <a 
              key={channel.name} 
              href={channel.url} 
              target="_blank" 
              rel="noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group relative h-64 md:h-80 rounded-3xl overflow-hidden glass border-white/5"
              >
                {/* Fake Video Preview UI */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-blue-500/10 opacity-30 group-hover:scale-110 transition-transform duration-700" />
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end items-start text-left z-10">
                  <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                    <Youtube size={32} fill="currentColor" />
                  </div>
                  <h3 className="text-3xl font-black mb-2 group-hover:text-neon-green transition-colors">{channel.name}</h3>
                  <p className="text-white/40 text-sm font-bold uppercase tracking-widest">Video Production • Gaming</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
