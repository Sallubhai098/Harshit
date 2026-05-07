import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SoundContextType {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  playHoverSound: () => void;
  playClickSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

// Reliable public UI sounds
const HOVER_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'; // A subtle high-tech blip
const CLICK_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'; // A clean click

export function SoundProvider({ children }: { children: ReactNode }) {
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('sallubhai_muted');
    return saved ? JSON.parse(saved) : false;
  });

  const [hoverAudio, setHoverAudio] = useState<HTMLAudioElement | null>(null);
  const [clickAudio, setClickAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const h = new Audio(HOVER_SOUND_URL);
    const c = new Audio(CLICK_SOUND_URL);
    h.volume = 0.1; // Very subtle
    c.volume = 0.2;
    setHoverAudio(h);
    setClickAudio(c);
    
    localStorage.setItem('sallubhai_muted', JSON.stringify(isMuted));
  }, [isMuted]);

  const playHoverSound = () => {
    if (!isMuted && hoverAudio) {
      hoverAudio.currentTime = 0;
      hoverAudio.play().catch(() => {});
    }
  };

  const playClickSound = () => {
    if (!isMuted && clickAudio) {
      clickAudio.currentTime = 0;
      clickAudio.play().catch(() => {});
    }
  };

  return (
    <SoundContext.Provider value={{ isMuted, setIsMuted, playHoverSound, playClickSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
