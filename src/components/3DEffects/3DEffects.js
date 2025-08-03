import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';

// 3D Card Container
const Card3D = styled(motion.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
`;

// 3D Card Inner
const CardInner = styled(motion.div)`
  transform-style: preserve-3d;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
`;

// Floating 3D Element
const Floating3D = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
`;

// Glow Effect
const GlowEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(10, 132, 255, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: -1;
`;

// 3D Hover Card Component
export const HoverCard3D = ({ 
  children, 
  rotationIntensity = 15, 
  scaleOnHover = 1.05,
  glowEffect = true,
  shadowIntensity = 0.3 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]));

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Card3D
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale: isHovered ? scaleOnHover : 1
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
    >
      {glowEffect && (
        <GlowEffect
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <CardInner
        style={{
          boxShadow: isHovered 
            ? `0 25px 50px rgba(0, 0, 0, ${shadowIntensity})` 
            : `0 10px 30px rgba(0, 0, 0, ${shadowIntensity * 0.5})`
        }}
      >
        {children}
      </CardInner>
    </Card3D>
  );
};

// Floating Animation Component
export const FloatingAnimation = ({ 
  children, 
  intensity = 10, 
  duration = 3,
  delay = 0 
}) => {
  return (
    <Floating3D
      animate={{
        y: [0, -intensity, 0],
        rotateY: [0, 5, 0],
        rotateX: [0, 2, 0]
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </Floating3D>
  );
};

// Morphing Shape Component
export const MorphingShape = ({ 
  shapes = ['circle', 'square', 'triangle'],
  size = 100,
  color = 'var(--primary-accent)',
  duration = 4 
}) => {
  const [currentShape, setCurrentShape] = useState(0);

  const shapeVariants = {
    circle: {
      borderRadius: "50%",
      rotate: 0
    },
    square: {
      borderRadius: "10%",
      rotate: 90
    },
    triangle: {
      borderRadius: "0%",
      rotate: 180,
      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShape((prev) => (prev + 1) % shapes.length);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [shapes.length, duration]);

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        background: color,
        position: 'absolute'
      }}
      animate={shapeVariants[shapes[currentShape]]}
      transition={{
        duration: 1,
        ease: "easeInOut"
      }}
    />
  );
};

// Particle System Component
export const ParticleSystem = ({ 
  particleCount = 20, 
  color = 'rgba(10, 132, 255, 0.6)',
  size = 4 
}) => {
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: size,
            height: size,
            background: color,
            borderRadius: '50%'
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Liquid Animation Component
export const LiquidAnimation = ({ 
  children, 
  intensity = 0.1,
  speed = 2 
}) => {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "60% 40% 30% 70%/60% 30% 70% 40%",
          "30% 60% 70% 40%/50% 60% 30% 60%",
          "60% 40% 30% 70%/60% 30% 70% 40%"
        ]
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {children}
    </motion.div>
  );
};

// Holographic Effect Component
export const HolographicEffect = ({ children, intensity = 0.5 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        background: `linear-gradient(
          ${mousePosition.x * 360}deg,
          rgba(255, 0, 150, ${intensity * 0.3}) 0%,
          rgba(0, 255, 255, ${intensity * 0.3}) 25%,
          rgba(255, 255, 0, ${intensity * 0.3}) 50%,
          rgba(255, 0, 150, ${intensity * 0.3}) 75%,
          rgba(0, 255, 255, ${intensity * 0.3}) 100%
        )`,
        backgroundSize: '200% 200%'
      }}
      animate={{
        backgroundPosition: [`${mousePosition.x * 100}% ${mousePosition.y * 100}%`]
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Magnetic Attraction Component
export const MagneticAttraction = ({ 
  children, 
  strength = 0.3, 
  distance = 100 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const dist = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (dist < distance) {
      const force = (distance - dist) / distance;
      setPosition({
        x: deltaX * strength * force,
        y: deltaY * strength * force
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={elementRef}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
};

export default {
  HoverCard3D,
  FloatingAnimation,
  MorphingShape,
  ParticleSystem,
  LiquidAnimation,
  HolographicEffect,
  MagneticAttraction
};