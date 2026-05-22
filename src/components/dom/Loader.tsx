import { useEffect, useState } from 'react';
import { useSceneStore } from '../../stores/sceneStore';

export function Loader() {
  const [percent, setPercent] = useState(0);
  const [shouldHide, setShouldHide] = useState(false);
  const loaded = useSceneStore((state) => state.loaded);

  useEffect(() => {
    // Artificial progress to look hyper-tech and give shaders/canvas time to compile
    let progressVal = 0;
    const interval = setInterval(() => {
      progressVal += Math.floor(Math.random() * 8) + 2;
      if (progressVal >= 100) {
        progressVal = 100;
        clearInterval(interval);
        setTimeout(() => {
          setShouldHide(true);
        }, 800);
      }
      setPercent(progressVal);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (shouldHide && loaded) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#020205',
        color: '#ffffff',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'JetBrains Mono', monospace",
        transition: 'opacity 0.8s cubic-bezier(0.77, 0, 0.175, 1), visibility 0.8s',
        opacity: shouldHide && loaded ? 0 : 1,
        visibility: shouldHide && loaded ? 'hidden' : 'visible',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
          width: '80%',
          maxWidth: '400px',
        }}
      >
        <div style={{ fontSize: '10px', letterSpacing: '4px', color: '#5B4CFF', fontWeight: 'bold' }}>
          CORE COMPILING
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
          <span>HNARAYNA_SYSTEM_BOOT.sh</span>
          <span style={{ color: '#C9A84C' }}>{percent}%</span>
        </div>
        
        {/* Progress Bar Container */}
        <div
          style={{
            width: '100%',
            height: '2px',
            background: 'rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Active Progress */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: `${percent}%`,
              background: 'linear-gradient(90deg, #5B4CFF, #C9A84C)',
              transition: 'width 0.1s ease',
              boxShadow: '0 0 10px rgba(91, 76, 255, 0.5)',
            }}
          />
        </div>

        {/* Binary stream decoration */}
        <div
          style={{
            fontSize: '9px',
            color: 'rgba(255,255,255,0.25)',
            wordBreak: 'break-all',
            height: '12px',
            overflow: 'hidden',
            width: '100%',
          }}
        >
          {percent > 80
            ? 'INIT_GL_MESH_RENDERER... OK'
            : percent > 60
            ? 'COMPILE_MATERIAL_SHADERS_SUCCESS... OK'
            : percent > 40
            ? 'ALLOCATING_SOLID_GEOMETRIES_AND_MESHES... DONE'
            : percent > 20
            ? 'ESTABLISHING_ZUSTAND_BRIDGE... ACTIVE'
            : 'BOOTING_UP_CORE...'}
        </div>
      </div>
    </div>
  );
}
