
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from './Main';
import Popup from '../components/ui/popup';

const IndexWithPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    setShowPopup(false);
    navigate('/desktop');
  };

  const handleNo = () => {
    setShowPopup(false);
    setShowMain(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowMain(true);
  };

  if (showMain) {
    return <Main />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold animate-pulse">
          D
        </div>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl opacity-80">Loading...</p>
      </div>
      
      <Popup
        isOpen={showPopup}
        onClose={handleClosePopup}
        onYes={handleYes}
        onNo={handleNo}
      />
    </div>
  );
};

export default IndexWithPopup;
