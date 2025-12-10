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

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const isSmall = window.innerWidth <= 768;
    const baseOrbit = isSmall
      ? { theta: -6, phi: 24, radius: 48 }
      : { theta: -4, phi: 22, radius: 52 }; // noch näher ran
    const spinSpeed = isSmall ? 1.05 : 0.85; // moderat schnell
    const swingAmpTheta = isSmall ? 14 : 10; // kräftigeres Schwenken
    const swingOffset = isSmall ? 10 : 8; // Basis-Schwenk nach rechts
    const swingSpeed = 0.28;
    const radiusOscAmp = isSmall ? 3.4 : 2.4; // etwas mehr Zoomen
    const radiusOscSpeed = 0.34;
    const tiltOscAmp = isSmall ? 7 : 5; // mehr Vorneigen
    const tiltOscSpeed = 0.24;
    const intervalMs = 80; // flüssig
    let lastTime = Date.now();
    let totalElapsed = 0;
    tiltRef.current = baseOrbit.phi;

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

    let intervalId;

    if (isIOS) {
      // iOS: nur bei Scroll kurz bewegen
      const handleTilt = () => {
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

      const handleScrollRotate = () => {
        // bei Scroll kurz rotieren (gedrosselt)
        if (!intervalId) {
          intervalId = setInterval(handleTilt, intervalMs * 4); // langsamer Takt
          setTimeout(() => {
            clearInterval(intervalId);
            intervalId = null;
          }, 1200); // nur kurz nach Scroll
        }
      };

      window.addEventListener('scroll', handleScrollRotate, { passive: true });
      return () => {
        if (intervalId) clearInterval(intervalId);
        window.removeEventListener('scroll', handleScrollRotate);
      };
    }

    tick();
    intervalId = setInterval(tick, intervalMs);

    const handleTilt = () => {
      const y = window.scrollY || 0;
      const extraTilt = Math.min(18, y * 0.02); // etwas stärkeres Vorneigen beim Scrollen
      tiltRef.current = baseOrbit.phi + extraTilt;
      // keine separate Kamera-Setzung hier; Tick übernimmt das Aktualisieren
    };

    if (!isIOS) {
      window.addEventListener('scroll', handleTilt, { passive: true });
      handleTilt();
    }

    return () => {
      clearInterval(intervalId);
      if (!isIOS) {
        window.removeEventListener('scroll', handleTilt);
      }
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
        camera-orbit="-18deg 18deg 62%"
        field-of-view="16deg"
        exposure="1.2"
        loading="lazy"
        reveal={isIOS ? 'interaction' : 'auto'}
        environment-image=""
        shadow-intensity="0"
        shadow-softness="0.9"
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
