import { useEffect } from 'react';
import { useSceneStore } from './stores/sceneStore';
import { useRouteStore } from './stores/routeStore';
import { Scene } from './components/canvas/Scene';
import { Loader } from './components/dom/Loader';
import { Navbar } from './components/dom/Navbar';
import { LandingPage } from './components/dom/LandingPage';
import { About } from './components/dom/About';
import { ContactPage } from './components/dom/ContactPage';
import { ServicesPage } from './components/dom/ServicesPage';
import { ProductsPage } from './components/dom/ProductsPage';
import { PortfolioPage } from './components/dom/PortfolioPage';
import { ProcessPage } from './components/dom/ProcessPage';
import { CareersPage } from './components/dom/CareersPage';
import { PrivacyPolicy } from './components/dom/PrivacyPolicy';
import { Terms } from './components/dom/Terms';
import { DataDeletion } from './components/dom/DataDeletion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const currentRoute = useRouteStore((state) => state.currentRoute);

  useEffect(() => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      infinite: false,
    });

    // Let GSAP drive Lenis rendering loop
    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger updates with Lenis scroll events
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Track global mouse positioning
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      useSceneStore.setState({ mouseX: x, mouseY: y });

      // Move custom cursor elements
      const cursor = document.getElementById('custom-cursor');
      const dot = document.getElementById('custom-cursor-dot');
      if (cursor && dot) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3. Cursor hover adjustments
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('.venture-card') ||
        target.closest('button') ||
        target.closest('a');

      if (isInteractive) {
        document.body.classList.add('hover-active');
      } else {
        document.body.classList.remove('hover-active');
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    // Store lenis globally on window so we can scroll to top on routing
    (window as any).lenisInstance = lenis;

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      delete (window as any).lenisInstance;
    };
  }, []);

  // Listen for route changes to refresh scroll layout and position
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = (window as any).lenisInstance;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    
    // Allow React to commit layout, then refresh ScrollTrigger
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => clearTimeout(timeout);
  }, [currentRoute]);

  return (
    <div className="app-container">
      {/* Custom Cursor */}
      <div id="custom-cursor" className="custom-cursor" />
      <div id="custom-cursor-dot" className="custom-cursor-dot" />

      {/* Preloader */}
      <Loader />

      {/* Navigation Header */}
      <Navbar />

      {/* Immersive 3D Scene Background */}
      <Scene />

      {/* Dynamic Content Routing */}
      {currentRoute === 'home' && <LandingPage />}
      {currentRoute === 'services' && <ServicesPage />}
      {currentRoute === 'products' && <ProductsPage />}
      {currentRoute === 'portfolio' && <PortfolioPage />}
      {currentRoute === 'process' && <ProcessPage />}
      {currentRoute === 'about' && <About />}
      {currentRoute === 'careers' && <CareersPage />}
      {currentRoute === 'contact' && <ContactPage />}
      {currentRoute === 'privacy' && <PrivacyPolicy />}
      {currentRoute === 'terms' && <Terms />}
      {currentRoute === 'deletion' && <DataDeletion />}
    </div>
  );
}
