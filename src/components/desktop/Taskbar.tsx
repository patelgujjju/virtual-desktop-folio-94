
import React, { useState } from 'react';
import { 
  Menu, 
  Chrome, 
  FolderOpen, 
  Volume2,
  Wifi,
  Battery,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';
import { useWindowManager } from '../../contexts/WindowManagerContext';

interface TaskbarProps {
  time: Date;
  theme: 'light' | 'dark' | 'retro';
  onThemeChange: (theme: 'light' | 'dark' | 'retro') => void;
}

const Taskbar = ({ time, theme, onThemeChange }: TaskbarProps) => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const { openWindow, windows } = useWindowManager();

  const taskbarApps = [
    {
      id: 'browser',
      name: 'Browser',
      icon: Chrome,
      onClick: () => openWindow('browser', 'Chrome Browser', 'browser')
    },
    {
      id: 'explorer',
      name: 'File Explorer',
      icon: FolderOpen,
      onClick: () => openWindow('explorer', 'File Explorer', 'explorer')
    }
  ];

  const getTaskbarStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-white/90 backdrop-blur-xl border-t border-gray-200 text-gray-800';
      case 'retro':
        return 'bg-gray-300 border-t-2 border-gray-100 border-l-2 border-l-gray-100 border-r-2 border-r-gray-600 border-b-2 border-b-gray-600 text-black';
      default:
        return 'bg-black/40 backdrop-blur-lg border-t border-white/10 text-white';
    }
  };

  const getButtonStyle = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-100 text-gray-700';
      case 'retro':
        return 'hover:bg-gray-200 border border-gray-500 bg-gray-300 text-black';
      default:
        return 'hover:bg-white/10 text-white';
    }
  };

  return (
    <div className={`absolute bottom-0 left-0 right-0 h-12 sm:h-12 flex items-center justify-between px-2 sm:px-4 ${getTaskbarStyle()}`}>
      {/* Start Menu Button */}
      <button
        className={`p-2 rounded-lg transition-colors ${getButtonStyle()} ${theme === 'retro' ? 'rounded-none shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]' : ''}`}
        onClick={() => setShowStartMenu(!showStartMenu)}
      >
        <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* App Icons - Hidden on very small screens */}
      <div className="hidden xs:flex items-center space-x-1 sm:space-x-2">
        {taskbarApps.map((app) => (
          <button
            key={app.id}
            className={`p-2 rounded-lg transition-colors relative ${getButtonStyle()} ${theme === 'retro' ? 'rounded-none shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)]' : ''}`}
            onClick={app.onClick}
          >
            <app.icon className="w-4 h-4 sm:w-5 sm:h-5" />
            {windows.some(w => w.type === app.id) && (
              <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${theme === 'light' ? 'bg-blue-500' : 'bg-blue-400'}`} />
            )}
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
        {/* Theme Switcher - Hidden on mobile */}
        <div className="hidden sm:flex items-center space-x-1">
          <button
            onClick={() => onThemeChange('light')}
            className={`p-1 rounded ${theme === 'light' ? 'bg-blue-500 text-white' : getButtonStyle()}`}
          >
            <Sun className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => onThemeChange('dark')}
            className={`p-1 rounded ${theme === 'dark' ? 'bg-blue-500 text-white' : getButtonStyle()}`}
          >
            <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={() => onThemeChange('retro')}
            className={`p-1 rounded ${theme === 'retro' ? 'bg-blue-500 text-white' : getButtonStyle()}`}
          >
            <Monitor className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* System Icons - Simplified on mobile */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Volume2 className="w-3 h-3 sm:w-4 sm:h-4" />
          <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />
          <Battery className="w-3 h-3 sm:w-4 sm:h-4" />
        </div>
        
        <div className="text-center">
          <div className="font-medium text-xs sm:text-sm">
            {time.toLocaleTimeString('en-US', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </div>
          <div className={`text-xs hidden sm:block ${theme === 'light' ? 'text-gray-500' : 'text-gray-300'}`}>
            {time.toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      {/* Start Menu - Responsive */}
      {showStartMenu && (
        <div className={`fixed sm:absolute bottom-12 left-2 sm:left-4 w-[calc(100vw-1rem)] sm:w-80 h-80 sm:h-96 rounded-lg border p-4 sm:p-6 z-50 ${theme === 'light' ? 'bg-white border-gray-200' : theme === 'retro' ? 'bg-gray-300 border-gray-600 rounded-none' : 'bg-gray-800 border-gray-600'}`}>
          <div className="flex items-center space-x-3 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">DP</span>
            </div>
            <div>
              <p className={`font-semibold text-sm sm:text-base ${theme === 'light' ? 'text-gray-800' : theme === 'retro' ? 'text-black' : 'text-white'}`}>Dhruvinkumar Patel</p>
              <p className={`text-xs sm:text-sm ${theme === 'light' ? 'text-gray-600' : theme === 'retro' ? 'text-gray-700' : 'text-gray-400'}`}>AI/ML Engineer</p>
            </div>
          </div>
          
          <div className="space-y-1 sm:space-y-2 max-h-48 sm:max-h-64 overflow-y-auto">
            {[
              { name: 'Projects', type: 'projects', title: 'My Projects' },
              { name: 'Skills & Tech Stack', type: 'skills', title: 'Skills & Technologies' },
              { name: 'Experience', type: 'experience', title: 'Work Experience' },
              { name: 'This PC', type: 'this-pc', title: 'This PC' }
            ].map((item) => (
              <button
                key={item.type}
                onClick={() => {
                  openWindow(item.type, item.title, item.type);
                  setShowStartMenu(false);
                }}
                className={`w-full p-2 sm:p-3 text-left rounded-lg transition-colors text-sm sm:text-base ${theme === 'light' ? 'hover:bg-gray-100 text-gray-800' : theme === 'retro' ? 'hover:bg-gray-200 text-black rounded-none' : 'hover:bg-gray-700 text-white'}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Taskbar;
