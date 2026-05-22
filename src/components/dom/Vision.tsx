import { gsap } from 'gsap';

export function Vision() {
  const principles = [
    {
      num: '01',
      title: 'Build with Intent',
      desc: 'Every product we ship solves a real problem for real people. We do not build for the sake of building.',
      color: '#5B4CFF',
    },
    {
      num: '02',
      title: 'Own the Stack',
      desc: 'From infrastructure to interface, deep technical ownership means faster iteration and higher quality outcomes.',
      color: '#C9A84C',
    },
    {
      num: '03',
      title: 'Compound Value',
      desc: 'Each venture contributes infrastructure, talent, and distribution to every other. The whole is greater than the sum.',
      color: '#4CFFB4',
    },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 2,
        padding: '8vw 8vw',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {/* Left Side: Philosophy Headline */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#4CFFB4',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '8px',
            }}
          >
            Chapter 04 // Synergy
          </span>
          <h2
            style={{
              fontSize: 'calc(1.8rem + 2.2vw)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
              lineHeight: 1.0,
              color: '#ffffff',
              margin: '0 0 24px 0',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            We Build.<br />
            We Ship.<br />
            <span
              style={{
                background: 'linear-gradient(135deg, #4CFFB4, #5B4CFF)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              We Compound.
            </span>
          </h2>
          <p
            style={{
              fontSize: 'calc(0.85rem + 0.1vw)',
              fontFamily: "'Inter', sans-serif",
              color: '#858599',
              lineHeight: 1.6,
              margin: '0 0 16px 0',
            }}
          >
            H Narayana Ventures was founded with a simple conviction: India has the talent and the ambition to build world-class technology companies. We are one of them.
          </p>
          <p
            style={{
              fontSize: 'calc(0.82rem + 0.08vw)',
              fontFamily: "'Inter', sans-serif",
              color: '#6e6e80',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            We are not a consulting firm. We are not an agency. We are a builder — creating products, divisions, and companies that generate real value for real users.
          </p>
        </div>

        {/* Right Side: Philosophy Principles */}
        <div
          style={{
            flex: '1.2',
            minWidth: '320px',
            maxWidth: '550px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            pointerEvents: 'auto',
          }}
        >
          {principles.map((p) => {
            const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
              gsap.to(e.currentTarget, {
                x: 8,
                borderColor: `${p.color}40`,
                background: 'rgba(255, 255, 255, 0.02)',
                duration: 0.3,
                ease: 'power2.out',
              });
            };

            const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
              gsap.to(e.currentTarget, {
                x: 0,
                borderColor: 'rgba(255, 255, 255, 0.03)',
                background: 'rgba(5, 5, 12, 0.3)',
                duration: 0.4,
                ease: 'power3.out',
              });
            };

            return (
              <div
                key={p.title}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  background: 'rgba(5, 5, 12, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.03)',
                  borderRadius: '12px',
                  padding: '24px 32px',
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    fontSize: '18px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 'bold',
                    color: p.color,
                    marginTop: '2px',
                  }}
                >
                  {p.num}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12.5px',
                      color: '#858599',
                      lineHeight: 1.5,
                      margin: 0,
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
