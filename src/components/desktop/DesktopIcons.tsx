
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
  Linkedin
} from 'lucide-react';
import DesktopIcon from './DesktopIcon';
import { useWindowManager } from '../../contexts/WindowManagerContext';

interface DesktopIconsProps {
  theme: 'light' | 'dark' | 'retro';
}

const DesktopIcons = ({ theme }: DesktopIconsProps) => {
  const { openWindow } = useWindowManager();
  const [iconPositions, setIconPositions] = useState<Record<string, { x: number; y: number }>>({});

  // Grid-based default positions (4x4 grid)
  const defaultPositions = {
    'this-pc': { x: 50, y: 80 },
    'projects': { x: 50, y: 180 },
    'experience': { x: 50, y: 280 },
    'skills': { x: 50, y: 380 },
    'certificates': { x: 180, y: 80 },
    'resume': { x: 180, y: 180 },
    'terminal': { x: 180, y: 280 },
    'browser': { x: 180, y: 380 },
    'recycle-bin': { x: 310, y: 80 },
    'swiftwheels': { x: 310, y: 180 },
    'ai-object-detection': { x: 310, y: 280 },
    'deepfake-detection': { x: 310, y: 380 },
    'rag-system': { x: 440, y: 80 }
  };

  useEffect(() => {
    const saved = localStorage.getItem('desktop-icon-positions');
    if (saved) {
      setIconPositions(JSON.parse(saved));
    } else {
      setIconPositions(defaultPositions);
    }
  }, []);

  const updateIconPosition = (id: string, position: { x: number; y: number }) => {
    const newPositions = { ...iconPositions, [id]: position };
    setIconPositions(newPositions);
    localStorage.setItem('desktop-icon-positions', JSON.stringify(newPositions));
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
    <div className="absolute inset-0 p-4">
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          name={icon.name}
          icon={icon.icon}
          position={iconPositions[icon.id] || defaultPositions[icon.id as keyof typeof defaultPositions]}
          onClick={icon.onClick}
          onPositionChange={(pos) => updateIconPosition(icon.id, pos)}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default DesktopIcons;
