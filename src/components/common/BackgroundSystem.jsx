import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

const BackgroundSystem = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  // Global Mouse tracking for Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleGlobalMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const { innerWidth, innerHeight } = window;
    // Map mouse position to -100 to 100 range
    mouseX.set((e.clientX / innerWidth - 0.5) * 200);
    mouseY.set((e.clientY / innerHeight - 0.5) * 200);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [handleGlobalMouseMove]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Parallax spring configurations
  const xOffsetLg = useSpring(useTransform(mouseX, [-100, 100], [-30, 30]), { stiffness: 50, damping: 20 });
  const yOffsetLg = useSpring(useTransform(mouseY, [-100, 100], [-30, 30]), { stiffness: 50, damping: 20 });
  
  const xOffsetMd = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), { stiffness: 50, damping: 20 });
  const yOffsetMd = useSpring(useTransform(mouseY, [-100, 100], [-15, 15]), { stiffness: 50, damping: 20 });

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Layer 1: Base Gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Layer 2: Animated CSS Grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Layer 3: Floating Glow Orbs with Parallax */}
      <motion.div 
        style={{ x: xOffsetLg, y: yOffsetLg }} 
        className="absolute w-full h-full"
      >
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px]" 
        />
      </motion.div>

      <motion.div 
        style={{ x: xOffsetMd, y: yOffsetMd }} 
        className="absolute w-full h-full"
      >
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" 
        />
        
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[40%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" 
        />
      </motion.div>

      {/* Layer 4: Global Particle Field */}
      {init && (
        <Particles
          id="global-tsparticles"
          options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#38bdf8" },
            links: {
              color: "#38bdf8",
              distance: 180,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: true,
              speed: 0.2, // Very slow movement
              straight: false,
            },
            number: {
              density: { enable: true, area: 1200 },
              value: 40, // Reduced count for global performance
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
      )}
    </div>
  );
};

export default BackgroundSystem;
