import './App.css';
import React, { useEffect, useRef } from 'react';
import Content from './components/content';

function App() {
  const modelSrc = process.env.PUBLIC_URL + '/regal.glb';
  const modelRef = useRef(null);

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const duration = 5000;
    const isSmall = window.innerWidth <= 768;
    const startOrbit = isSmall
      ? { theta: -26, phi: 30, radius: 110 } // mobiler Start etwas näher
      : { theta: -30, phi: 32, radius: 140 };
    const endOrbit = isSmall
      ? { theta: 36, phi: 24, radius: 52 } // mobiler Endpunkt deutlich näher
      : { theta: 42, phi: 24, radius: 68 };

    let frameId;
    let startTime;

    const startContinuousOrbit = () => {
      // Start sanft von der Endposition der Intro-Animation
      const basePhi = endOrbit.phi;
      const theta0 = endOrbit.theta;
      const baseRadius = isSmall ? 48 : endOrbit.radius; // auf kleinen Screens noch näher dran
      const amp = isSmall ? 4 : 3; // leichte Atmung
      const speedDegPerSec = isSmall ? 4 : 3; // langsame Rotation
      const wobbleSpeed = 0.35;
      const continuousStart = performance.now();

      const loop = (time) => {
        const elapsed = (time - continuousStart) / 1000;
        const theta = theta0 + speedDegPerSec * elapsed;
        const radius =
          baseRadius + amp * Math.sin(elapsed * wobbleSpeed);

        el.setAttribute(
          'camera-orbit',
          `${theta}deg ${basePhi}deg ${radius}%`
        );

        frameId = requestAnimationFrame(loop);
      };

      frameId = requestAnimationFrame(loop);
    };

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
        startContinuousOrbit();
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
