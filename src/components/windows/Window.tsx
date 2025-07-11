
import React, { useState, useRef, useEffect } from 'react';
import { Minus, Square, X } from 'lucide-react';
import { useWindowManager, WindowState } from '../../contexts/WindowManagerContext';

interface WindowProps {
  window: WindowState;
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'retro';
}

const Window = ({ window, children, theme = 'dark' }: WindowProps) => {
  const { 
    closeWindow, 
    minimizeWindow, 
    maximizeWindow, 
    focusWindow, 
    updateWindowPosition, 
    updateWindowSize 
  } = useWindowManager();
  
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isMobile && (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains('window-header'))) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - window.position.x,
        y: e.clientY - window.position.y
      });
      focusWindow(window.id);
    }
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    minimizeWindow(window.id);
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    maximizeWindow(window.id);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeWindow(window.id);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !window.isMaximized && !isMobile) {
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, globalThis.window.innerWidth - window.size.width));
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, globalThis.window.innerHeight - window.size.height - 48));
        
        updateWindowPosition(window.id, { x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, window.id, window.isMaximized, dragOffset, updateWindowPosition, window.size, isMobile]);

  if (window.isMinimized) {
    return null;
  }

  const getWindowStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-white border-gray-300 shadow-xl';
      case 'retro':
        return 'bg-gray-200 border-2 border-gray-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]';
      default:
        return 'bg-white border-gray-200 shadow-2xl';
    }
  };

  const getHeaderStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-50 border-b border-gray-200 text-gray-700';
      case 'retro':
        return 'bg-blue-500 border-b-2 border-blue-700 text-white';
      default:
        return 'bg-gray-100 border-b border-gray-200 text-gray-700';
    }
  };

  // Mobile: Full screen windows
  const mobileStyle = isMobile ? {
    left: 0,
    top: 0,
    width: '100vw',
    height: 'calc(100vh - 48px)', // Account for taskbar
    transform: 'none'
  } : {
    left: window.position.x,
    top: window.position.y,
    width: window.size.width,
    height: window.size.height,
    transform: window.isMaximized ? 'none' : undefined
  };

  return (
    <div
      ref={windowRef}
      className={`absolute ${isMobile ? 'rounded-none' : 'rounded-lg'} overflow-hidden border ${getWindowStyle()} ${theme === 'retro' ? 'rounded-none' : ''}`}
      style={{
        ...mobileStyle,
        zIndex: window.zIndex
      }}
      onClick={() => focusWindow(window.id)}
    >
      {/* Window Header - Always visible */}
      <div
        className={`window-header h-10 sm:h-10 flex items-center justify-between px-2 sm:px-4 ${!isMobile ? 'cursor-move' : ''} relative z-10 ${getHeaderStyle()}`}
        onMouseDown={handleMouseDown}
        onDoubleClick={() => !isMobile && maximizeWindow(window.id)}
      >
        <span className="text-xs sm:text-sm font-medium truncate">
          {window.title}
        </span>
        
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button
            onClick={handleMinimize}
            className={`w-3 h-3 rounded-full transition-colors ${theme === 'retro' ? 'bg-gray-300 hover:bg-gray-200 border border-gray-500' : 'bg-yellow-500 hover:bg-yellow-600'}`}
          >
            {theme === 'retro' ? <Minus className="w-2 h-2 text-black mx-auto" /> : <Minus className="w-2 h-2 text-yellow-800 mx-auto" />}
          </button>
          {!isMobile && (
            <button
              onClick={handleMaximize}
              className={`w-3 h-3 rounded-full transition-colors ${theme === 'retro' ? 'bg-gray-300 hover:bg-gray-200 border border-gray-500' : 'bg-green-500 hover:bg-green-600'}`}
            >
              {theme === 'retro' ? <Square className="w-2 h-2 text-black mx-auto" /> : <Square className="w-2 h-2 text-green-800 mx-auto" />}
            </button>
          )}
          <button
            onClick={handleClose}
            className={`w-3 h-3 rounded-full transition-colors ${theme === 'retro' ? 'bg-gray-300 hover:bg-gray-200 border border-gray-500' : 'bg-red-500 hover:bg-red-600'}`}
          >
            {theme === 'retro' ? <X className="w-2 h-2 text-black mx-auto" /> : <X className="w-2 h-2 text-red-800 mx-auto" />}
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
        {children}
      </div>
    </div>
  );
};

export default Window;
