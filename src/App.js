import './App.css';
import React, { useEffect, useRef } from 'react';
import Content from './components/content';

function App() {
  const modelSrc = process.env.PUBLIC_URL + '/regal.glb';
  const modelRef = useRef(null);

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const isSmall = window.innerWidth <= 768;

    const duration = 5000;
    const startOrbit = isSmall
      ? { theta: -26, phi: 26, radius: 110 }
      : { theta: -28, phi: 28, radius: 120 };
    const endOrbit = isSmall
      ? { theta: 36, phi: 22, radius: 65 }
      : { theta: 40, phi: 22, radius: 70 };
    let frameId;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress * progress * (3 - 2 * progress); // smoothstep

      const theta =
        startOrbit.theta + (endOrbit.theta - startOrbit.theta) * eased;
      const phi = startOrbit.phi + (endOrbit.phi - startOrbit.phi) * eased;
      const radius =
        startOrbit.radius + (endOrbit.radius - startOrbit.radius) * eased;

      el.setAttribute(
        'camera-orbit',
        `${theta}deg ${phi}deg ${radius}%`
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        el.setAttribute('auto-rotate', '');
        el.setAttribute(
          'rotation-per-second',
          isSmall ? '1.6deg' : '0.8deg'
        );
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      document.documentElement.style.setProperty(
        '--scroll-pos',
        y.toString()
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="start-root">
      <div className="christmas-bg" />
      <model-viewer
        ref={modelRef}
        src={modelSrc}
        alt="Regal"
        camera-controls
        camera-orbit="-28deg 28deg 120%"
        field-of-view="16deg"
        exposure="1.2"
        loading="eager"
        reveal="auto"
        interaction-prompt="none"
        poster={process.env.PUBLIC_URL + '/1.png'}
        class="start-regal"
      />

      <div className="overlay">
        <div className="overlay-inner">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
