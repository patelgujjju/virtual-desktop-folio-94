
import React, { useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface DesktopIconProps {
  name: string;
  icon: LucideIcon;
  position: { x: number; y: number };
  onClick: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  theme: 'light' | 'dark' | 'retro';
}

const DesktopIcon = ({ name, icon: Icon, position, onClick, onPositionChange, theme }: DesktopIconProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isSelected, setIsSelected] = useState(false);
  const dragRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.detail === 2) { // Double click
      onClick();
      return;
    }
    
    setIsSelected(true);
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      
      // Keep within screen bounds
      const maxX = window.innerWidth - 100;
      const maxY = window.innerHeight - 150;
      
      onPositionChange({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleClickOutside = () => {
      setIsSelected(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDragging, dragOffset, onPositionChange]);

  const getIconStyle = () => {
    const baseStyle = "w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-200 shadow-lg";
    
    switch (theme) {
      case 'light':
        return `${baseStyle} bg-gradient-to-br from-white to-gray-100 border border-gray-300 shadow-md hover:shadow-lg`;
      case 'retro':
        return `${baseStyle} bg-gray-300 border-2 border-t-white border-l-white border-r-gray-600 border-b-gray-600 rounded-none shadow-[2px_2px_4px_rgba(0,0,0,0.3)]`;
      default:
        return `${baseStyle} bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 shadow-xl`;
    }
  };

  const getTextStyle = () => {
    const baseStyle = "text-xs text-center max-w-20 leading-tight font-medium px-1 py-0.5 rounded";
    
    switch (theme) {
      case 'light':
        return `${baseStyle} text-gray-800 bg-white/80 shadow-sm`;
      case 'retro':
        return `${baseStyle} text-black bg-gray-200 font-bold border border-gray-400 rounded-none`;
      default:
        return `${baseStyle} text-white bg-black/60 backdrop-blur-sm shadow-lg`;
    }
  };

  const getSelectionStyle = () => {
    if (!isSelected) return '';
    
    switch (theme) {
      case 'light':
        return 'bg-blue-100/50 border-2 border-blue-400 border-dashed';
      case 'retro':
        return 'bg-blue-200/50 border-2 border-blue-600 border-dotted';
      default:
        return 'bg-blue-500/20 border-2 border-blue-400 border-dashed';
    }
  };

  const getIconColor = () => {
    switch (theme) {
      case 'light':
        return 'text-gray-700';
      case 'retro':
        return 'text-black';
      default:
        return 'text-gray-200';
    }
  };

  return (
    <div
      ref={dragRef}
      className={`absolute cursor-pointer group select-none ${isDragging ? 'z-50' : ''}`}
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${getSelectionStyle()}`}>
        <div className={getIconStyle()}>
          <Icon className={`w-8 h-8 ${getIconColor()}`} strokeWidth={1.5} />
        </div>
        <span className={getTextStyle()}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default DesktopIcon;
