import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Stagger reveal on mount
    const title = titleRef.current;
    const sub = subRef.current;
    
    if (title && sub) {
      // Split text into characters and animate
      const chars = title.innerText.split('');
      title.innerHTML = chars
        .map((char) => `<span class="char-span" style="display:inline-block; opacity:0; transform:translateY(30px) rotateX(-45deg)">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      const timeline = gsap.timeline();
      timeline.to('.char-span', {
        opacity: 1,
        y: 0,
        rotateX: 0,
        stagger: 0.04,
        duration: 1.0,
        ease: 'power4.out',
        delay: 1.2, // let loader finish
      });

      timeline.from(sub, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 2,
        padding: '0 8vw',
        textAlign: 'center',
        pointerEvents: 'none',
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        <h1
          ref={titleRef}
          style={{
            fontSize: 'calc(2.5rem + 4vw)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 0.9,
            color: '#ffffff',
            margin: '0 0 24px 0',
            fontFamily: "'Space Grotesk', sans-serif",
            perspective: '1000px',
          }}
        >
          Hnarayna
        </h1>
        <p
          ref={subRef}
          style={{
            fontSize: 'calc(0.9rem + 0.3vw)',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#858599',
            letterSpacing: '1px',
            lineHeight: 1.6,
            maxWidth: '550px',
            margin: '0 auto',
          }}
        >
          Every technological empire begins with a single point of pure innovation. We are that spark.
        </p>
      </div>

      {/* Decorative lines / grid */}
      <div
        style={{
          position: 'absolute',
          bottom: '10vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontSize: '9px',
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: '3px',
            color: '#858599',
            textTransform: 'uppercase',
          }}
        >
          Scroll to Witness Mitosis
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, #6366f1, transparent)',
            animation: 'scrollLinePulse 2s infinite ease-in-out',
          }}
        />
      </div>
    </div>
  );
}
