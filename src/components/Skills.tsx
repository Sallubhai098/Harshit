import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants';
import { useSound } from '../hooks/useSound';

export default function Skills() {
  const { playHoverSound } = useSound();
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Core <span className="text-neon-green">Abilities</span></h2>
          <p className="text-white/40">Technical proficiencies and management expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => {
            const IconComponent = (LucideIcons as any)[skill.icon];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={playHoverSound}
                className="group p-8 rounded-2xl glass-dark border-white/5 hover:border-neon-green/30 transition-all relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/5 transition-colors duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-neon-green/10 flex items-center justify-center text-neon-green mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all">
                    {IconComponent && <IconComponent size={24} />}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">{skill.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/20">{skill.category}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
