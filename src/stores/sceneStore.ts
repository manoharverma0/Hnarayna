import { create } from 'zustand';

interface SceneState {
  scrollProgress: number;
  scrollVelocity: number;
  activeSection: number;
  mouseX: number;
  mouseY: number;
  loaded: boolean;
  progress: number; // 0 to 100 loading progress
  hoveredPlanet: number | null; // null, 0, 1, 2 for the three child companies
  selectedProject: number | null; // index of the active project
  setScrollProgress: (progress: number, velocity: number) => void;
  setActiveSection: (section: number) => void;
  setMouse: (x: number, y: number) => void;
  setLoaded: (loaded: boolean) => void;
  setProgress: (progress: number) => void;
  setHoveredPlanet: (planet: number | null) => void;
  setSelectedProject: (project: number | null) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  scrollProgress: 0,
  scrollVelocity: 0,
  activeSection: 0,
  mouseX: 0,
  mouseY: 0,
  loaded: false,
  progress: 0,
  hoveredPlanet: null,
  selectedProject: null,
  setScrollProgress: (scrollProgress, scrollVelocity) => set({ scrollProgress, scrollVelocity }),
  setActiveSection: (activeSection) => set({ activeSection }),
  setMouse: (mouseX, mouseY) => set({ mouseX, mouseY }),
  setLoaded: (loaded) => set({ loaded }),
  setProgress: (progress) => set({ progress }),
  setHoveredPlanet: (hoveredPlanet) => set({ hoveredPlanet }),
  setSelectedProject: (selectedProject) => set({ selectedProject }),
}));
