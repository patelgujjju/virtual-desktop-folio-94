
import React, { useState } from 'react';
import Taskbar from './Taskbar';
import DesktopIcons from './DesktopIcons';
import WindowManager from '../windows/WindowManager';
import { WindowManagerProvider } from '../../contexts/WindowManagerContext';

const Desktop = () => {
  const [time, setTime] = useState(new Date());
  const [theme, setTheme] = useState<'light' | 'dark' | 'retro'>('dark');

  React.useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getDesktopBackground = () => {
    switch (theme) {
      case 'light':
        return 'bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400';
      case 'retro':
        return 'bg-teal-400';
      default:
        return 'bg-black';
    }
  };

  const getBackgroundOverlay = () => {
    switch (theme) {
      case 'light':
        return 'bg-white/10';
      case 'retro':
        return 'bg-teal-600/20';
      default:
        return 'bg-black/30';
    }
  };

  return (
    <WindowManagerProvider>
      <div className={`h-screen ${getDesktopBackground()} relative overflow-hidden ${theme === 'retro' ? 'pixelated' : ''}`}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/834ec5d8-978e-4c19-9098-7666d0839906.png')`
          }}
        />
        
        {/* Background Overlay */}
        <div className={`absolute inset-0 ${getBackgroundOverlay()}`} />

        {/* Desktop Icons */}
        <DesktopIcons theme={theme} />

        {/* Window Manager */}
        <WindowManager theme={theme} />

        {/* Taskbar */}
        <Taskbar time={time} theme={theme} onThemeChange={setTheme} />
      </div>
    </WindowManagerProvider>
  );
};

export default Desktop;
