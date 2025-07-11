
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
      <div className={`h-screen w-full ${getDesktopBackground()} relative overflow-hidden ${theme === 'retro' ? 'pixelated' : ''}`}>
        {/* Background Image - Responsive */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80')`
          }}
        />
        
        {/* Background Overlay */}
        <div className={`absolute inset-0 ${getBackgroundOverlay()}`} />

        {/* Desktop Icons - Hidden on mobile */}
        <div className="hidden sm:block">
          <DesktopIcons theme={theme} />
        </div>

        {/* Window Manager */}
        <WindowManager theme={theme} />

        {/* Taskbar */}
        <Taskbar time={time} theme={theme} onThemeChange={setTheme} />
      </div>
    </WindowManagerProvider>
  );
};

export default Desktop;
