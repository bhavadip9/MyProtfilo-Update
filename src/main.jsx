import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Atom } from "react-loading-indicators";

function FirstRunWrapper() {
  const [loading, setLoading] = useState(true);

  // // 🔧 Remove this after testing
  useEffect(() => {
    localStorage.removeItem('hasVisited');
  }, []);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (!hasVisited) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 1000); // Show loader for 3 seconds
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center transition-opacity duration-700">
          <Atom color="#32cd32" size="large" text="Welcome..." textColor="#32cd32" />
        </div>
      )}

      {/* Main App */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-50' : 'opacity-100'}`}>
        <SpeedInsights />
        <App />
      </div>
    </div>
  );
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstRunWrapper />
  </React.StrictMode>,
);
