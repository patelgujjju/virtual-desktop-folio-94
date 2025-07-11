import React, { useState } from 'react';
import { Calendar, Wifi, Battery, Volume2, Settings, User, Monitor, Sun, Moon, Palette, Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWindowManager } from '../../contexts/WindowManagerContext';
import { useNavigate } from 'react-router-dom';

interface TaskbarProps {
  time: Date;
  theme: 'light' | 'dark' | 'retro';
  onThemeChange: (theme: 'light' | 'dark' | 'retro') => void;
}

const Taskbar = ({ time, theme, onThemeChange }: TaskbarProps) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const { windows, openWindow } = useWindowManager();
  const navigate = useNavigate();

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getTaskbarStyle = () => {
    if (theme === 'retro') {
      return 'bg-gray-400 border-t-2 border-gray-300';
    }
    return theme === 'light' 
      ? 'bg-white/90 backdrop-blur-md border-t border-gray-200' 
      : 'bg-black/90 backdrop-blur-md border-t border-gray-700';
  };

  const getStartMenuStyle = () => {
    if (theme === 'retro') {
      return 'bg-gray-300 border-2 border-gray-400';
    }
    return theme === 'light' 
      ? 'bg-white border border-gray-200 shadow-lg' 
      : 'bg-gray-900 border border-gray-700 shadow-lg';
  };

  const quickApps = [
    { name: 'Projects', icon: '📁', type: 'projects', title: 'My Projects' },
    { name: 'Skills', icon: '⚙️', type: 'skills', title: 'Skills & Technologies' },
    { name: 'Experience', icon: '💼', type: 'experience', title: 'Work Experience' },
    { name: 'Resume', icon: '📄', type: 'resume', title: 'Resume Viewer' },
    { name: 'Terminal', icon: '💻', type: 'terminal', title: 'Terminal' },
    { name: 'Chrome', icon: '🌐', type: 'browser', title: 'Chrome Browser' }
  ];

  return (
    <>
      <div className={`fixed bottom-0 left-0 right-0 h-12 ${getTaskbarStyle()} flex items-center justify-between px-4 z-50`}>
        {/* Start Button */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowStartMenu(!showStartMenu)}
            className={`p-2 ${theme === 'retro' ? 'hover:bg-gray-300' : ''}`}
          >
            {showStartMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {/* Portfolio Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/main')}
            className={`hidden sm:flex items-center space-x-2 px-3 py-2 ${theme === 'retro' ? 'hover:bg-gray-300' : ''}`}
          >
            <ExternalLink className="w-4 h-4" />
            <span className="text-sm">Portfolio</span>
          </Button>

          {/* Active Windows */}
          <div className="hidden md:flex items-center space-x-1">
            {windows.map((window) => (
              <Button
                key={window.id}
                variant="ghost"
                size="sm"
                className={`px-3 py-1 text-xs max-w-32 truncate ${
                  window.isActive ? 'bg-blue-500/20' : ''
                } ${theme === 'retro' ? 'hover:bg-gray-300' : ''}`}
              >
                {window.title}
              </Button>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div className="flex items-center space-x-3 text-sm">
          {/* Theme Switcher - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onThemeChange('light')}
              className={`p-1 ${theme === 'light' ? 'bg-blue-500/20' : ''} ${theme === 'retro' ? 'hover:bg-gray-300' : ''}`}
            >
              <Sun className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onThemeChange('dark')}
              className={`p-1 ${theme === 'dark' ? 'bg-blue-500/20' : ''} ${theme === 'retro' ? 'hover:bg-gray-300' : ''}`}
            >
              <Moon className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onThemeChange('retro')}
              className={`p-1 ${theme === 'retro' ? 'bg-blue-500/20' : ''} ${theme === 'retro' ? 'hover:bg-gray-300' : ''}`}
            >
              <Palette className="w-4 h-4" />
            </Button>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs">
            <Wifi className="w-4 h-4" />
            <Volume2 className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
          
          <div className="flex flex-col items-end text-xs leading-tight">
            <span>{formatTime(time)}</span>
            <span className="hidden sm:block">{time.toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className={`fixed bottom-12 left-4 w-72 sm:w-80 ${getStartMenuStyle()} rounded-lg p-4 z-50`}>
          <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">DP</span>
            </div>
            <div>
              <div className="font-semibold">Dhruvinkumar Patel</div>
              <div className="text-xs text-gray-500">AI/ML Engineer</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {quickApps.map((app) => (
              <Button
                key={app.type}
                variant="ghost"
                className="flex flex-col items-center p-3 h-auto hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => {
                  openWindow(app.type, app.title, app.type);
                  setShowStartMenu(false);
                }}
              >
                <span className="text-2xl mb-1">{app.icon}</span>
                <span className="text-xs text-center">{app.name}</span>
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                navigate('/main');
                setShowStartMenu(false);
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Portfolio Website
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setShowStartMenu(false)}
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Taskbar;
