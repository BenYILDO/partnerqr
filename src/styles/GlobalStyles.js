import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Apple Dark Theme - Elite & Sophisticated */
    --primary-dark: #000000;
    --primary-light: #1c1c1e;
    --primary-accent: #0a84ff;
    --secondary-accent: #5e5ce6;
    --tertiary-accent: #30d158;
    --quaternary-accent: #ff9f0a;
    
    /* Apple Dark System Colors - Premium Feel */
    --gray-50: #000000;
    --gray-100: #1c1c1e;
    --gray-200: #2c2c2e;
    --gray-300: #3a3a3c;
    --gray-400: #48484a;
    --gray-500: #636366;
    --gray-600: #8e8e93;
    --gray-700: #aeaeb2;
    --gray-800: #c7c7cc;
    --gray-900: #f2f2f7;
    
    /* Apple Semantic Colors - Dark Theme */
    --success: #30d158;
    --warning: #ff9f0a;
    --error: #ff453a;
    --info: #0a84ff;
    
    /* Apple Dark Text Colors - High Contrast */
    --text-primary: #ffffff;
    --text-secondary: #f2f2f7;
    --text-tertiary: #aeaeb2;
    --text-light: #ffffff;
    --text-muted: #8e8e93;
    --text-on-dark: #ffffff;
    --text-accent: #0a84ff;
    
    /* Apple Dark Background Colors - Elite & Clean */
    --background-primary: #000000;
    --background-secondary: #1c1c1e;
    --background-tertiary: #2c2c2e;
    --background-card: #1c1c1e;
    --background-card-hover: #2c2c2e;
    --background-overlay: rgba(0, 0, 0, 0.85);
    --background-dark: #000000;
    --background-dark-secondary: #1c1c1e;
    --background-glass: rgba(28, 28, 30, 0.8);
    --background-elevated: #2c2c2e;
    
    /* Apple Dark Border Colors - Subtle & Refined */
    --border-light: #3a3a3c;
    --border-medium: #48484a;
    --border-dark: #636366;
    --border-accent: #0a84ff;
    --border-glass: rgba(255, 255, 255, 0.1);
    
    /* Apple Dark Gradients - Premium & Elegant */
    --gradient-primary: linear-gradient(135deg, #0a84ff 0%, #5e5ce6 100%);
    --gradient-secondary: linear-gradient(135deg, #30d158 0%, #0a84ff 100%);
    --gradient-tertiary: linear-gradient(135deg, #5e5ce6 0%, #af52de 100%);
    --gradient-dark: linear-gradient(135deg, #000000 0%, #1c1c1e 100%);
    --gradient-card: linear-gradient(145deg, rgba(28, 28, 30, 0.95) 0%, rgba(44, 44, 46, 0.9) 100%);
    --gradient-hero: linear-gradient(135deg, rgba(10, 132, 255, 0.1) 0%, rgba(94, 92, 230, 0.08) 50%, rgba(48, 209, 88, 0.06) 100%);
    --gradient-glass: linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
    --gradient-mesh: radial-gradient(circle at 20% 80%, rgba(10, 132, 255, 0.15) 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, rgba(94, 92, 230, 0.15) 0%, transparent 50%),
                     radial-gradient(circle at 40% 40%, rgba(48, 209, 88, 0.1) 0%, transparent 50%);
    
    /* Modern 3D & Glass Morphism Gradients */
    --gradient-gold: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
    --gradient-gold-hover: linear-gradient(135deg, #f4d03f 0%, #d4af37 50%, #f4d03f 100%);
    --gradient-shimmer: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
    --gradient-holographic: linear-gradient(45deg, #ff006e, #8338ec, #3a86ff, #06ffa5, #ffbe0b, #fb5607);
    --gradient-aurora: linear-gradient(135deg, rgba(255, 0, 110, 0.3) 0%, rgba(131, 56, 236, 0.3) 25%, rgba(58, 134, 255, 0.3) 50%, rgba(6, 255, 165, 0.3) 75%, rgba(255, 190, 11, 0.3) 100%);
    --gradient-neon: linear-gradient(135deg, rgba(0, 255, 255, 0.2) 0%, rgba(255, 0, 255, 0.2) 50%, rgba(255, 255, 0, 0.2) 100%);
    --gradient-cosmic: radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, rgba(30, 144, 255, 0.1) 50%, transparent 100%);
    --gradient-liquid: linear-gradient(135deg, rgba(64, 224, 208, 0.3) 0%, rgba(255, 140, 0, 0.3) 50%, rgba(255, 20, 147, 0.3) 100%);
    --gradient-plasma: linear-gradient(135deg, rgba(255, 61, 0, 0.3) 0%, rgba(255, 154, 0, 0.3) 25%, rgba(208, 222, 33, 0.3) 50%, rgba(79, 172, 254, 0.3) 75%, rgba(146, 39, 143, 0.3) 100%);
    
    /* Apple Dark Shadows - Sophisticated & Deep */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 8px 10px -6px rgba(0, 0, 0, 0.5);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
    --shadow-accent: 0 8px 25px -8px rgba(10, 132, 255, 0.4);
    --shadow-card: 0 2px 8px 0 rgba(0, 0, 0, 0.3);
    --shadow-card-hover: 0 8px 25px -8px rgba(0, 0, 0, 0.4);
    --shadow-glass: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    --shadow-inset: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    
    /* Border Radius */
    --border-radius-xs: 4px;
    --border-radius-sm: 6px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;
    --border-radius-xl: 16px;
    --border-radius-2xl: 24px;
    --border-radius-3xl: 32px;
    --border-radius-full: 9999px;
    
    /* Transitions */
    --transition-fast: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Z-Index */
    --z-header: 1000;
    --z-modal: 2000;
    --z-tooltip: 3000;
    

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    
    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.47059;
    color: var(--text-primary);
    background: var(--background-primary);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "kern" 1;
    letter-spacing: -0.003em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 600;
    line-height: 1.07143;
    letter-spacing: -0.005em;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: var(--transition-normal);
    
    &:focus-visible {
      outline: 2px solid var(--primary-accent);
      outline-offset: 2px;
    }
    
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition-normal);
    
    &:focus-visible {
      outline: 2px solid var(--primary-accent);
      outline-offset: 2px;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-md);
    padding: 0.75rem;
    transition: var(--transition-normal);
    background: var(--background-primary);
    color: var(--text-primary);
    
    &:focus {
      outline: none;
      border-color: var(--primary-accent);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    &::placeholder {
      color: var(--text-muted);
    }
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 1200px) {
      max-width: 1200px;
      padding: 0 1.5rem;
    }
    
    @media (max-width: 768px) {
      padding: 0 1rem;
    }
    
    @media (max-width: 480px) {
      padding: 0 0.75rem;
    }
  }

  /* Scrollbar Styling - Dark Theme */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-secondary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-500);
    border-radius: var(--border-radius-sm);
    
    &:hover {
      background: var(--primary-accent);
    }
  }

  /* Selection Styling - Dark Theme */
  ::selection {
    background: rgba(10, 132, 255, 0.3);
    color: var(--text-primary);
  }

  /* Loading Animation */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      transform: translate3d(0, -30px, 0);
    }
    70% {
      transform: translate3d(0, -15px, 0);
    }
    90% {
      transform: translate3d(0, -4px, 0);
    }
  }

  /* Modern 3D & Glass Morphism Animations */
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(10, 132, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(10, 132, 255, 0.6);
    }
  }

  @keyframes holographic {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes morphing {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
  }

  @keyframes particle {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes liquid {
    0%, 100% {
      transform: scale(1) rotate(0deg);
    }
    33% {
      transform: scale(1.1) rotate(120deg);
    }
    66% {
      transform: scale(0.9) rotate(240deg);
    }
  }

  @keyframes aurora {
    0%, 100% {
      opacity: 0.3;
      transform: translateX(-50%) scale(1);
    }
    50% {
      opacity: 0.8;
      transform: translateX(-50%) scale(1.1);
    }
  }

  @keyframes magnetic {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(var(--mouse-x, 0), var(--mouse-y, 0));
    }
  }

  @keyframes tilt3d {
    0% {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: perspective(1000px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
    }
  }

  /* Utility Classes */
  .fade-in-up {
    animation: fadeInUp 0.6s ease-out;
  }

  .fade-in-left {
    animation: fadeInLeft 0.6s ease-out;
  }

  .fade-in-right {
    animation: fadeInRight 0.6s ease-out;
  }

  .pulse {
    animation: pulse 2s infinite;
  }

  .text-center { text-align: center; }
  .text-left { text-align: left; }
  .text-right { text-align: right; }
  
  .d-none { display: none; }
  .d-block { display: block; }
  .d-flex { display: flex; }
  .d-grid { display: grid; }
  
  .justify-center { justify-content: center; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  
  .align-center { align-items: center; }
  .align-start { align-items: flex-start; }
  .align-end { align-items: flex-end; }
  
  .flex-column { flex-direction: column; }
  .flex-wrap { flex-wrap: wrap; }
  
  .w-full { width: 100%; }
  .h-full { height: 100%; }
  
  .m-0 { margin: 0; }
  .p-0 { padding: 0; }

  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Modern Effect Classes */
  .glass-morphism {
    background: var(--gradient-glass);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border-glass);
    box-shadow: var(--shadow-glass);
  }

  .holographic {
    background: var(--gradient-holographic);
    background-size: 400% 400%;
    animation: holographic 3s ease infinite;
  }

  .floating {
    animation: float 3s ease-in-out infinite;
  }

  .glow-effect {
    animation: glow 2s ease-in-out infinite alternate;
  }

  .morphing-shape {
    animation: morphing 8s ease-in-out infinite;
  }

  .liquid-effect {
    animation: liquid 4s ease-in-out infinite;
  }

  .aurora-effect {
    background: var(--gradient-aurora);
    animation: aurora 6s ease-in-out infinite;
  }

  .shimmer-effect {
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--gradient-shimmer);
      animation: shimmer 2s infinite;
    }
  }

  .tilt-3d {
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    
    &:hover {
      animation: tilt3d 0.3s ease forwards;
    }
  }

  .magnetic {
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &:hover {
      animation: magnetic 0.3s ease forwards;
    }
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Print Styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    .no-print {
      display: none !important;
    }
  }
`;

export default GlobalStyles;