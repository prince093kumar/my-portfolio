import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617] overflow-hidden pointer-events-none">
      {/* Dynamic Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px] animate-pulse" 
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/10 blur-[100px] animate-pulse" 
          style={{ animationDuration: '12s', animationDelay: '2s' }}
        />
        <div 
          className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[80px] animate-pulse" 
          style={{ animationDuration: '10s', animationDelay: '4s' }}
        />
      </div>

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-primary) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-transparent to-[#020617]/50" />

      {/* Floating Particles (CSS only) */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
};

export default Background;
