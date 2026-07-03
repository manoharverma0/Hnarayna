import { useRouteStore } from '../../stores/routeStore';
import type { Route } from '../../stores/routeStore';

export function Navbar() {
  const { currentRoute, setRoute } = useRouteStore();

  const handleNavClick = (route: Route) => {
    setRoute(route);
  };

  const navLinks: { label: string; route: Route }[] = [
    { label: 'Services', route: 'services' },
    { label: 'Products', route: 'products' },
    { label: 'Portfolio', route: 'portfolio' },
    { label: 'Process', route: 'process' },
    { label: 'About', route: 'about' },
    { label: 'Careers', route: 'careers' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        padding: '20px 8vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        background: 'rgba(3, 3, 3, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => handleNavClick('home')}
        style={{
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '2px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          pointerEvents: 'auto',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #5B4CFF, #4CFFB4)',
            borderRadius: '50%',
          }}
        />
        Hnarayna
      </div>

      {/* Nav links */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          pointerEvents: 'auto',
        }}
      >
        {navLinks.map((link) => {
          const isActive = currentRoute === link.route;
          return (
            <button
              key={link.route}
              onClick={() => handleNavClick(link.route)}
              style={{
                background: 'none',
                border: 'none',
                color: isActive ? '#5B4CFF' : '#a1a1aa',
                fontSize: '12px',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: isActive ? 700 : 500,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                padding: '8px 0',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = '#a1a1aa';
              }}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Right Action CTA */}
      <div style={{ pointerEvents: 'auto' }}>
        <button
          onClick={() => handleNavClick('contact')}
          style={{
            padding: '8px 18px',
            borderRadius: '18px',
            background: currentRoute === 'contact' ? 'rgba(91, 76, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
            border: currentRoute === 'contact' ? '1px solid #5B4CFF' : '1px solid rgba(255, 255, 255, 0.1)',
            color: currentRoute === 'contact' ? '#5B4CFF' : '#ffffff',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#5B4CFF';
            e.currentTarget.style.color = '#5B4CFF';
            e.currentTarget.style.background = 'rgba(91, 76, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            if (currentRoute !== 'contact') {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
            } else {
              e.currentTarget.style.background = 'rgba(91, 76, 255, 0.1)';
            }
          }}
        >
          Start Project
        </button>
      </div>
    </nav>
  );
}
