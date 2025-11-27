import React, { useEffect, useRef } from 'react';
import '../App.css';

function StartPage({ onOpenArchive }) {
  const modelSrc = process.env.PUBLIC_URL + '/regal.glb';
  const modelRef = useRef(null);

  useEffect(() => {
    const el = modelRef.current;
    if (!el) return;

    const duration = 4000;
    const startOrbit = { theta: 0, phi: 75, radius: 130 };
    const endOrbit = { theta: 20, phi: 75, radius: 105 };
    let frameId;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress * progress * (3 - 2 * progress); // smoothstep

      const theta = startOrbit.theta + (endOrbit.theta - startOrbit.theta) * eased;
      const radius =
        startOrbit.radius + (endOrbit.radius - startOrbit.radius) * eased;

      el.setAttribute(
        'camera-orbit',
        `${theta}deg ${startOrbit.phi}deg ${radius}%`
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        el.setAttribute('auto-rotate', '');
        el.setAttribute('rotation-per-second', '2deg');
      }
    };

    frameId = requestAnimationFrame(step);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="start-page">
      <model-viewer
        ref={modelRef}
        src={modelSrc}
        alt="Regal"
        camera-controls
        camera-orbit="0deg 75deg 130%"
        field-of-view="25deg"
        exposure="1.3"
        environment-image="neutral"
        shadow-intensity="0.4"
        class="start-regal"
      />

      <button className="archive-button" onClick={onOpenArchive}>
        ARCHIV
      </button>
    </div>
  );
}

export default StartPage;
