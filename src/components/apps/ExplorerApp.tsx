
import React, { useState } from 'react';
import { 
  FolderOpen, 
  Folder, 
  FileText, 
  Image, 
  Code, 
  ArrowLeft, 
  ArrowRight, 
  Home,
  RefreshCw,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FileSystemItem {
  name: string;
  type: 'folder' | 'file';
  size?: string;
  modified: string;
  icon: React.ComponentType<any>;
  children?: FileSystemItem[];
  content?: string;
}

const ExplorerApp = () => {
  const [currentPath, setCurrentPath] = useState(['home', 'dhruvinkumar']);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const fileSystem: Record<string, FileSystemItem[]> = {
    'home/dhruvinkumar': [
      {
        name: 'Desktop',
        type: 'folder',
        modified: '2024-12-15',
        icon: Folder,
        children: []
      },
      {
        name: 'Documents',
        type: 'folder',
        modified: '2024-12-15',
        icon: Folder,
        children: []
      },
      {
        name: 'Projects',
        type: 'folder',
        modified: '2024-12-15',
        icon: FolderOpen,
        children: [
          {
            name: 'deepfake-detection',
            type: 'folder',
            modified: '2025-01-15',
            icon: Folder
          },
          {
            name: 'ai-object-detection',
            type: 'folder',
            modified: '2025-01-10',
            icon: Folder
          },
          {
            name: 'vehicle-rental-system',
            type: 'folder',
            modified: '2024-09-15',
            icon: Folder
          },
          {
            name: 'ai-personal-assistant',
            type: 'folder',
            modified: '2025-01-05',
            icon: Folder
          }
        ]
      },
      {
        name: 'Skills',
        type: 'folder',
        modified: '2024-12-15',
        icon: Folder,
        children: [
          {
            name: 'programming-languages.txt',
            type: 'file',
            size: '2.1 KB',
            modified: '2024-12-15',
            icon: FileText,
            content: 'Python (Advanced)\nJavaScript (Intermediate)\nC++ (Intermediate)\nC (Basic)\nSQL (Intermediate)\nHTML/CSS (Advanced)'
          },
          {
            name: 'ai-ml-frameworks.txt',
            type: 'file',
            size: '1.8 KB',
            modified: '2024-12-15',
            icon: FileText,
            content: 'TensorFlow\nPyTorch\nscikit-learn\nPandas\nNumPy\nOpenCV\nHugging Face Transformers'
          }
        ]
      },
      {
        name: 'Experience',
        type: 'folder',
        modified: '2024-12-15',
        icon: Folder,
        children: [
          {
            name: 'alchemyte-internship.md',
            type: 'file',
            size: '3.2 KB',
            modified: '2025-07-15',
            icon: FileText,
            content: '# AI Engineer Intern - Alchemyte Data Solutions LLP\n\n**Duration:** June 2025 - July 2025\n**Location:** On-Site\n\n## Key Achievements:\n- Built RAG-based AI System using vector databases and LLMs\n- Integrated pre-trained large language models into enterprise-level search systems'
          },
          {
            name: 'ahir-infotech-internship.md',
            type: 'file',
            size: '2.8 KB',
            modified: '2025-06-15',
            icon: FileText,
            content: '# AI/ML Engineer Intern - Ahir Infotech\n\n**Duration:** April 2025 - June 2025\n**Location:** Remote\n\n## Key Achievements:\n- Developed AI model from scratch to predict diseases\n- Built healthcare chatbot with intelligent response capabilities'
          }
        ]
      },
      {
        name: 'Certificates',
        type: 'folder',
        modified: '2024-12-15',
        icon: Folder,
        children: [
          {
            name: 'ISRO_AI_ML_Certificate.pdf',
            type: 'file',
            size: '1.2 MB',
            modified: '2024-11-15',
            icon: FileText
          },
          {
            name: 'IIT_Guwahati_Winter_Consulting.pdf',
            type: 'file',
            size: '890 KB',
            modified: '2024-12-15',
            icon: FileText
          }
        ]
      },
      {
        name: 'Resume.pdf',
        type: 'file',
        size: '245 KB',
        modified: '2024-12-15',
        icon: FileText
      },
      {
        name: 'profile-picture.jpg',
        type: 'file',
        size: '156 KB',
        modified: '2024-12-10',
        icon: Image
      }
    ]
  };

  const getCurrentItems = (): FileSystemItem[] => {
    const pathKey = currentPath.join('/');
    return fileSystem[pathKey] || [];
  };

  const navigateToFolder = (folderName: string) => {
    setCurrentPath([...currentPath, folderName]);
    setSelectedItem(null);
  };

  const navigateBack = () => {
    if (currentPath.length > 2) {
      setCurrentPath(currentPath.slice(0, -1));
      setSelectedItem(null);
    }
  };

  const navigateHome = () => {
    setCurrentPath(['home', 'dhruvinkumar']);
    setSelectedItem(null);
  };

  const formatFileSize = (size: string | undefined) => {
    return size || '--';
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString();
  };

  const currentItems = getCurrentItems();
  const selectedItemData = currentItems.find(item => item.name === selectedItem);

  return (
    <div className="h-full flex bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 bg-gray-50">
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Access</h3>
          <div className="space-y-2">
            <button
              onClick={() => {
                setCurrentPath(['home', 'dhruvinkumar', 'Desktop']);
                setSelectedItem(null);
              }}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <Folder className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Desktop</span>
            </button>
            <button
              onClick={() => {
                setCurrentPath(['home', 'dhruvinkumar', 'Documents']);
                setSelectedItem(null);
              }}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <Folder className="w-4 h-4 text-blue-600" />
              <span className="text-sm">Documents</span>
            </button>
            <button
              onClick={() => {
                setCurrentPath(['home', 'dhruvinkumar', 'Projects']);
                setSelectedItem(null);
              }}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-200 transition-colors flex items-center space-x-2"
            >
              <FolderOpen className="w-4 h-4 text-orange-600" />
              <span className="text-sm">Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="border-b border-gray-200 p-3">
          <div className="flex items-center space-x-2 mb-3">
            <Button size="sm" variant="ghost" onClick={navigateBack} disabled={currentPath.length <= 2}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" disabled>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={navigateHome}>
              <Home className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Address Bar */}
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-white border border-gray-300 rounded-md px-3 py-1 text-sm">
              {currentPath.join(' > ')}
            </div>
            <div className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <Input
                placeholder="Search"
                className="border-none bg-transparent text-sm focus:outline-none w-40"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          {/* File List */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-1 gap-1">
              {currentItems.map((item, index) => {
                const Icon = item.icon;
                const isSelected = selectedItem === item.name;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors ${
                      isSelected ? 'bg-blue-100 border border-blue-300' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedItem(item.name)}
                    onDoubleClick={() => {
                      if (item.type === 'folder') {
                        navigateToFolder(item.name);
                      }
                    }}
                  >
                    <Icon className={`w-5 h-5 ${
                      item.type === 'folder' 
                        ? 'text-blue-600' 
                        : item.name.endsWith('.jpg') || item.name.endsWith('.png') 
                          ? 'text-green-600'
                          : item.name.endsWith('.pdf')
                            ? 'text-red-600'
                            : 'text-gray-600'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    </div>
                    <div className="text-xs text-gray-500 w-20 text-right">
                      {formatFileSize(item.size)}
                    </div>
                    <div className="text-xs text-gray-500 w-24 text-right">
                      {formatDate(item.modified)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Details Panel */}
          {selectedItemData && (
            <div className="w-80 border-l border-gray-200 bg-gray-50 p-4">
              <div className="text-center mb-4">
                <selectedItemData.icon className="w-16 h-16 mx-auto mb-2 text-gray-600" />
                <h3 className="font-semibold text-gray-900">{selectedItemData.name}</h3>
                <p className="text-sm text-gray-600 capitalize">{selectedItemData.type}</p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Size:</span>
                  <span className="ml-2 text-gray-600">{formatFileSize(selectedItemData.size)}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Modified:</span>
                  <span className="ml-2 text-gray-600">{formatDate(selectedItemData.modified)}</span>
                </div>
                
                {selectedItemData.content && (
                  <div>
                    <span className="font-medium text-gray-700 block mb-2">Preview:</span>
                    <div className="bg-white border border-gray-200 rounded-md p-3 text-xs font-mono max-h-64 overflow-auto">
                      <pre className="whitespace-pre-wrap">{selectedItemData.content}</pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExplorerApp;
