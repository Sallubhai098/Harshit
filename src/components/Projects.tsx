import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { ExternalLink, Star } from 'lucide-react';
import { useSound } from '../hooks/useSound';

const TABS = ['All', 'Active', 'Closed', 'Coming Soon'] as const;
type TabType = typeof TABS[number];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const { playHoverSound, playClickSound } = useSound();

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === 'All') return true;
    return project.status === activeTab;
  });

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4"><span className="text-gradient">Featured</span> <span className="neon-glow">Projects</span></h2>
            <p className="text-slate-500">Minecraft ecosystems and roleplay infrastructures.</p>
          </div>

          <div className="flex bg-white/5 p-1 rounded-xl glass-dark border-white/5">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  playClickSound();
                }}
                onMouseEnter={playHoverSound}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap',
                  activeTab === tab 
                    ? 'bg-neon-green text-black shadow-neon' 
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  key?: string;
}

function ProjectCard({ project }: ProjectCardProps) {
  const { playHoverSound, playClickSound } = useSound();
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={playHoverSound}
      className={cn(
        "group relative p-[1px] rounded-3xl overflow-hidden transition-all duration-500",
        project.featured ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-neon-green/40 to-blue-500/40 shadow-[0_0_20px_rgba(34,197,94,0.15)]" : "bg-slate-800/50 hover:bg-slate-700/50"
      )}
    >
      <div className="relative h-full glass-dark p-6 md:p-8 rounded-[23px] flex flex-col justify-between overflow-hidden">
        {/* Featured Background Glow */}
        {project.featured && (
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/5 blur-[80px] -z-10 animate-pulse" />
        )}
        
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <div className={cn(
                "w-2 h-2 rounded-full",
                project.status === 'Active' ? "bg-green-500 shadow-[0_0_8px_#22c55e]" :
                project.status === 'Closed' ? "bg-red-500" : "bg-yellow-500"
              )} />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{project.status}</span>
            </div>
            
            {project.featured && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-green text-slate-950 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                <Star size={10} fill="currentColor" /> Featured
              </div>
            )}
          </div>

          <h3 className={cn(
            "font-black mb-4 group-hover:text-neon-green transition-colors leading-tight",
            project.featured ? "text-3xl md:text-4xl neon-glow" : "text-xl md:text-2xl"
          )}>
            {project.title}
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-8">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold px-2 py-1 rounded bg-slate-800/50 text-slate-500 border border-slate-700/50 group-hover:text-neon-green group-hover:border-neon-green/20 transition-colors">#{tag}</span>
            ))}
          </div>
          
          <button 
            onClick={playClickSound}
            className="w-10 h-10 rounded-xl glass border-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-neon-green group-hover:border-neon-green/40 transition-all transform group-hover:scale-110"
          >
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
