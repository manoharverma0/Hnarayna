import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { useDevice } from '../../hooks/useDevice';
import { useSceneStore } from '../../stores/sceneStore';
import { NarrativeScene } from './NarrativeScene';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PostEffects } from './PostEffects';

function CameraRig() {
  const { hoveredPlanet, selectedProject, activeSection } = useSceneStore();
  const lookAtTarget = useRef(new THREE.Vector3(0, 0, 0));

  const projectNodes = useMemo(() => {
    return [
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 3.0, Math.PI / 4.0), // Project 0
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 2.2, -Math.PI / 3.0), // Project 1
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 1.8, Math.PI / 1.2), // Project 2
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 1.5, -Math.PI / 1.5), // Project 3
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 2.5, Math.PI / 6.0), // Project 4
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 1.2, -Math.PI / 6.0), // Project 5
    ];
  }, []);

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

    // Zoom in on hovers
    if (activeSection === 1 && hoveredPlanet !== null) {
      targetZ -= 1.0;
    } else if (activeSection === 2 && selectedProject !== null) {
      targetZ -= 0.8;
    }

    // Smoothly interpolate camera Z
    camera.position.z += (targetZ - camera.position.z) * 0.08;

    // Interactive mouse parallax
    const targetX = mouseX * 1.5;
    const targetY = mouseY * 1.0;
    camera.position.x += (targetX - camera.position.x) * 0.08;
    camera.position.y += (targetY - camera.position.y) * 0.08;

    // Calculate dynamic lookAt target
    const targetLookAt = new THREE.Vector3(0, 0, 0);

    if (activeSection === 1) {
      // Chapter 2: Mitosis
      if (hoveredPlanet === 0) {
        targetLookAt.set(-1.8, 0.4, 0);
      } else if (hoveredPlanet === 1) {
        targetLookAt.set(1.8, -0.1, 0);
      } else if (hoveredPlanet === 2) {
        targetLookAt.set(0.0, -1.2, 0.3);
      }
    } else if (activeSection === 2) {
      // Chapter 3: Ecosystem
      if (selectedProject !== null) {
        const globeGroup = state.scene.getObjectByName('globeGroup');
        const nodePos = projectNodes[selectedProject]?.clone();
        if (nodePos) {
          if (globeGroup) {
            nodePos.applyEuler(globeGroup.rotation);
          }
          targetLookAt.copy(nodePos).multiplyScalar(0.4);
        }
      }
    }

    // Smoothly interpolate lookAtTarget and apply
    lookAtTarget.current.lerp(targetLookAt, 0.05);
    camera.lookAt(lookAtTarget.current);
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
          <fog attach="fog" args={['#020205', 4, 18]} />
          <ambientLight intensity={0.25} />
          <directionalLight position={[5, 10, 5]} intensity={2.0} />
          <pointLight position={[-6, 4, -5]} intensity={3.0} color="#5B4CFF" distance={20} />
          <pointLight position={[6, -4, 5]} intensity={2.5} color="#C9A84C" distance={20} />
          <pointLight position={[0, 8, 2]} intensity={2.0} color="#4CFFB4" distance={20} />
          
          <NarrativeScene />
          <CameraRig />

          {usePostProcessing && <PostEffects />}
        </Suspense>
      </Canvas>
    </div>
  );
}
