import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { cn } from '../lib/utils';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4">The <span className="text-gradient neon-glow">Timeline</span></h2>
          <p className="text-slate-500">A journey of creation and management across virtual realms.</p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-green/30 to-transparent transform -translate-x-1/2 hidden md:block" />

          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={item.company + item.role} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  item: typeof EXPERIENCE[0];
  index: number;
  key?: string | number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col md:flex-row gap-8 items-start md:items-center",
        isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Connector Point */}
      <div className="absolute left-0 md:left-1/2 top-2 md:top-1/2 w-4 h-4 bg-neon-green rounded-full transform -translate-x-1/2 -md:translate-y-1/2 shadow-neon z-10 border-4 border-gaming-black" />

      <div className={cn("w-full md:w-1/2", isEven ? "md:text-left" : "md:text-right")}>
        <div className={cn(
          "glass-dark p-8 rounded-3xl border-white/5 relative group cursor-default overflow-hidden",
          "hover:border-neon-green/30 transition-all duration-500"
        )}>
          {/* Decorative Background Icon */}
          <div className="absolute -bottom-6 -right-6 text-neon-green/5 transform rotate-12 group-hover:scale-125 transition-transform duration-700 pointer-events-none">
            <span className="text-9xl font-black">{item.category[0]}</span>
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-neon-green">{item.category}</span>
            <h3 className="text-2xl font-black text-white">{item.company}</h3>
            <div className="flex items-center gap-2 text-sm font-medium text-white/40">
              <span className="text-white/80">{item.role}</span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{item.period}</span>
            </div>
          </div>

          <ul className={cn(
            "space-y-3",
            isEven ? "" : "md:flex md:flex-col md:items-end"
          )}>
            {item.details.map((detail, dIndex) => (
              <li key={dIndex} className="flex items-start gap-2 text-sm text-white/50 leading-relaxed">
                <CheckCircle2 size={16} className="text-neon-green shrink-0 mt-0.5" />
                <span className={cn(isEven ? "" : "md:text-right")}>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Placeholder for the other side on desktop */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}
