import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouteStore } from '../../stores/routeStore';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { setRoute } = useRouteStore();

  useEffect(() => {
    const title = titleRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;

    if (title && sub && cta) {
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
        stagger: 0.03,
        duration: 0.8,
        ease: 'power4.out',
        delay: 1.2, // let loader finish
      });

      timeline.from(sub, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');

      timeline.from(cta, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4');
    }
  }, []);

  const handleScrollToProducts = () => {
    const el = document.getElementById('chapter-3');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      <div style={{ maxWidth: '850px', pointerEvents: 'auto' }}>
        <h1
          ref={titleRef}
          style={{
            fontSize: 'calc(2.2rem + 3.5vw)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            lineHeight: 1.0,
            color: '#ffffff',
            margin: '0 0 24px 0',
            fontFamily: "'Space Grotesk', sans-serif",
            perspective: '1000px',
            background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          We design, build, & scale digital products
        </h1>
        <p
          ref={subRef}
          style={{
            fontSize: 'calc(0.95rem + 0.2vw)',
            fontFamily: "'Inter', sans-serif",
            color: '#a1a1aa',
            lineHeight: 1.6,
            maxWidth: '650px',
            margin: '0 auto 40px auto',
          }}
        >
          Hnarayna is an elite software engineering studio. We build custom applications, high-scale SaaS products, and business automation platforms that deliver real business value.
        </p>

        {/* Premium CTAs */}
        <div
          ref={ctaRef}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setRoute('contact')}
            style={{
              padding: '16px 32px',
              borderRadius: '30px',
              background: '#ffffff',
              color: '#030303',
              border: 'none',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#5B4CFF';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(91, 76, 255, 0.4)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#030303';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Start a Project
          </button>

          <button
            onClick={handleScrollToProducts}
            style={{
              padding: '16px 32px',
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.03)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore Our Products
          </button>
        </div>
      </div>

      {/* Decorative lines / scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '8vh',
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
            color: '#a1a1aa',
            textTransform: 'uppercase',
          }}
        >
          Scroll to Explore
        </span>
        <div
          style={{
            background: 'linear-gradient(to bottom, #5B4CFF, transparent)',
            width: '1px',
            height: '40px',
            animation: 'scrollLinePulse 2s infinite ease-in-out',
          }}
        />
      </div>
    </div>
  );
}
