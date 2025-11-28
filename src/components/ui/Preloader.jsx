import React, { useEffect, useState } from 'react';
import { Logo } from '../ui/Logo';

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // start exit animation then call onComplete
          setIsExiting(true);
          setTimeout(() => onComplete?.(), 400);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-300 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex flex-col items-center justify-center text-center gap-4">
        {/* Centered Logo */}
        <div className="flex justify-center items-center">
          <Logo size="lg" className="animate-bounce" />
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-panel rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#6EC1E4] to-[#2B95D6] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="text-sm text-gray-muted mt-2">
          Loading application...
        </p>
      </div>
    </div>
  );
}
