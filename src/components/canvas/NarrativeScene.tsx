import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSceneStore } from '../../stores/sceneStore';

export function NarrativeScene() {
  const coreRef = useRef<THREE.Group>(null);
  const divisionsRef = useRef<THREE.Group>(null);
  const globeRef = useRef<THREE.Group>(null);
  const tunnelRef = useRef<THREE.Group>(null);

  const aiRef = useRef<THREE.Mesh>(null);
  const cyberRef = useRef<THREE.Mesh>(null);
  const bioRef = useRef<THREE.Mesh>(null);

  const { hoveredPlanet, selectedProject } = useSceneStore();

  // Define globe project coordinates on sphere surface (spherical coordinates mapped to 3D vectors)
  const projectNodes = useMemo(() => {
    return [
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 3.0, Math.PI / 4.0), // Project 0 (HotelNear.in)
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 2.2, -Math.PI / 3.0), // Project 1 (MindSpace)
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 1.8, Math.PI / 1.2), // Project 2 (Glimpse Gallery)
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 1.5, -Math.PI / 1.5), // Project 3 (TCS NQT Simulator)
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 2.5, Math.PI / 6.0), // Project 4 (WatchToEarn)
      new THREE.Vector3().setFromSphericalCoords(1.62, Math.PI / 1.2, -Math.PI / 6.0), // Project 5 (CLI AI Agent)
    ];
  }, []);

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    const { scrollProgress } = useSceneStore.getState();

    // ----------------------------------------------------
    // 1. VISIBILITY & SCALE TRANSITIONS (Scroll-driven)
    // ----------------------------------------------------

    // Chapter 1 (Core) visibility: peaks at 0, fades by 0.3
    const c1Vis = Math.max(0, 1 - scrollProgress / 0.3);
    if (coreRef.current) {
      coreRef.current.visible = c1Vis > 0.01;
      coreRef.current.scale.setScalar(c1Vis);
      coreRef.current.rotation.y = time * 0.15;
      coreRef.current.rotation.x = time * 0.05;
    }

    // Chapter 2 (Divisions) visibility: peaks at 0.33, fades towards 0 and 0.66
    let c2Vis = 0;
    if (scrollProgress < 0.33) {
      c2Vis = scrollProgress / 0.33;
    } else {
      c2Vis = Math.max(0, 1 - (scrollProgress - 0.33) / 0.33);
    }
    if (divisionsRef.current) {
      divisionsRef.current.visible = c2Vis > 0.01;
      divisionsRef.current.scale.setScalar(c2Vis * 1.1);

      // Gentle floating animation
      divisionsRef.current.position.y = Math.sin(time * 0.8) * 0.15;

      // Individual rotations
      if (aiRef.current) {
        aiRef.current.rotation.x = time * 0.2;
        aiRef.current.rotation.y = time * 0.3;
      }
      if (cyberRef.current) {
        cyberRef.current.rotation.x = time * 0.3;
        cyberRef.current.rotation.z = time * 0.2;
      }
      if (bioRef.current) {
        bioRef.current.rotation.y = time * 0.4;
        bioRef.current.rotation.x = time * 0.2;
      }
    }

    // Chapter 3 (Globe) visibility: peaks at 0.66, fades towards 0.33 and 0.95
    let c3Vis = 0;
    if (scrollProgress > 0.33 && scrollProgress < 0.66) {
      c3Vis = (scrollProgress - 0.33) / 0.33;
    } else if (scrollProgress >= 0.66) {
      c3Vis = Math.max(0, 1 - (scrollProgress - 0.66) / 0.29);
    }
    if (globeRef.current) {
      globeRef.current.visible = c3Vis > 0.01;
      globeRef.current.scale.setScalar(c3Vis * 1.25);
      // Auto-rotation
      globeRef.current.rotation.y = time * 0.1;
    }

    // Chapter 4 & 5 (Horizon) visibility: fades in from 0.66 to 1.0
    const c4Vis = scrollProgress > 0.66 ? (scrollProgress - 0.66) / 0.34 : 0;
    if (tunnelRef.current) {
      tunnelRef.current.visible = c4Vis > 0.01;
      tunnelRef.current.scale.setScalar(c4Vis);
    }

    // ----------------------------------------------------
    // 2. HOVER-LINK INTERACTIVE ADJUSTMENTS
    // ----------------------------------------------------

    // Scale up the division meshes when hovered in DOM
    if (aiRef.current) {
      const targetScale = hoveredPlanet === 0 ? 1.3 : 1.0;
      aiRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    if (cyberRef.current) {
      const targetScale = hoveredPlanet === 1 ? 1.3 : 1.0;
      cyberRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    if (bioRef.current) {
      const targetScale = hoveredPlanet === 2 ? 1.3 : 1.0;
      bioRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <group>
      {/* ----------------------------------------------------
          CHAPTER 1: THE CORE (Glass Octahedron + Wireframe Sphere)
          ---------------------------------------------------- */}
      <group ref={coreRef}>
        {/* Crystal Outer Shell */}
        <mesh>
          <octahedronGeometry args={[1.6, 0]} />
          <meshPhysicalMaterial
            transmission={0.9}
            roughness={0.05}
            thickness={1.8}
            clearcoat={1.0}
            clearcoatRoughness={0.05}
            ior={1.55}
            color="#5B4CFF"
            flatShading
            transparent
            opacity={0.85}
          />
        </mesh>
      </group>

      {/* ----------------------------------------------------
          CHAPTER 2: THE DIVISIONS (3 Floating Glass Structures)
          ---------------------------------------------------- */}
      <group ref={divisionsRef}>
        {/* Aetheris AI: Glass Cube */}
        <group position={[-2.8, 0.6, 0]}>
          <mesh ref={aiRef}>
            <boxGeometry args={[1.1, 1.1, 1.1]} />
            <meshPhysicalMaterial
              transmission={0.9}
              roughness={0.1}
              thickness={1.5}
              clearcoat={1.0}
              ior={1.5}
              color="#5B4CFF"
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>

        {/* Spectra Cyber: Glass Torus */}
        <group position={[2.8, -0.2, 0]}>
          <mesh ref={cyberRef}>
            <torusGeometry args={[0.65, 0.22, 16, 32]} />
            <meshPhysicalMaterial
              transmission={0.9}
              roughness={0.1}
              thickness={1.5}
              clearcoat={1.0}
              ior={1.5}
              color="#C9A84C"
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>

        {/* Helix Bio: Glass Torus Knot */}
        <group position={[0.0, -1.8, 0.5]}>
          <mesh ref={bioRef}>
            <torusKnotGeometry args={[0.5, 0.16, 64, 8, 3, 4]} />
            <meshPhysicalMaterial
              transmission={0.9}
              roughness={0.1}
              thickness={1.5}
              clearcoat={1.0}
              ior={1.5}
              color="#4CFFB4"
              transparent
              opacity={0.9}
            />
          </mesh>
        </group>
      </group>

      {/* ----------------------------------------------------
          CHAPTER 3: THE ECOSYSTEM (Global Tech Globe + Nodes)
          ---------------------------------------------------- */}
      <group ref={globeRef} name="globeGroup">
        {/* Core Glossy Obsidian/Metallic Planet */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshPhysicalMaterial
            color="#121026"
            roughness={0.15}
            metalness={0.85}
            emissive="#080718"
            emissiveIntensity={1.0}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Project Hotspots (nodes coordinates) */}
        {projectNodes.map((pos, idx) => {
          const isSelected = selectedProject === idx;
          const nodeScale = isSelected ? 2.5 : 1.0;
          const nodeColor = 
            idx === 0 ? '#5B4CFF' : 
            idx === 1 ? '#5B4CFF' : 
            idx === 2 ? '#4CFFB4' : 
            idx === 3 ? '#C9A84C' : 
            idx === 4 ? '#C9A84C' : 
            '#4CFFB4';

          return (
            <group key={idx} position={pos}>
              <mesh scale={nodeScale}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshBasicMaterial color={nodeColor} />
              </mesh>
              {isSelected && (
                <mesh scale={nodeScale * 1.8}>
                  <sphereGeometry args={[0.09, 16, 16]} />
                  <meshBasicMaterial color={nodeColor} transparent opacity={0.3} wireframe />
                </mesh>
              )}
            </group>
          );
        })}
      </group>

      {/* ----------------------------------------------------
          CHAPTER 4: THE HORIZON (Deep Space Horizon transition)
          ---------------------------------------------------- */}
      <group ref={tunnelRef} />
    </group>
  );
}
