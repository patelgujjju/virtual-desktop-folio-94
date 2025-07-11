
import React, { useState, useEffect } from 'react';
import BootScreen from '../components/desktop/BootScreen';
import Desktop from '../components/desktop/Desktop';

const Index = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    // Simulate boot sequence
    const bootTimer = setTimeout(() => {
      setShowLogin(true);
    }, 3000);

    return () => clearTimeout(bootTimer);
  }, []);

  const handleLogin = () => {
    setIsBooted(true);
  };

  if (!isBooted) {
    return <BootScreen showLogin={showLogin} onLogin={handleLogin} />;
  }

  return <Desktop />;
};

export default Index;
