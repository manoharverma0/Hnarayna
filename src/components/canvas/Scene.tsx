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

    // Camera depth (Z-axis) path driven by scroll progress
    // Phase 1 (Singularity): Close-up (z=5.0)
    // Phase 2 (Mitosis): Wide out to view the 3 orbiting companies (z=7.2)
    // Phase 3 (Ecosystem): Even wider to see the node connections (z=8.0)
    // Phase 4 (Vortex): Pulling deep into the black hole center (z=4.2)
    let targetZ = 5.0;
    if (scrollProgress < 0.33) {
      // 0 to 0.33
      targetZ = THREE.MathUtils.lerp(5.0, 7.2, scrollProgress / 0.33);
    } else if (scrollProgress < 0.66) {
      // 0.33 to 0.66
      targetZ = THREE.MathUtils.lerp(7.2, 8.0, (scrollProgress - 0.33) / 0.33);
    } else {
      // 0.66 to 1.0
      targetZ = THREE.MathUtils.lerp(8.0, 4.2, (scrollProgress - 0.66) / 0.34);
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
