import { useRouteStore } from '../../stores/routeStore';

export function Footer() {
  const { setRoute } = useRouteStore();

  const handleLink = (route: 'home' | 'about' | 'contact' | 'privacy' | 'terms' | 'deletion') => {
    setRoute(route);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = '#ffffff';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = '#858599';
  };

  return (
    <footer
      style={{
        width: '100%',
        padding: '60px 8vw 40px 8vw',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(2, 2, 5, 0.9)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        fontFamily: "'Inter', sans-serif",
        color: '#858599',
        fontSize: '13px',
        position: 'relative',
        zIndex: 5,
        pointerEvents: 'auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Left Side: Logo & Description */}
        <div style={{ maxWidth: '300px' }}>
          <div
            onClick={() => handleLink('home')}
            style={{
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '16px',
              letterSpacing: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                background: 'linear-gradient(135deg, #5B4CFF, #C9A84C)',
                borderRadius: '50%',
              }}
            />
            Hnarayna
          </div>
          <p style={{ lineHeight: 1.6, fontSize: '12px', color: '#858599' }}>
            Next-gen Meta developer app creation engines, secure Facebook API credential telemetry, and high-frequency webhook configurations.
          </p>
        </div>

        {/* Right Side: Links */}
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          {/* Navigation Category */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Ecosystem
            </span>
            <button
              onClick={() => handleLink('home')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={btnStyle}
            >
              Home / Nexus
            </button>
            <button
              onClick={() => handleLink('about')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={btnStyle}
            >
              About App
            </button>
            <button
              onClick={() => handleLink('contact')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={btnStyle}
            >
              Contact Hub
            </button>
          </div>

          {/* Compliance Category */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Legal Bounds
            </span>
            <button
              onClick={() => handleLink('privacy')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={btnStyle}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleLink('terms')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={btnStyle}
            >
              Terms of Accord
            </button>
            <button
              onClick={() => handleLink('deletion')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={btnStyle}
            >
              Data Deletion
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '11px',
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        <span>© 2026 Hnarayna Labs. All telemetry protected.</span>
        <span style={{ color: '#5B4CFF' }}>SECURE LINK ESTABLISHED</span>
      </div>
    </footer>
  );
}

const btnStyle = {
  background: 'none',
  border: 'none',
  color: '#858599',
  fontSize: '12px',
  cursor: 'pointer',
  textAlign: 'left' as const,
  padding: 0,
  transition: 'color 0.2s ease',
  fontFamily: "'Inter', sans-serif",
  outline: 'none',
};
