
import React, { useState } from 'react';
import { Globe, Home, RefreshCw, ArrowLeft, ArrowRight, Search, ExternalLink, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface BrowserAppProps {
  theme: 'light' | 'dark' | 'retro';
}

const BrowserApp = ({ theme }: BrowserAppProps) => {
  const [currentUrl, setCurrentUrl] = useState('https://www.linkedin.com/in/pateldhruvinkumar/');
  const [addressBar, setAddressBar] = useState(currentUrl);
  const [iframeError, setIframeError] = useState(false);

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

  const handleIframeError = () => {
    setIframeError(true);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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

  const getHeaderStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-gray-50 border-gray-200';
      case 'retro':
        return 'bg-gray-300 border-gray-500';
      default:
        return 'bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className={`h-full flex flex-col ${getContainerStyle()}`}>
      {/* Browser Header */}
      <div className={`border-b p-2 ${getHeaderStyle()}`}>
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            <Button size="sm" variant="ghost" disabled>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" disabled>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => handleNavigation(currentUrl)}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => handleNavigation('https://www.linkedin.com/in/pateldhruvinkumar/')}>
              <Home className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex-1 flex items-center bg-white rounded-md border border-gray-300 px-3 py-1">
            <Globe className="w-4 h-4 text-gray-400 mr-2" />
            <Input
              value={addressBar}
              onChange={(e) => setAddressBar(e.target.value)}
              className="flex-1 border-none bg-transparent text-sm focus:outline-none"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleNavigation(addressBar);
                }
              }}
            />
          </div>
          <Button size="sm" onClick={() => handleNavigation(addressBar)}>
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Bookmarks Bar */}
      <div className={`border-b px-4 py-2 ${getHeaderStyle()}`}>
        <div className="flex items-center space-x-4">
          {bookmarks.map((bookmark, idx) => (
            <button
              key={idx}
              onClick={() => handleNavigation(bookmark.url)}
              className="flex items-center space-x-2 px-3 py-1 rounded-md hover:bg-gray-200 transition-colors text-sm"
            >
              <span>{bookmark.icon}</span>
              <span>{bookmark.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 overflow-hidden bg-white">
        {iframeError ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4 p-8">
            <AlertTriangle className="w-16 h-16 text-yellow-500" />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Cannot Display This Page</h3>
              <p className="text-gray-600 mb-4">
                This website restricts embedding for security reasons.
              </p>
              <Button onClick={() => openInNewTab(currentUrl)} className="flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Open in New Tab</span>
              </Button>
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
              // Check if iframe loaded successfully
              try {
                const iframe = e.target as HTMLIFrameElement;
                if (iframe.contentWindow) {
                  // If we can't access the content, it might be blocked
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
