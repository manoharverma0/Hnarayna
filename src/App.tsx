import { useEffect } from 'react';
import { useSceneStore } from './stores/sceneStore';
import { Scene } from './components/canvas/Scene';
import { Loader } from './components/dom/Loader';
import { Navbar } from './components/dom/Navbar';
import { Hero } from './components/dom/Hero';
import { Ventures } from './components/dom/Ventures';
import { Projects } from './components/dom/Projects';
import { Contact } from './components/dom/Contact';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
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

    // 3. Coordinate GSAP ScrollTrigger timeline
    const scrollCtx = gsap.context(() => {
      // Track total scroll progress across the document body
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.0,
        onUpdate: (self) => {
          useSceneStore.setState({
            scrollProgress: self.progress,
            scrollVelocity: Math.abs(self.getVelocity() / 1000),
          });
        },
      });

      // Track active section changes on entering viewport centers
      const sections = ['#chapter-1', '#chapter-2', '#chapter-3', '#chapter-4'];
      sections.forEach((sel, i) => {
        ScrollTrigger.create({
          trigger: sel,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              useSceneStore.setState({ activeSection: i });
            }
          },
        });
      });
    });

    // 4. Cursor hover adjustments
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

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      scrollCtx.revert();
    };
  }, []);

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

      {/* Scrolling DOM Chapters */}
      <main className="content-layer">
        <section id="chapter-1" className="scroll-section">
          <Hero />
        </section>
        <section id="chapter-2" className="scroll-section">
          <Ventures />
        </section>
        <section id="chapter-3" className="scroll-section">
          <Projects />
        </section>
        <section id="chapter-4" className="scroll-section">
          <Contact />
        </section>
      </main>
    </div>
  );
}
