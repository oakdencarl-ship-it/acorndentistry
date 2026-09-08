import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'liquidMelt' | 'logoFloat' | 'logoDissolve'>('initial');

  useEffect(() => {
    // Start liquid melt after 1.5 seconds
    const timer = setTimeout(() => {
      setPhase('liquidMelt');
      // Logo starts fading after liquid begins melting
      setTimeout(() => {
        setPhase('logoFloat');
        // Logo dissolves and transition completes
        setTimeout(() => {
          setPhase('logoDissolve');
          setTimeout(onComplete, 800);
        }, 400);
      }, 400);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden">
      {/* Liquid background layers */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          phase === 'initial' ? 'opacity-100' : 
          phase === 'liquidMelt' ? 'opacity-70' : 
          'opacity-0'
        }`}
        style={{ backgroundColor: '#77576D' }}
      >
        {/* Liquid drip effects */}
        <div className={`absolute inset-0 transition-all duration-1200 ease-out ${
          phase === 'liquidMelt' ? 'transform translate-y-full' : ''
        }`}>
          {/* Multiple liquid drip layers for realistic effect */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 20% 100%, #77576D 0%, transparent 50%),
                          radial-gradient(ellipse at 40% 100%, #77576D 0%, transparent 60%),
                          radial-gradient(ellipse at 60% 100%, #77576D 0%, transparent 55%),
                          radial-gradient(ellipse at 80% 100%, #77576D 0%, transparent 50%),
                          linear-gradient(to bottom, #77576D 0%, #77576D 70%, transparent 100%)`,
              transform: phase === 'liquidMelt' ? 'translateY(100vh) scaleY(1.5)' : 'translateY(0)',
              transition: 'transform 1200ms cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        </div>
        
        {/* Additional liquid streams */}
        <div className={`absolute inset-0 transition-all duration-1000 delay-200 ease-out ${
          phase === 'liquidMelt' ? 'transform translate-y-full scale-y-150' : ''
        }`}>
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at 30% 100%, rgba(119, 87, 109, 0.8) 0%, transparent 40%),
                          radial-gradient(ellipse at 70% 100%, rgba(119, 87, 109, 0.8) 0%, transparent 45%),
                          linear-gradient(to bottom, transparent 0%, rgba(119, 87, 109, 0.6) 80%, transparent 100%)`
            }}
          />
        </div>
      </div>

      {/* Floating logo */}
      <div className="relative z-10 text-center">
        <div className={`transition-all duration-1000 ease-out ${
          phase === 'initial' ? 'scale-100 opacity-100 translate-y-0' : 
          phase === 'liquidMelt' ? 'scale-105 opacity-100 translate-y-0' : 
          phase === 'logoFloat' ? 'scale-110 opacity-80 -translate-y-4' : 
          'scale-100 opacity-0 translate-y-0'
        }`}>
          <img 
            src="/Acorn Dentistry Logo Design (1).png" 
            alt="Acorn Dentistry Southport" 
            className={`h-96 w-auto mx-auto rounded-2xl shadow-2xl filter drop-shadow-2xl transition-all duration-1000 ease-out ${
              phase === 'logoFloat' ? 'shadow-3xl' : ''
            }`}
            style={{
              filter: phase === 'logoFloat' ? 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))' : 
                      'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15))'
            }}
          />
        </div>
        
        {/* Subtle loading indicator */}
        <div className={`mt-8 transition-all duration-500 ${
          phase === 'initial' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;