
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Home, Search, Star, MoreHorizontal, Plus, X, Shield, Volume2, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface BrowserAppProps {
  theme: 'light' | 'dark' | 'retro';
}

const BrowserApp = ({ theme }: BrowserAppProps) => {
  const [currentUrl, setCurrentUrl] = useState('https://www.linkedin.com/in/pateldhruvinkumar/');
  const [addressBar, setAddressBar] = useState(currentUrl);
  const [iframeError, setIframeError] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/pateldhruvinkumar/', favicon: '💼' },
    { id: 1, title: 'GitHub', url: 'https://github.com/dhruvinhet', favicon: '🐙' },
    { id: 2, title: 'SwiftWheels', url: 'https://swift-wheels-omega.vercel.app/', favicon: '🚗' }
  ];

  const bookmarks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pateldhruvinkumar/', icon: '💼' },
    { name: 'GitHub', url: 'https://github.com/dhruvinhet', icon: '🐙' },
    { name: 'SwiftWheels', url: 'https://swift-wheels-omega.vercel.app/', icon: '🚗' },
    { name: 'AI Object Detection', url: 'https://huggingface.co/spaces/dhruvin-patel/aies-object-extractor', icon: '🔍' },
    { name: 'DeepFake Detection', url: 'https://huggingface.co/spaces/dhruvin-patel/DeepFake-Image-Detector', icon: '🛡️' },
    { name: 'RAG System', url: 'https://dhruvinhet-rag.streamlit.app/', icon: '🤖' }
  ];

  const handleNavigation = (url: string) => {
    setCurrentUrl(url);
    setAddressBar(url);
    setIframeError(false);
  };

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    const tab = tabs.find(t => t.id === tabId);
    if (tab) {
      handleNavigation(tab.url);
    }
  };

  const handleIframeError = () => {
    setIframeError(true);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getSecurityIcon = () => {
    if (currentUrl.startsWith('https://')) {
      return <Shield className="w-4 h-4 text-green-600" />;
    }
    return <Shield className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Chrome-like Tab Bar */}
      <div className="bg-gray-100 border-b border-gray-200 flex items-end px-2">
        <div className="flex items-end space-x-0">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative flex items-center px-4 py-2 cursor-pointer transition-all ${
                activeTab === tab.id
                  ? 'bg-white border-t border-l border-r border-gray-200 rounded-t-lg -mb-px'
                  : 'bg-gray-100 hover:bg-gray-200 rounded-t-lg mt-1'
              }`}
              style={{
                clipPath: activeTab === tab.id 
                  ? 'polygon(10px 0%, calc(100% - 10px) 0%, 100% 100%, 0% 100%)'
                  : 'polygon(8px 0%, calc(100% - 8px) 0%, calc(100% - 4px) 100%, 4px 100%)'
              }}
            >
              <span className="text-sm mr-2">{tab.favicon}</span>
              <span className="text-sm text-gray-700 truncate max-w-32 sm:max-w-48">
                {tab.title}
              </span>
              {activeTab === tab.id && (
                <button className="ml-2 p-1 hover:bg-gray-200 rounded-full">
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
          <button className="p-2 ml-2 hover:bg-gray-200 rounded-full">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        {/* Window Controls */}
        <div className="ml-auto flex items-center space-x-1 mb-2">
          <button className="p-2 hover:bg-gray-200 rounded">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Chrome-like Navigation Bar */}
      <div className="bg-white border-b border-gray-200 p-2">
        <div className="flex items-center space-x-2">
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-1">
            <Button size="sm" variant="ghost" className="p-2 h-8 w-8" disabled>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-2 h-8 w-8" disabled>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-2 h-8 w-8" onClick={() => handleNavigation(currentUrl)}>
              <RotateCcw className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="p-2 h-8 w-8" onClick={() => handleNavigation('https://www.linkedin.com/in/pateldhruvinkumar/')}>
              <Home className="w-4 h-4" />
            </Button>
          </div>
        
          {/* Address Bar */}
          <div className="flex-1 flex items-center bg-gray-50 rounded-full border border-gray-300 hover:bg-white hover:shadow-sm transition-all px-4 py-2">
            {getSecurityIcon()}
            <Input
              value={addressBar}
              onChange={(e) => setAddressBar(e.target.value)}
              className="flex-1 border-none bg-transparent text-sm focus:outline-none ml-2"
              placeholder="Search Google or type a URL"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleNavigation(addressBar);
                }
              }}
            />
            <div className="flex items-center space-x-2 ml-2">
              <button className="p-1 hover:bg-gray-200 rounded">
                <Bookmark className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <Volume2 className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="ghost" className="p-2 h-8 w-8">
              <Star className="w-4 h-4" />
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">DP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bookmarks Bar */}
      <div className="bg-gray-50 border-b border-gray-200 px-4 py-1">
        <div className="flex items-center space-x-4 overflow-x-auto">
          {bookmarks.map((bookmark, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(bookmark.url)}
              className="flex items-center space-x-2 px-2 py-1 rounded hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
            >
              <span className="text-xs">{bookmark.icon}</span>
              <span className="hidden sm:inline">{bookmark.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 overflow-hidden bg-white">
        {iframeError ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4 p-8 bg-gray-50">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <Shield className="w-12 h-12 text-gray-400" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">This site can't be reached</h3>
              <p className="text-gray-600 mb-4 max-w-md">
                The webpage at <strong>{currentUrl}</strong> might be temporarily down or it may have moved permanently to a new web address.
              </p>
              <div className="space-x-2">
                <Button onClick={() => handleNavigation(currentUrl)} variant="outline">
                  Reload
                </Button>
                <Button onClick={() => openInNewTab(currentUrl)}>
                  Open in New Tab
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <iframe 
            src={currentUrl}
            className="w-full h-full border-0"
            title="Browser Content"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            onError={handleIframeError}
            onLoad={(e) => {
              try {
                const iframe = e.target as HTMLIFrameElement;
                if (iframe.contentWindow) {
                  setTimeout(() => {
                    try {
                      iframe.contentWindow?.document;
                    } catch (error) {
                      setIframeError(true);
                    }
                  }, 1000);
                }
              } catch (error) {
                setIframeError(true);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BrowserApp;
