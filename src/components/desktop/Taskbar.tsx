
import React, { useState } from 'react';
import { Calendar, Wifi, Battery, Volume2, Settings, User, Monitor, Sun, Moon, Palette, Menu, X, ExternalLink, Sparkles } from 'lucide-react';
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
      ? 'bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg' 
      : 'bg-gray-900/95 backdrop-blur-xl border-t border-gray-600 shadow-lg text-white';
  };

  const getStartMenuStyle = () => {
    if (theme === 'retro') {
      return 'bg-gray-300 border-2 border-gray-400';
    }
    return theme === 'light' 
      ? 'bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl' 
      : 'bg-gray-800/95 backdrop-blur-xl border border-gray-600 shadow-2xl text-white';
  };

  const getButtonStyle = () => {
    if (theme === 'retro') {
      return 'hover:bg-gray-300 text-black';
    }
    return theme === 'light' 
      ? 'hover:bg-blue-500/10 text-gray-800' 
      : 'hover:bg-gray-700/50 text-gray-100';
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
            className={`p-2 transition-all duration-200 ${getButtonStyle()}`}
          >
            {showStartMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>

          {/* Portfolio Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/main')}
            className={`hidden sm:flex items-center space-x-2 px-3 py-2 transition-all duration-200 ${getButtonStyle()}`}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Portfolio</span>
          </Button>

          {/* Active Windows */}
          <div className="hidden md:flex items-center space-x-1">
            {windows.map((window) => (
              <Button
                key={window.id}
                variant="ghost"
                size="sm"
                className={`px-3 py-1 text-xs max-w-32 truncate transition-all duration-200 ${
                  window.isActive 
                    ? 'bg-blue-500/20 border-b-2 border-blue-500' 
                    : theme === 'dark' 
                      ? 'hover:bg-gray-700/50 text-gray-100' 
                      : 'hover:bg-gray-500/10'
                } ${theme === 'retro' ? 'hover:bg-gray-300 text-black' : ''}`}
              >
                {window.title}
              </Button>
            ))}
          </div>
        </div>

        {/* System Tray */}
        <div className="flex items-center space-x-3 text-sm">
          {/* Theme Switcher - Hidden on mobile */}
          <div className={`hidden sm:flex items-center space-x-1 rounded-full p-1 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
          }`}>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onThemeChange('light')}
              className={`p-1 rounded-full transition-all duration-200 ${
                theme === 'light' 
                  ? 'bg-white shadow-md text-gray-800' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-200'
              }`}
            >
              <Sun className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onThemeChange('dark')}
              className={`p-1 rounded-full transition-all duration-200 ${
                theme === 'dark' 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              <Moon className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onThemeChange('retro')}
              className={`p-1 rounded-full transition-all duration-200 ${
                theme === 'retro' 
                  ? 'bg-teal-500 text-white shadow-md' 
                  : theme === 'dark'
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-200'
              }`}
            >
              <Palette className="w-4 h-4" />
            </Button>
          </div>

          <div className={`hidden sm:flex items-center space-x-2 text-xs ${
            theme === 'dark' ? 'text-gray-300' : 'opacity-70'
          }`}>
            <Wifi className="w-4 h-4" />
            <Volume2 className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
          
          <div className={`flex flex-col items-end text-xs leading-tight ${
            theme === 'dark' ? 'text-gray-100' : ''
          }`}>
            <span className="font-medium">{formatTime(time)}</span>
            <span className={`hidden sm:block text-xs ${
              theme === 'dark' ? 'text-gray-400' : 'opacity-70'
            }`}>{time.toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Start Menu */}
      {showStartMenu && (
        <div className={`fixed bottom-12 left-4 w-72 sm:w-80 ${getStartMenuStyle()} rounded-xl p-4 z-50 animate-in slide-in-from-bottom-2 duration-200`}>
          <div className={`flex items-center space-x-3 mb-4 pb-4 border-b ${
            theme === 'dark' ? 'border-gray-600' : 'border-gray-200'
          }`}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">DP</span>
            </div>
            <div>
              <div className="font-semibold">Dhruvinkumar Patel</div>
              <div className={`text-xs ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>AI/ML Engineer</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {quickApps.map((app) => (
              <Button
                key={app.type}
                variant="ghost"
                className={`flex flex-col items-center p-3 h-auto transition-all duration-200 rounded-xl ${
                  theme === 'dark'
                    ? 'hover:bg-blue-900/20 hover:from-blue-900/20 hover:to-purple-900/20'
                    : 'hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50'
                }`}
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
              className={`w-full justify-start transition-all duration-200 rounded-lg ${
                theme === 'dark'
                  ? 'hover:bg-blue-900/20 hover:from-blue-900/20 hover:to-purple-900/20'
                  : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
              }`}
              onClick={() => {
                navigate('/main');
                setShowStartMenu(false);
              }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Portfolio Website
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start transition-all duration-200 rounded-lg ${
                theme === 'dark'
                  ? 'hover:bg-blue-900/20 hover:from-blue-900/20 hover:to-purple-900/20'
                  : 'hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
              }`}
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
