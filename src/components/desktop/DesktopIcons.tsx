
import React, { useState, useEffect } from 'react';
import { 
  FolderOpen, 
  FileText, 
  Trophy, 
  Briefcase, 
  Terminal,
  Settings,
  HardDrive,
  Trash2,
  Chrome,
  Car,
  Search,
  Shield,
  Bot,
  Github,
  Linkedin,
  Image
} from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import { useWindowManager } from '../../contexts/WindowManagerContext';

interface DesktopIconsProps {
  theme: 'light' | 'dark' | 'retro';
}

const DesktopIcons = ({ theme }: DesktopIconsProps) => {
  const { openWindow } = useWindowManager();
  const [iconPositions, setIconPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Grid-based default positions - responsive for mobile and desktop
  const getDefaultPositions = () => {
    if (isMobile) {
      return {
        'this-pc': { x: 20, y: 60 },
        'projects': { x: 110, y: 60 },
        'experience': { x: 200, y: 60 },
        'skills': { x: 290, y: 60 },
        'certificates': { x: 20, y: 160 },
        'resume': { x: 110, y: 160 },
        'pictures': { x: 200, y: 160 },
        'terminal': { x: 290, y: 160 },
        'browser': { x: 20, y: 260 },
        'recycle-bin': { x: 110, y: 260 },
        'swiftwheels': { x: 200, y: 260 },
        'ai-object-detection': { x: 290, y: 260 },
        'deepfake-detection': { x: 20, y: 360 },
        'rag-system': { x: 110, y: 360 }
      };
    } else {
      return {
        'this-pc': { x: 50, y: 80 },
        'projects': { x: 50, y: 180 },
        'experience': { x: 50, y: 280 },
        'skills': { x: 50, y: 380 },
        'certificates': { x: 180, y: 80 },
        'resume': { x: 180, y: 180 },
        'pictures': { x: 180, y: 280 },
        'terminal': { x: 180, y: 380 },
        'browser': { x: 310, y: 80 },
        'recycle-bin': { x: 310, y: 180 },
        'swiftwheels': { x: 310, y: 280 },
        'ai-object-detection': { x: 310, y: 380 },
        'deepfake-detection': { x: 440, y: 80 },
        'rag-system': { x: 440, y: 180 }
      };
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(`desktop-icon-positions-${isMobile ? 'mobile' : 'desktop'}`);
    if (saved) {
      setIconPositions(JSON.parse(saved));
    } else {
      setIconPositions(getDefaultPositions());
    }
  }, [isMobile]);

  const updateIconPosition = (id: string, position: { x: number; y: number }) => {
    const newPositions = { ...iconPositions, [id]: position };
    setIconPositions(newPositions);
    localStorage.setItem(`desktop-icon-positions-${isMobile ? 'mobile' : 'desktop'}`, JSON.stringify(newPositions));
  };

  const icons = [
    {
      id: 'this-pc',
      name: 'This PC',
      icon: HardDrive,
      onClick: () => openWindow('this-pc', 'This PC', 'this-pc')
    },
    {
      id: 'projects',
      name: 'Projects',
      icon: FolderOpen,
      onClick: () => openWindow('projects', 'My Projects', 'projects')
    },
    {
      id: 'experience',
      name: 'Experience',
      icon: Briefcase,
      onClick: () => openWindow('experience', 'Work Experience', 'experience')
    },
    {
      id: 'skills',
      name: 'Skills & Tech',
      icon: Settings,
      onClick: () => openWindow('skills', 'Skills & Technologies', 'skills')
    },
    {
      id: 'certificates',
      name: 'Certificates',
      icon: Trophy,
      onClick: () => openWindow('certificates', 'Certifications', 'certificates')
    },
    {
      id: 'resume',
      name: 'Resume',
      icon: FileText,
      onClick: () => openWindow('resume', 'Resume Viewer', 'resume')
    },
    {
      id: 'pictures',
      name: 'Pictures',
      icon: Image,
      onClick: () => openWindow('pictures', 'Pictures Gallery', 'pictures')
    },
    {
      id: 'terminal',
      name: 'Terminal',
      icon: Terminal,
      onClick: () => openWindow('terminal', 'Terminal', 'terminal')
    },
    {
      id: 'browser',
      name: 'Chrome',
      icon: Chrome,
      onClick: () => openWindow('browser', 'Chrome Browser', 'browser')
    },
    {
      id: 'recycle-bin',
      name: 'Recycle Bin',
      icon: Trash2,
      onClick: () => openWindow('recycle-bin', 'Recycle Bin', 'recycle-bin')
    },
    // Mini Projects as Desktop Apps
    {
      id: 'swiftwheels',
      name: 'SwiftWheels',
      icon: Car,
      onClick: () => openWindow('swiftwheels', 'SwiftWheels - Vehicle Rental', 'swiftwheels')
    },
    {
      id: 'ai-object-detection',
      name: 'AI Object Detection',
      icon: Search,
      onClick: () => openWindow('ai-object-detection', 'AI Object Detection Tool', 'ai-object-detection')
    },
    {
      id: 'deepfake-detection',
      name: 'DeepFake Detector',
      icon: Shield,
      onClick: () => openWindow('deepfake-detection', 'DeepFake Detection System', 'deepfake-detection')
    },
    {
      id: 'rag-system',
      name: 'RAG System',
      icon: Bot,
      onClick: () => openWindow('rag-system', 'RAG Q&A System', 'rag-system')
    }
  ];

  return (
    <div className="absolute inset-0 p-2 sm:p-4">
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          name={icon.name}
          icon={icon.icon}
          position={iconPositions[icon.id] || getDefaultPositions()[icon.id as keyof ReturnType<typeof getDefaultPositions>]}
          onClick={icon.onClick}
          onPositionChange={(pos) => updateIconPosition(icon.id, pos)}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default DesktopIcons;
