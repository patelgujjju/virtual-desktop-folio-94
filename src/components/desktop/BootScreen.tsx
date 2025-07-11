
import React, { useState, useEffect } from 'react';
import { Loader2, Monitor, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface BootScreenProps {
  showLogin: boolean;
  onLogin: () => void;
}

const BootScreen = ({ showLogin, onLogin }: BootScreenProps) => {
  const [bootProgress, setBootProgress] = useState(0);
  const [bootText, setBootText] = useState('Initializing...');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!showLogin) {
      const bootSequence = [
        { text: 'Loading system files...', progress: 20 },
        { text: 'Initializing desktop environment...', progress: 45 },
        { text: 'Loading portfolio data...', progress: 70 },
        { text: 'Preparing user interface...', progress: 90 },
        { text: 'System ready!', progress: 100 }
      ];

      let currentStep = 0;
      const interval = setInterval(() => {
        if (currentStep < bootSequence.length) {
          setBootText(bootSequence[currentStep].text);
          setBootProgress(bootSequence[currentStep].progress);
          currentStep++;
        } else {
          clearInterval(interval);
        }
      }, 600);

      return () => clearInterval(interval);
    }
  }, [showLogin]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  if (!showLogin) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Monitor className="w-12 h-12 text-blue-400" />
            <h1 className="text-4xl font-bold">DhruvOS</h1>
          </div>
          
          <div className="space-y-4">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-400" />
            <p className="text-lg text-gray-300">{bootText}</p>
            
            <div className="w-80 bg-gray-800 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${bootProgress}%` }}
              />
            </div>
            
            <p className="text-sm text-gray-500">{bootProgress}%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="bg-black/20 backdrop-blur-lg rounded-2xl p-8 w-96 border border-white/10">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-300">Dhruvinkumar Patel</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter password (or press Enter)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder-gray-400"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BootScreen;
