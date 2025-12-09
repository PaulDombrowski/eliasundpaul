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
    const endOrbit = isSmall
      ? { theta: 36, phi: 24, radius: 52 }
      : { theta: 42, phi: 24, radius: 68 };

    // Keine Animation mehr: setze direkt auf die Endposition.
    el.setAttribute(
      'camera-orbit',
      `${endOrbit.theta}deg ${endOrbit.phi}deg ${endOrbit.radius}%`
    );
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
        loading="lazy"
        reveal="interaction"
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
