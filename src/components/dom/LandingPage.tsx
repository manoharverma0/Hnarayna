import { useEffect } from 'react';
import { useSceneStore } from '../../stores/sceneStore';
import { Hero } from './Hero';
import { Ventures } from './Ventures';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function LandingPage() {
  useEffect(() => {
    // Coordinate GSAP ScrollTrigger timeline
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

      // DOM Scroll Reveals for Chapters 2 to 4
      ['#chapter-2', '#chapter-3', '#chapter-4'].forEach((sel) => {
        const revealElements = document.querySelectorAll(`${sel} .reveal-fade`);
        if (revealElements.length > 0) {
          gsap.fromTo(revealElements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sel,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              }
            }
          );
        }
      });
    });

    return () => {
      scrollCtx.revert();
      // Reset active section & scroll progress state when unmounting
      useSceneStore.setState({ activeSection: 0, scrollProgress: 0 });
    };
  }, []);

  return (
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
      <Footer />
    </main>
  );
}
