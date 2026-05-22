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

  const gridFloorRef = useRef<THREE.GridHelper>(null);
  const gridCeilRef = useRef<THREE.GridHelper>(null);

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

    // Chapter 1 (Core) visibility: peaks at 0, fades by 0.22
    const c1Vis = Math.max(0, 1 - scrollProgress / 0.22);
    if (coreRef.current) {
      coreRef.current.visible = c1Vis > 0.01;
      coreRef.current.scale.setScalar(c1Vis);
      coreRef.current.rotation.y = time * 0.15;
      coreRef.current.rotation.x = time * 0.05;
    }

    // Chapter 2 (Divisions) visibility: peaks at 0.25, fades towards 0 and 0.48
    let c2Vis = 0;
    if (scrollProgress < 0.25) {
      c2Vis = scrollProgress / 0.25;
    } else {
      c2Vis = Math.max(0, 1 - (scrollProgress - 0.25) / 0.23);
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

    // Chapter 3 (Globe) visibility: peaks at 0.5, fades towards 0.25 and 0.73
    let c3Vis = 0;
    if (scrollProgress > 0.25 && scrollProgress < 0.5) {
      c3Vis = (scrollProgress - 0.25) / 0.25;
    } else if (scrollProgress >= 0.5) {
      c3Vis = Math.max(0, 1 - (scrollProgress - 0.5) / 0.23);
    }
    if (globeRef.current) {
      globeRef.current.visible = c3Vis > 0.01;
      globeRef.current.scale.setScalar(c3Vis * 1.25);
      // Auto-rotation
      globeRef.current.rotation.y = time * 0.1;
    }

    // Chapter 4 & 5 (Grid Tunnel) visibility: fades in from 0.5 to 0.75 and stays
    const c4Vis = scrollProgress > 0.5 ? Math.min(1.0, (scrollProgress - 0.5) / 0.25) : 0;
    if (tunnelRef.current) {
      tunnelRef.current.visible = c4Vis > 0.01;
      tunnelRef.current.scale.setScalar(c4Vis);
      
      // Move grid infinite loop effect
      const gridSpeed = 2.0 + scrollProgress * 6.0; // accelerate with scroll depth
      if (gridFloorRef.current) {
        gridFloorRef.current.position.z = (time * gridSpeed) % 4.0;
      }
      if (gridCeilRef.current) {
        gridCeilRef.current.position.z = (time * gridSpeed) % 4.0;
      }
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
        
        {/* Neon Wireframe Sphere Inner */}
        <mesh>
          <sphereGeometry args={[0.7, 16, 16]} />
          <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.6} />
        </mesh>
        
        {/* Outer Orbiting Ring */}
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[2.2, 0.015, 8, 64]} />
          <meshBasicMaterial color="#bf55ec" transparent opacity={0.4} />
        </mesh>
      </group>

      {/* ----------------------------------------------------
          CHAPTER 2: THE DIVISIONS (3 Floating Glass Structures)
          ---------------------------------------------------- */}
      <group ref={divisionsRef}>
        {/* Aetheris AI: Glass Cube + Dense Wireframe Matrix */}
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
          <mesh>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshBasicMaterial color="#5B4CFF" wireframe transparent opacity={0.5} />
          </mesh>
        </group>

        {/* Spectra Cyber: Glass Torus + Shield Sphere */}
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
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <sphereGeometry args={[0.9, 8, 8]} />
            <meshBasicMaterial color="#C9A84C" wireframe transparent opacity={0.4} />
          </mesh>
        </group>

        {/* Helix Bio: Glass Torus Knot + Pulsing Core */}
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
          <mesh>
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshBasicMaterial color="#4CFFB4" transparent opacity={0.8} />
          </mesh>
        </group>
      </group>

      {/* ----------------------------------------------------
          CHAPTER 3: THE ECOSYSTEM (Global Tech Globe + Nodes)
          ---------------------------------------------------- */}
      <group ref={globeRef}>
        {/* Core Dark Metallic Planet */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#080816"
            roughness={0.7}
            metalness={0.9}
            bumpScale={0.05}
          />
        </mesh>

        {/* Latitude/Longitude Wireframe grid overlay */}
        <mesh>
          <sphereGeometry args={[1.51, 24, 24]} />
          <meshBasicMaterial color="#5B4CFF" wireframe transparent opacity={0.25} />
        </mesh>

        {/* Orbit Rings representing satellite connections */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.0, 0.01, 8, 64]} />
          <meshBasicMaterial color="#C9A84C" transparent opacity={0.3} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, -Math.PI / 6, 0]}>
          <torusGeometry args={[2.1, 0.008, 8, 64]} />
          <meshBasicMaterial color="#4CFFB4" transparent opacity={0.25} />
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
          CHAPTER 4 & 5: THE HORIZON (Infinite Grid Tunnel)
          ---------------------------------------------------- */}
      <group ref={tunnelRef}>
        {/* Floor grid */}
        <gridHelper
          ref={gridFloorRef}
          args={[60, 30, '#5B4CFF', '#09081f']}
          position={[0, -2.2, 0]}
        />
        
        {/* Ceiling grid */}
        <gridHelper
          ref={gridCeilRef}
          args={[60, 30, '#4CFFB4', '#09081f']}
          position={[0, 2.2, 0]}
        />
      </group>
    </group>
  );
}
