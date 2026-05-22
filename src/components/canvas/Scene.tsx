import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import { useDevice } from '../../hooks/useDevice';
import { useSceneStore } from '../../stores/sceneStore';
import { NarrativeScene } from './NarrativeScene';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PostEffects } from './PostEffects';

function CameraRig() {
  useFrame((state) => {
    const { scrollProgress, mouseX, mouseY } = useSceneStore.getState();
    const camera = state.camera;

    let targetZ = 5.0;
    if (scrollProgress < 0.25) {
      // Phase 1 (Singularity): 0.0 -> 0.25 (z: 5.0 -> 6.5)
      targetZ = THREE.MathUtils.lerp(5.0, 6.5, scrollProgress / 0.25);
    } else if (scrollProgress < 0.50) {
      // Phase 2 (Mitosis): 0.25 -> 0.50 (z: 6.5 -> 7.5)
      targetZ = THREE.MathUtils.lerp(6.5, 7.5, (scrollProgress - 0.25) / 0.25);
    } else if (scrollProgress < 0.75) {
      // Phase 3 (Ecosystem): 0.50 -> 0.75 (z: 7.5 -> 8.5)
      targetZ = THREE.MathUtils.lerp(7.5, 8.5, (scrollProgress - 0.50) / 0.25);
    } else {
      // Phase 4 & 5 (Synergy & Horizon): 0.75 -> 1.0 (z: 8.5 -> 4.5)
      targetZ = THREE.MathUtils.lerp(8.5, 4.5, (scrollProgress - 0.75) / 0.25);
    }

    // Smoothly interpolate camera Z
    camera.position.z += (targetZ - camera.position.z) * 0.08;

    // Interactive mouse parallax
    const targetX = mouseX * 1.5;
    const targetY = mouseY * 1.0;
    camera.position.x += (targetX - camera.position.x) * 0.08;
    camera.position.y += (targetY - camera.position.y) * 0.08;

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function Scene() {
  const { dpr, usePostProcessing } = useDevice();
  const setLoaded = useSceneStore((state) => state.setLoaded);

  useEffect(() => {
    // Notify the app that WebGL canvas has been initialized
    setLoaded(true);
  }, [setLoaded]);

  return (
    <div
      className="canvas-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'radial-gradient(circle at center, #070714 0%, #020205 100%)',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 60, near: 0.1, far: 100 }}
        dpr={dpr}
        gl={{
          antialias: dpr > 1,
          alpha: false,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          
          <NarrativeScene />
          <CameraRig />

          {usePostProcessing && <PostEffects />}
        </Suspense>
      </Canvas>
    </div>
  );
}
