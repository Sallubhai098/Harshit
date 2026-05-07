export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Project {
  title: string;
  description: string;
  status: 'Active' | 'Closed' | 'Coming Soon';
  tags: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  details: string[];
  category: 'Minecraft' | 'Hosting' | 'FiveM';
}

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'Minecraft (Plugins, Skript, Config)', icon: 'Terminal', category: 'Dev' },
  { name: 'Discord Bots & Automation', icon: 'Bot', category: 'Dev' },
  { name: 'FiveM Roleplay Systems', icon: 'Gamepad2', category: 'Dev' },
  { name: 'UI/UX Design', icon: 'Layout', category: 'Design' },
  { name: 'Server Management', icon: 'Server', category: 'Management' },
  { name: 'Community Building', icon: 'Users', category: 'Management' },
];

export const PROJECTS: Project[] = [
  { 
    title: 'Minesmp Season 1/2/3', 
    description: 'A thriving Minecraft survival multiplayer experience with custom mechanics and community events.', 
    status: 'Active', 
    tags: ['Minecraft', 'Community'] 
  },
  { 
    title: 'Ragnarok Network', 
    description: 'Advanced competitive server network focusing on performance and player engagement.', 
    status: 'Active', 
    tags: ['Minecraft', 'Network'] 
  },
  { 
    title: 'Community SMP', 
    description: 'A dedicated space for builders and players to collaborate in a vanilla+ environment.', 
    status: 'Active', 
    tags: ['Minecraft', 'SMP'] 
  },
  { 
    title: 'Choco MC', 
    description: 'Custom minigames server with unique powerups and progression systems.', 
    status: 'Closed', 
    tags: ['Minecraft', 'Minigames'] 
  },
  { 
    title: 'Blue MC', 
    description: 'Exploration focused server with custom world generation.', 
    status: 'Closed', 
    tags: ['Minecraft', 'Survival'] 
  },
  { 
    title: 'WaterMC', 
    description: 'Ocean-themed survival server with custom underwater mechanics.', 
    status: 'Closed', 
    tags: ['Minecraft', 'Themes'] 
  },
  { 
    title: 'Mafia Empire Roleplay', 
    description: 'A massive FiveM roleplay experience featuring deep economic systems and faction warfare.', 
    status: 'Coming Soon', 
    tags: ['FiveM', 'Roleplay', 'Featured'],
    featured: true
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Minesmp',
    role: 'Lead Developer',
    period: 'Active',
    details: ['Developing custom features.', 'Managing server performance.', 'Community oversight.'],
    category: 'Minecraft'
  },
  {
    company: 'FireMC',
    role: 'Jr Mod',
    period: 'Left',
    details: ['Moderated player interactions.', 'Resolved conflicts.', 'Supported event management.'],
    category: 'Minecraft'
  },
  {
    company: 'All Night Hosting',
    role: 'Manager',
    period: 'Left',
    details: ['Infrastructure management.', 'Customer support lead.', 'Service optimization.'],
    category: 'Hosting'
  },
  {
    company: 'Arnol Hosting',
    role: 'CEO',
    period: 'Left',
    details: ['Strategic direction.', 'Business operations.', 'Team management.'],
    category: 'Hosting'
  },
  {
    company: 'Mafia Empire RP',
    role: 'System Creator (S2-S5)',
    period: 'Ongoing',
    details: ['Building complex roleplay systems.', 'Optimizing scripts.', 'Managing internal economies.'],
    category: 'FiveM'
  },
  {
    company: 'Trenches RP',
    role: 'Developer (India)',
    period: 'Past',
    details: ['Implemented regional optimizations.', 'Bug fixing and system updates.'],
    category: 'FiveM'
  },
];
