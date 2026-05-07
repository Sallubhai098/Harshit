import { motion } from 'motion/react';
import { Mail, Send, Instagram, Youtube, MessageSquare } from 'lucide-react';
import { cn } from '../lib/utils';
import React from 'react';
import { useSound } from '../hooks/useSound';

export default function Contact() {
  const { playHoverSound, playClickSound } = useSound();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    // Logic to handle form submission
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-glow-mesh">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Let's build <br />
              something <span className="text-neon-green">epic.</span>
            </h2>
            <p className="text-lg text-white/50 mb-12 max-w-md">
              Whether it's a Minecraft ecosystem, a roleplay server, or a custom tool, I'm ready to bring your vision to life.
            </p>

            <div className="space-y-6">
              <ContactInfoItem icon={Mail} title="Email" value="jharshit189@gmail.com" />
              <ContactInfoItem icon={MessageSquare} title="Discord" value="sallubhai_harshit" />
            </div>

            <div className="mt-12 flex gap-4">
              <SocialLink icon={Youtube} href="#" color="hover:text-red-500" />
              <SocialLink icon={Instagram} href="#" color="hover:text-pink-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark border-white/10 p-8 md:p-12 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Name" type="text" placeholder="Harshit" />
                <InputGroup label="Email" type="email" placeholder="harshit@example.com" />
              </div>
              <InputGroup label="Project / Topic" type="text" placeholder="Community SMP Development" />
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-white/30 mb-2">Message</label>
                <textarea
                  placeholder="Tell me about your vision..."
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-green/50 focus:outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                onMouseEnter={playHoverSound}
                className="w-full py-4 bg-neon-green text-black font-black rounded-xl hover:shadow-neon hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon: Icon, title, value }: { icon: any; title: string; value: string }) {
  const { playHoverSound } = useSound();
  return (
    <div onMouseEnter={playHoverSound} className="flex items-center gap-4 group cursor-default">
      <div className="w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-neon-green group-hover:shadow-neon transition-all">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-white/30">{title}</h4>
        <p className="font-bold text-white group-hover:text-neon-green transition-colors">{value}</p>
      </div>
    </div>
  );
}

function InputGroup({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="w-full">
      <label className="block text-xs font-black uppercase tracking-widest text-white/20 mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-green/50 focus:outline-none transition-all"
      />
    </div>
  );
}

function SocialLink({ icon: Icon, href, color }: { icon: any; href: string; color: string }) {
  const { playHoverSound, playClickSound } = useSound();
  return (
    <a
      href={href}
      onMouseEnter={playHoverSound}
      onClick={playClickSound}
      className={cn(
        "w-12 h-12 rounded-xl glass border-white/5 flex items-center justify-center text-white/40 transition-all",
        color,
        "hover:border-current hover:bg-white/5"
      )}
    >
      <Icon size={20} />
    </a>
  );
}
