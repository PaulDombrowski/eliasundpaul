import './App.css';
import React, { useEffect, useRef } from 'react';
import Content from './components/content';

function App() {
  const modelSrc = process.env.PUBLIC_URL + '/regal.glb';
  const modelRef = useRef(null);
  const tiltRef = useRef(0);
  const isIOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const posterSrc = process.env.PUBLIC_URL + '/1.png';

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const isSmall = window.innerWidth <= 768;
    const baseOrbit = isSmall
      ? { theta: -6, phi: 24, radius: 48 }
      : { theta: -4, phi: 22, radius: 52 }; // noch näher ran
    const spinSpeed = isIOS ? 0.45 : isSmall ? 1.05 : 0.85; // iOS gedrosselt
    const swingAmpTheta = isIOS ? 6 : isSmall ? 14 : 10; // iOS weniger Schwenk
    const swingOffset = isSmall ? 10 : 8; // Basis-Schwenk nach rechts
    const swingSpeed = isIOS ? 0.14 : 0.28;
    const radiusOscAmp = isIOS ? 2.2 : isSmall ? 3.4 : 2.4; // iOS weniger Zoom
    const radiusOscSpeed = isIOS ? 0.18 : 0.34;
    const tiltOscAmp = isIOS ? 4 : isSmall ? 7 : 5; // iOS sanfter
    const tiltOscSpeed = isIOS ? 0.16 : 0.24;
    const intervalMs = isIOS ? 180 : 80; // iOS stark gedrosselt
    let lastTime = Date.now();
    let totalElapsed = 0;
    tiltRef.current = baseOrbit.phi;

    if (isIOS) {
      // iOS: keine laufende Animation, nur Startposition setzen
      el.setAttribute(
        'camera-orbit',
        `${baseOrbit.theta}deg ${baseOrbit.phi}deg ${baseOrbit.radius}%`
      );
      return;
    }

    const tick = () => {
      const now = Date.now();
      const elapsed = (now - lastTime) / 1000;
      lastTime = now;
      totalElapsed += elapsed;
      const theta =
        baseOrbit.theta +
        swingOffset +
        spinSpeed * totalElapsed +
        swingAmpTheta * Math.sin(totalElapsed * swingSpeed);
      const radius =
        baseOrbit.radius + radiusOscAmp * Math.sin(totalElapsed * radiusOscSpeed);
      const phi =
        tiltRef.current + tiltOscAmp * Math.sin(totalElapsed * tiltOscSpeed);
      el.setAttribute(
        'camera-orbit',
        `${theta}deg ${phi}deg ${radius}%`
      );
    };

    tick();
    const intervalId = setInterval(tick, intervalMs);

    const handleTilt = () => {
      const y = window.scrollY || 0;
      const extraTilt = Math.min(18, y * 0.02); // etwas stärkeres Vorneigen beim Scrollen
      tiltRef.current = baseOrbit.phi + extraTilt;
      // keine separate Kamera-Setzung hier; Tick übernimmt das Aktualisieren
    };

    window.addEventListener('scroll', handleTilt, { passive: true });
    handleTilt();

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleTilt);
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

      <section className="model-hero">
        <model-viewer
          ref={modelRef}
          src={modelSrc}
          alt="Regal"
          camera-controls
          camera-orbit="-18deg 18deg 62%"
        field-of-view="16deg"
          exposure="2.2"
          loading="lazy"
          reveal={isIOS ? 'interaction' : 'auto'}
          environment-image=""
          shadow-intensity="0"
          shadow-softness="0.9"
          minimum-render-scale={isIOS ? '0.6' : '1'}
          interaction-prompt="none"
        poster={posterSrc}
        class="start-regal"
        />
        <p className="model-hint">
          Tipp: antippen, ziehen oder pinch-to-zoom, um das Regal zu drehen und zu vergrößern.
        </p>
      </section>

      <section className="content-wrap">
        <div className="overlay-inner">
          <Content />
        </div>
      </section>
    </div>
  );
}

export default App;
