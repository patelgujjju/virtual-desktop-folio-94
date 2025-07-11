
import React, { useState } from 'react';
import { HardDrive, Folder, Settings, Info, Github, ArrowLeft, FileText, Image, Video, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ThisPCAppProps {
  theme: 'light' | 'dark' | 'retro';
}

const ThisPCApp = ({ theme }: ThisPCAppProps) => {
  const [currentPath, setCurrentPath] = useState('/');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const folders = [
    { 
      name: 'Desktop', 
      icon: Folder, 
      size: '15 items',
      content: [
        { name: 'Projects Shortcut', type: 'file', description: 'Link to my portfolio projects' },
        { name: 'Resume.pdf', type: 'file', description: 'Latest version of my resume' },
        { name: 'Certificates', type: 'folder', description: 'Professional certifications' }
      ]
    },
    { 
      name: 'Documents', 
      icon: FileText, 
      size: '42 items',
      content: [
        { name: 'AI Research Papers', type: 'folder', description: 'Collection of AI/ML research papers' },
        { name: 'Project Documentation', type: 'folder', description: 'Technical documentation for projects' },
        { name: 'Internship Reports', type: 'folder', description: 'Reports from AI/ML internships' },
        { name: 'Academic Transcripts', type: 'file', description: 'University transcripts and grades' }
      ]
    },
    { 
      name: 'Pictures', 
      icon: Image, 
      size: '127 items',
      content: [
        { name: 'Project Screenshots', type: 'folder', description: 'Screenshots of developed applications' },
        { name: 'Certificates', type: 'folder', description: 'Digital copies of certifications' },
        { name: 'Tech Event Photos', type: 'folder', description: 'Photos from hackathons and tech events' }
      ]
    },
    { 
      name: 'Videos', 
      icon: Video, 
      size: '23 items',
      content: [
        { name: 'Project Demos', type: 'folder', description: 'Video demonstrations of projects' },
        { name: 'Tech Tutorials', type: 'folder', description: 'Educational programming content' },
        { name: 'Conference Recordings', type: 'folder', description: 'Recorded tech talks and presentations' }
      ]
    },
    { 
      name: 'Code', 
      icon: Folder, 
      size: '89 items',
      content: [
        { name: 'Personal Projects', type: 'folder', description: 'Source code for personal projects' },
        { name: 'Learning Exercises', type: 'folder', description: 'Practice code and tutorials' },
        { name: 'Open Source Contributions', type: 'folder', description: 'Contributions to open source projects' },
        { name: 'Scripts and Tools', type: 'folder', description: 'Utility scripts and automation tools' }
      ]
    }
  ];

  const drives = [
    { name: 'Local Disk (C:)', icon: HardDrive, size: '465 GB free of 500 GB', usage: 93 },
    { name: 'System Reserved', icon: HardDrive, size: '450 MB free of 500 MB', usage: 10 }
  ];

  const getContainerStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-800';
      case 'retro':
        return 'bg-gray-200 text-black';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const getItemStyle = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-100 border-gray-200';
      case 'retro':
        return 'hover:bg-gray-300 border-gray-400';
      default:
        return 'hover:bg-gray-50 border-gray-200';
    }
  };

  const renderFolderContent = (folder: any) => {
    return (
      <div className="p-4">
        <div className="flex items-center mb-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSelectedFolder(null)}
            className="mr-2"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <h2 className="text-lg font-semibold">{folder.name}</h2>
        </div>
        
        <div className="grid gap-2">
          {folder.content.map((item: any, idx: number) => (
            <div key={idx} className={`flex items-center space-x-3 p-3 border rounded-lg ${getItemStyle()}`}>
              {item.type === 'folder' ? (
                <Folder className="w-5 h-5 text-blue-500" />
              ) : (
                <FileText className="w-5 h-5 text-gray-500" />
              )}
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  if (selectedFolder) {
    const folder = folders.find(f => f.name === selectedFolder);
    return (
      <div className={`h-full ${getContainerStyle()}`}>
        {folder && renderFolderContent(folder)}
      </div>
    );
  }

  return (
    <div className={`h-full ${getContainerStyle()}`}>
      <div className="p-6">
        {/* System Information */}
        <div className={`mb-6 p-4 border rounded-lg ${getItemStyle()}`}>
          <div className="flex items-center space-x-3 mb-3">
            <Info className="w-5 h-5 text-blue-500" />
            <h2 className="text-lg font-semibold">System Information</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Computer Name:</p>
              <p>DHRUVIN-PC</p>
            </div>
            <div>
              <p className="font-medium">Processor:</p>
              <p>Intel(R) Core(TM) i7-10750H</p>
            </div>
            <div>
              <p className="font-medium">Installed RAM:</p>
              <p>16.0 GB</p>
            </div>
            <div>
              <p className="font-medium">System Type:</p>
              <p>64-bit Operating System</p>
            </div>
            <div>
              <p className="font-medium">Owner:</p>
              <p>Dhruvinkumar Patel</p>
            </div>
            <div>
              <p className="font-medium">Location:</p>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>

        {/* Build Information */}
        <div className={`mb-6 p-4 border rounded-lg ${getItemStyle()}`}>
          <div className="flex items-center space-x-3 mb-3">
            <Settings className="w-5 h-5 text-green-500" />
            <h2 className="text-lg font-semibold">Portfolio Build Info</h2>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Framework:</span>
              <span>React 18.3.1</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Styling:</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Icons:</span>
              <span>Lucide React</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">UI Components:</span>
              <span>Shadcn/UI</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Build Tool:</span>
              <span>Vite</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">State Management:</span>
              <span>React Context API</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t">
            <a 
              href="https://github.com/dhruvinhet/portfolio-desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </div>
        </div>

        {/* Folders */}
        <div className="mb-6">
          <h3 className="text-md font-semibold mb-3">Folders</h3>
          <div className="grid grid-cols-1 gap-2">
            {folders.map((folder, idx) => (
              <div
                key={idx}
                className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${getItemStyle()}`}
                onClick={() => setSelectedFolder(folder.name)}
              >
                <folder.icon className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <p className="font-medium">{folder.name}</p>
                  <p className="text-sm opacity-70">{folder.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drives */}
        <div>
          <h3 className="text-md font-semibold mb-3">Drives</h3>
          <div className="grid grid-cols-1 gap-2">
            {drives.map((drive, idx) => (
              <div
                key={idx}
                className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-all ${getItemStyle()}`}
              >
                <drive.icon className="w-6 h-6 text-gray-600" />
                <div className="flex-1">
                  <p className="font-medium">{drive.name}</p>
                  <p className="text-sm opacity-70">{drive.size}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${drive.usage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisPCApp;
