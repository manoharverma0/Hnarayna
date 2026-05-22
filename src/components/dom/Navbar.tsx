import { useSceneStore } from '../../stores/sceneStore';

export function Navbar() {
  const activeSection = useSceneStore((state) => state.activeSection);

  const scrollToSection = (index: number) => {
    const el = document.getElementById(`chapter-${index + 1}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = ['Singularity', 'Mitosis', 'Ecosystem', 'Horizon'];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        padding: '24px 8vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        mixBlendMode: 'difference',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => scrollToSection(0)}
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
        }}
      >
        <span
          style={{
            display: 'inline-block',
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            borderRadius: '50%',
          }}
        />
        Hnarayna
      </div>

      {/* Nav links */}
      <div
        style={{
          display: 'flex',
          gap: '32px',
          pointerEvents: 'auto', // override DOM layer settings
        }}
      >
        {navItems.map((item, index) => {
          const isActive = activeSection === index;
          return (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              style={{
                background: 'none',
                border: 'none',
                color: isActive ? '#6366f1' : '#858599',
                fontSize: '11px',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'color 0.3s ease, transform 0.3s ease',
                position: 'relative',
                padding: '4px 0',
              }}
            >
              {item}
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: '#6366f1',
                    boxShadow: '0 0 8px #6366f1',
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
