import { useSceneStore } from '../../stores/sceneStore';
import { Cpu, Terminal, Layers, Activity } from 'lucide-react';

export function Projects() {
  const selectedProject = useSceneStore((state) => state.selectedProject);
  const setSelectedProject = useSceneStore((state) => state.setSelectedProject);

  const projectsData = [
    {
      title: 'Coach CRM',
      venture: 'Enterprise SaaS',
      desc: 'Multi-tenant student management and automated WhatsApp fee reminders system for coaching institutes.',
      icon: <Cpu size={18} />,
      metrics: { deployments: '24+ Institutes', students: '6,200+', automation: 'Twilio / WhatsApp' },
    },
    {
      title: 'Geo-Attendance',
      venture: 'Mobile Platform',
      desc: 'GPS-locked, spoof-proof facial recognition check-in flow for remote and distributed field employees.',
      icon: <Terminal size={18} />,
      metrics: { verifications: '98.4k+', avgSpeed: '1.2s', spoofBlocks: '430+' },
    },
    {
      title: 'Hotel Booking Engine',
      venture: 'Web App',
      desc: 'Direct room reservation, calendar sync, and cleaning schedule coordinator for boutique hotel chains.',
      icon: <Layers size={18} />,
      metrics: { bookings: '14.2k+', commissionSave: '18% avg', syncSpeed: '< 500ms' },
    },
    {
      title: 'Passport Photo Maker',
      venture: 'Automated Utility',
      desc: 'Biometric image centering, scaling, and background swap API matching consulate regulations.',
      icon: <Activity size={18} />,
      metrics: { photosMade: '320k+', compliance: '100% ICAO', scaleSpeed: '0.8s / img' },
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
      <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
        <span
          style={{
            fontSize: '11px',
            fontFamily: "'JetBrains Mono', monospace",
            color: '#5B4CFF',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '8px',
          }}
          className="reveal-fade"
        >
          Chapter 03 // Products
        </span>
        <h2
          style={{
            fontSize: 'calc(1.8rem + 2vw)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-1px',
            lineHeight: 1.0,
            color: '#ffffff',
            margin: '0 0 16px 0',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          className="reveal-fade"
        >
          Our Product Suite
        </h2>
        <p
          style={{
            fontSize: 'calc(0.85rem + 0.1vw)',
            fontFamily: "'Inter', sans-serif",
            color: '#a1a1aa',
            lineHeight: 1.6,
            maxWidth: '550px',
            margin: 0,
          }}
          className="reveal-fade"
        >
          We design, develop, and maintain our own high-performance SaaS platforms and internal business tools, proving our ability to scale software.
        </p>
      </div>

      {/* Horizontal grid layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px',
          width: '100%',
        }}
      >
        {projectsData.map((project, index) => {
          const isSelected = selectedProject === index;
          return (
            <div
              key={project.title}
              onMouseEnter={() => setSelectedProject(index)}
              onMouseLeave={() => setSelectedProject(null)}
              className="reveal-fade"
              style={{
                background: isSelected ? 'rgba(91, 76, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                border: isSelected
                  ? '1px solid rgba(91, 76, 255, 0.25)'
                  : '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                padding: '24px',
                pointerEvents: 'auto',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: isSelected ? '0 10px 30px rgba(91, 76, 255, 0.05)' : 'none',
                transform: isSelected ? 'translateY(-4px)' : 'translateY(0)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: isSelected ? '#5B4CFF' : '#858599',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.venture}
                </span>
                <div
                  style={{
                    color: isSelected ? '#5B4CFF' : '#858599',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {project.icon}
                </div>
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#ffffff',
                  margin: '0 0 10px 0',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: '12px',
                  color: '#858599',
                  lineHeight: 1.5,
                  margin: '0 0 20px 0',
                  fontFamily: "'Inter', sans-serif",
                  minHeight: '54px',
                }}
              >
                {project.desc}
              </p>

              {/* Mini data metrics */}
              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.03)',
                  paddingTop: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '10px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <span style={{ color: '#555566', textTransform: 'capitalize' }}>{key}:</span>
                    <span style={{ color: isSelected ? '#ffffff' : '#858599', transition: 'color 0.3s' }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
