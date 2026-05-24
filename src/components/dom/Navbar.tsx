import { useSceneStore } from '../../stores/sceneStore';
import { useRouteStore } from '../../stores/routeStore';

export function Navbar() {
  const activeSection = useSceneStore((state) => state.activeSection);
  const { currentRoute, setRoute } = useRouteStore();

  const handleNavClick = (item: string, index: number) => {
    if (item === 'About App') {
      setRoute('about');
    } else if (item === 'Contact') {
      setRoute('contact');
    } else {
      if (currentRoute !== 'home') {
        setRoute('home');
        // Give time for the home sections to mount in DOM
        setTimeout(() => {
          const el = document.getElementById(`chapter-${index + 1}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.getElementById(`chapter-${index + 1}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = () => {
    setRoute('home');
    if (currentRoute === 'home') {
      const el = document.getElementById('chapter-1');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = ['Singularity', 'Mitosis', 'Ecosystem', 'About App', 'Contact'];

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
        onClick={handleLogoClick}
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
            background: 'linear-gradient(135deg, #5B4CFF, #C9A84C)',
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
          let isActive = false;
          if (item === 'About App') {
            isActive = currentRoute === 'about';
          } else if (item === 'Contact') {
            isActive = currentRoute === 'contact';
          } else {
            isActive = currentRoute === 'home' && activeSection === index;
          }

          return (
            <button
              key={item}
              onClick={() => handleNavClick(item, index)}
              style={{
                background: 'none',
                border: 'none',
                color: isActive ? '#5B4CFF' : '#858599',
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
                    background: '#5B4CFF',
                    boxShadow: '0 0 8px #5B4CFF',
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
