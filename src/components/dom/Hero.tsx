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
      // Split text into words and animate with gradient support
      const words = title.innerText.split(' ');
      title.innerHTML = words
        .map((word) => {
          const isAccent = word.toLowerCase().includes("tomorrow's");
          const colorStyle = isAccent
            ? 'background: linear-gradient(135deg, #5B4CFF, #C9A84C); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;'
            : '';
          return `<span class="word-span" style="display:inline-block; opacity:0; transform:translateY(20px); ${colorStyle}">${word}</span>`;
        })
        .join('&nbsp;');

      const timeline = gsap.timeline();
      timeline.to('.word-span', {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2, // let loader finish
      });

      timeline.from(sub, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      timeline.from('.stat-item', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.2');
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
        padding: '8vh 8vw 0 8vw',
        textAlign: 'center',
        pointerEvents: 'none',
      }}
    >
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Eyebrow */}
        <div
          className="hero-eyebrow"
          style={{
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#a855f7',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginBottom: '16px',
            opacity: 0.8,
          }}
        >
          Est. 2024 · Seoni, Madhya Pradesh
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          style={{
            fontSize: 'calc(1.8rem + 3.2vw)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 1.0,
            color: '#ffffff',
            margin: '0 0 24px 0',
            fontFamily: "'Space Grotesk', sans-serif",
            perspective: '1000px',
          }}
        >
          Building Tomorrow's Tech Infrastructure
        </h1>

        {/* Subtitle */}
        <p
          ref={subRef}
          style={{
            fontSize: 'calc(0.85rem + 0.15vw)',
            fontFamily: "'Inter', sans-serif",
            color: '#858599',
            letterSpacing: '0.5px',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto',
          }}
        >
          H Narayana Ventures is a technology holding company building AI, cybersecurity, and biotech software products — and incubating the next generation of Indian tech startups.
        </p>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            width: '100%',
            maxWidth: '700px',
            marginTop: '56px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '32px',
            pointerEvents: 'auto',
          }}
        >
          {[
            { number: '3', suffix: '+', label: 'Active Divisions', color: '#5B4CFF' },
            { number: '6', suffix: '+', label: 'Products in Pipeline', color: '#C9A84C' },
            { number: '2024', suffix: '', label: 'Founded', color: '#4CFFB4' },
            { number: '∞', suffix: '', label: 'Ambition', color: '#a855f7' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-item"
              style={{
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: 'calc(1.1rem + 0.8vw)',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  marginBottom: '4px',
                }}
              >
                <span
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}, #ffffff)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.number}
                </span>
                {stat.suffix}
              </div>
              <div
                style={{
                  fontSize: '9px',
                  fontFamily: "'JetBrains Mono', monospace",
                  color: '#6e6e80',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '5vh',
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
            height: '32px',
            background: 'linear-gradient(to bottom, #5B4CFF, transparent)',
            animation: 'scrollLinePulse 2s infinite ease-in-out',
          }}
        />
      </div>
    </div>
  );
}
