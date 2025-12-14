import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Content from './components/content';

function App() {
  const modelSrc = process.env.PUBLIC_URL + '/regal.glb';
  const modelRef = useRef(null);
  const tiltRef = useRef(0);
  const intervalRef = useRef(null);
  const restartTimeoutRef = useRef(null);
  const scrollPauseRef = useRef(null);
  const [iosPaused, setIosPaused] = useState(false);
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

    const startAnim = () => {
      if (intervalRef.current) return;
      if (isIOS && iosPaused) return;
      tick();
      intervalRef.current = setInterval(tick, intervalMs);
    };

    const stopAnim = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }
      if (scrollPauseRef.current) {
        clearTimeout(scrollPauseRef.current);
        scrollPauseRef.current = null;
      }
    };

    // iOS: keine Auto-Animation, nur initial setzen und pausiert bleiben
    if (!isIOS) {
      startAnim();
    }

    const handleUserControlStart = () => {
      setIosPaused(false);
      stopAnim();
    };

    const handleUserControlEnd = () => {
      // Anim nach kurzer Pause wieder anlaufen lassen
      setIosPaused(false);
      restartTimeoutRef.current = setTimeout(() => {
        startAnim();
      }, 1400);
    };

    const elRefCurrent = el;
    elRefCurrent.addEventListener('pointerdown', handleUserControlStart, {
      passive: true,
    });
    elRefCurrent.addEventListener('touchstart', handleUserControlStart, {
      passive: true,
    });
    elRefCurrent.addEventListener('pointerup', handleUserControlEnd, {
      passive: true,
    });
    elRefCurrent.addEventListener('touchend', handleUserControlEnd, {
      passive: true,
    });

    const handleScrollPause = () => {
      if (isIOS) return; // iOS: nicht während Scrollen animieren
      stopAnim();
      scrollPauseRef.current = setTimeout(() => {
        startAnim();
      }, 900);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!isIOS) startAnim();
          } else {
            stopAnim();
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(elRefCurrent);

    const handleContextLost = () => {
      stopAnim();
      setIosPaused(true);
      // Nutzer kann per Poster neu laden
      elRefCurrent.showPoster?.();
    };
    elRefCurrent.addEventListener('contextlost', handleContextLost);

    window.addEventListener('scroll', handleScrollPause, { passive: true });

    return () => {
      stopAnim();
      if (scrollPauseRef.current) {
        clearTimeout(scrollPauseRef.current);
        scrollPauseRef.current = null;
      }
      io.disconnect();
      window.removeEventListener('scroll', handleScrollPause);
      elRefCurrent.removeEventListener('pointerdown', handleUserControlStart);
      elRefCurrent.removeEventListener('touchstart', handleUserControlStart);
      elRefCurrent.removeEventListener('pointerup', handleUserControlEnd);
      elRefCurrent.removeEventListener('touchend', handleUserControlEnd);
      elRefCurrent.removeEventListener('contextlost', handleContextLost);
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
          loading="eager"
          reveal="auto"
          environment-image=""
          shadow-intensity="0"
          shadow-softness="0.9"
          interaction-prompt="none"
          poster={posterSrc}
          class="start-regal"
        />
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
