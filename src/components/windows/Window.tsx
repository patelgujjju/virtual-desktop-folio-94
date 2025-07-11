import React, { useState, useEffect } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  isMinimized: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  theme: 'light' | 'dark' | 'retro';
}

const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  isActive,
  isMinimized,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  theme
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getWindowStyle = () => {
    if (theme === 'retro') {
      return 'bg-gray-300 border-2 border-gray-400 retro-window';
    }
    return theme === 'light' 
      ? 'bg-white border border-gray-300 shadow-lg' 
      : 'bg-gray-800 border border-gray-600 shadow-lg';
  };

  const getTitleBarStyle = () => {
    if (theme === 'retro') {
      return 'bg-gradient-to-r from-blue-800 to-blue-600 text-white';
    }
    return theme === 'light' 
      ? 'bg-gray-100 text-gray-800 border-b border-gray-300' 
      : 'bg-gray-700 text-white border-b border-gray-600';
  };

  if (isMinimized) return null;

  return (
    <div
      className={`
        absolute rounded-lg overflow-hidden z-10 
        ${getWindowStyle()}
        ${isMobile ? 'inset-4' : 'w-4/5 h-4/5 max-w-4xl max-h-screen'}
        ${!isMobile ? 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' : ''}
        ${isActive ? 'z-20' : 'z-10'}
      `}
      onClick={onFocus}
    >
      <div className={`flex items-center justify-between px-4 py-2 ${getTitleBarStyle()}`}>
        <span className="font-medium text-sm truncate">{title}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"
          >
            <Minus className="w-2 h-2 text-black opacity-70" />
          </button>
          <button
            onClick={onMaximize}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"
          >
            <Square className="w-2 h-2 text-black opacity-70" />
          </button>
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
          >
            <X className="w-2 h-2 text-white opacity-70" />
          </button>
        </div>
      </div>
      <div className="h-full overflow-auto bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default Window;
