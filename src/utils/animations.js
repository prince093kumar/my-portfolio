export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] // Custom ease-out curve for SaaS feel
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const hoverCard = {
  rest: { 
    y: 0,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  hover: { 
    y: -5,
    scale: 1.02,
    boxShadow: "0px 10px 30px rgba(56, 189, 248, 0.15)", // Subtle primary cyan glow
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export const textSweep = {
  hidden: { backgroundPosition: "200% center" },
  visible: { 
    backgroundPosition: "-200% center",
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "linear"
    }
  }
};
