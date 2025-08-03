import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styled from 'styled-components';

// Parallax Container
const ParallaxContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;

// Floating Elements
const FloatingElement = styled(motion.div)`
  position: absolute;
  pointer-events: none;
  z-index: 1;
`;

// Background Shapes
const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.gradient || 'var(--gradient-primary)'};
  opacity: ${props => props.opacity || 0.1};
  filter: blur(${props => props.blur || '40px'});
  pointer-events: none;
`;

// Parallax Background Component
export const ParallaxBackground = ({ children, intensity = 0.5 }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, intensity * 1000]);

  return (
    <ParallaxContainer style={{ y }}>
      {children}
    </ParallaxContainer>
  );
};

// Floating Shapes Component
export const FloatingShapes = () => {
  const { scrollY } = useScroll();
  
  const shapes = [
    {
      id: 1,
      size: '200px',
      top: '10%',
      left: '10%',
      gradient: 'radial-gradient(circle, rgba(10, 132, 255, 0.15) 0%, transparent 70%)',
      blur: '60px'
    },
    {
      id: 2,
      size: '150px',
      top: '60%',
      right: '15%',
      gradient: 'radial-gradient(circle, rgba(94, 92, 230, 0.12) 0%, transparent 70%)',
      blur: '50px'
    },
    {
      id: 3,
      size: '100px',
      top: '30%',
      right: '30%',
      gradient: 'radial-gradient(circle, rgba(48, 209, 88, 0.1) 0%, transparent 70%)',
      blur: '40px'
    },
    {
      id: 4,
      size: '180px',
      bottom: '20%',
      left: '20%',
      gradient: 'radial-gradient(circle, rgba(255, 159, 10, 0.08) 0%, transparent 70%)',
      blur: '55px'
    }
  ];

  return (
    <>
      {shapes.map((shape, index) => {
        const y = useTransform(scrollY, [0, 1000], [0, (index + 1) * 100]);
        const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
        
        return (
          <BackgroundShape
            key={shape.id}
            style={{
              width: shape.size,
              height: shape.size,
              top: shape.top,
              left: shape.left,
              right: shape.right,
              bottom: shape.bottom,
              background: shape.gradient,
              blur: shape.blur,
              y,
              rotate
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 2, 
              delay: index * 0.5,
              ease: "easeOut"
            }}
          />
        );
      })}
    </>
  );
};

// Parallax Text Component
export const ParallaxText = ({ children, speed = 0.5, direction = 'up' }) => {
  const { scrollY } = useScroll();
  const y = useTransform(
    scrollY, 
    [0, 1000], 
    direction === 'up' ? [0, -speed * 1000] : [0, speed * 1000]
  );

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

// Mouse Parallax Effect
export const MouseParallax = ({ children, intensity = 0.1 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  return (
    <motion.div
      animate={{
        x: mousePosition.x,
        y: mousePosition.y
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15
      }}
    >
      {children}
    </motion.div>
  );
};

// Scroll-triggered Animations
export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  distance = 50 
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      scale: direction === 'scale' ? 0.8 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Animation Container
export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item
export const StaggerItem = ({ children, direction = 'up' }) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  };

  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
};

// Magnetic Effect
export const MagneticEffect = ({ children, strength = 0.3 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

// Tilt Effect
export const TiltEffect = ({ children, maxTilt = 15 }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const tiltX = (y - 0.5) * maxTilt;
    const tiltY = (x - 0.5) * -maxTilt;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
      style={{
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      }}
    >
      {children}
    </motion.div>
  );
};

// Infinite Scroll Animation
export const InfiniteScroll = ({ children, speed = 50, direction = 'left' }) => {
  return (
    <motion.div
      animate={{
        x: direction === 'left' ? [0, -1000] : [0, 1000],
        y: direction === 'up' ? [0, -1000] : direction === 'down' ? [0, 1000] : 0
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {children}
    </motion.div>
  );
};

export default {
  ParallaxBackground,
  FloatingShapes,
  ParallaxText,
  MouseParallax,
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  MagneticEffect,
  TiltEffect,
  InfiniteScroll
};