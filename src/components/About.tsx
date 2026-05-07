import { motion } from 'motion/react';
import { Terminal, Bot, Gamepad2, Layout, Server, Users, GraduationCap, Code } from 'lucide-react';

const ROLES = [
  { name: 'Minecraft Developer', icon: Terminal },
  { name: 'Discord Developer', icon: Bot },
  { name: 'FiveM RP Creator', icon: Gamepad2 },
  { name: 'UI Designer', icon: Layout },
  { name: 'Community Manager', icon: Server },
  { name: 'Developer', icon: Users },
  { name: 'Student', icon: GraduationCap },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            I craft digital <br />
            <span className="text-neon-green">experiences</span> that matter.
          </h2>
          <p className="text-lg text-white/60 mb-8 leading-relaxed">
            I am an advanced Minecraft server developer, Discord bot developer, and FiveM roleplay system creator. 
            My journey began with a passion for gaming and evolved into a mission to build seamless virtual worlds and high-performance tools.
          </p>
          <div className="flex flex-wrap gap-3">
            {ROLES.map((role) => (
              <span
                key={role.name}
                className="px-4 py-2 rounded-lg glass-dark border-white/5 text-xs font-semibold text-white/80 flex items-center gap-2 hover:border-neon-green/30 hover:text-neon-green transition-all"
              >
                <role.icon size={14} />
                {role.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass border-white/10 p-4">
            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neon-green/20 to-blue-500/20 relative overflow-hidden flex items-center justify-center border border-white/10">
              {/* Abstract decorative graphic */}
              <div className="absolute inset-0 opacity-30">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-green rounded-full blur-[80px]" />
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full blur-[60px]" />
              </div>
              <div className="relative text-center">
                <div className="w-32 h-32 rounded-3xl glass-dark border border-neon-green/30 flex items-center justify-center text-neon-green mb-6 group-hover:scale-110 transition-all duration-500 shadow-neon">
                  <Code size={64} />
                </div>
                <div className="text-xl font-bold tracking-widest text-neon-green uppercase opacity-50 group-hover:opacity-100 transition-opacity">Developer</div>
              </div>
            </div>
          </div>
          
          {/* Animated Blob behind */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute -top-10 -left-10 w-full h-full bg-neon-green/5 blur-[100px] -z-10 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
