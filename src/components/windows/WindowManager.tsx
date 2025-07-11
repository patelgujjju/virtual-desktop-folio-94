
import React from 'react';
import { useWindowManager } from '../../contexts/WindowManagerContext';
import Window from './Window';
import ProjectsApp from '../apps/ProjectsApp';
import SkillsApp from '../apps/SkillsApp';
import ExperienceApp from '../apps/ExperienceApp';
import CertificatesApp from '../apps/CertificatesApp';
import ResumeApp from '../apps/ResumeApp';
import TerminalApp from '../apps/TerminalApp';
import BrowserApp from '../apps/BrowserApp';
import ExplorerApp from '../apps/ExplorerApp';
import ThisPCApp from '../apps/ThisPCApp';
import RecycleBinApp from '../apps/RecycleBinApp';

interface WindowManagerProps {
  theme: 'light' | 'dark' | 'retro';
}

const WindowManager = ({ theme }: WindowManagerProps) => {
  const { windows } = useWindowManager();

  const renderWindowContent = (type: string, windowId: string) => {
    switch (type) {
      case 'projects':
        return <ProjectsApp />;
      case 'skills':
        return <SkillsApp />;
      case 'experience':
        return <ExperienceApp />;
      case 'certificates':
        return <CertificatesApp />;
      case 'resume':
        return <ResumeApp />;
      case 'terminal':
        return <TerminalApp theme={theme} />;
      case 'browser':
        return <BrowserApp theme={theme} />;
      case 'explorer':
        return <ExplorerApp />;
      case 'this-pc':
        return <ThisPCApp theme={theme} />;
      case 'recycle-bin':
        return <RecycleBinApp theme={theme} />;
      case 'swiftwheels':
        return (
          <div className="w-full h-full bg-white">
            <iframe 
              src="https://swift-wheels-omega.vercel.app/" 
              className="w-full h-full border-0" 
              title="SwiftWheels - Vehicle Rental Platform"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            />
          </div>
        );
      case 'ai-object-detection':
        return (
          <div className="w-full h-full bg-white">
            <iframe 
              src="https://huggingface.co/spaces/dhruvin-patel/aies-object-extractor" 
              className="w-full h-full border-0" 
              title="AI Object Detection Tool"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            />
          </div>
        );
      case 'deepfake-detection':
        return (
          <div className="w-full h-full bg-white">
            <iframe 
              src="https://huggingface.co/spaces/dhruvin-patel/DeepFake-Image-Detector" 
              className="w-full h-full border-0" 
              title="DeepFake Detection System"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            />
          </div>
        );
      case 'rag-system':
        return (
          <div className="w-full h-full bg-white">
            <iframe 
              src="https://dhruvinhet-rag.streamlit.app/" 
              className="w-full h-full border-0" 
              title="RAG Q&A System"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            />
          </div>
        );
      default:
        return <div className="p-4 text-gray-600">Unknown application</div>;
    }
  };

  return (
    <>
      {windows.map((window) => (
        <Window
          key={window.id}
          window={window}
          theme={theme}
        >
          {renderWindowContent(window.type, window.id)}
        </Window>
      ))}
    </>
  );
};

export default WindowManager;
