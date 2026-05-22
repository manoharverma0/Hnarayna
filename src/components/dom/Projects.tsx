import { useSceneStore } from '../../stores/sceneStore';
import { MapPin, Brain, Camera, ClipboardList, Tv, Terminal } from 'lucide-react';

export function Projects() {
  const selectedProject = useSceneStore((state) => state.selectedProject);
  const setSelectedProject = useSceneStore((state) => state.setSelectedProject);

  const projectsData = [
    {
      title: 'HotelNear.in',
      venture: 'Incubator Venture',
      desc: 'Hyperlocal hotel discovery platform for pilgrimage and religious tourism destinations across Madhya Pradesh. First product targeting Kubereshwar Dham.',
      status: 'building',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Maps API'],
      icon: <MapPin size={18} />,
    },
    {
      title: 'MindSpace',
      venture: 'Aetheris AI Partner',
      desc: 'Mental wellness journal and mood tracking application with AI-powered insights, streak systems, and anonymous community support.',
      status: 'building',
      tech: ['React', 'Appwrite', 'Redux', 'AI'],
      icon: <Brain size={18} />,
    },
    {
      title: 'Glimpse Gallery',
      venture: 'Incubator Venture',
      desc: '3D photography showcase showcase platform with immersive WebGL viewer. Portfolio-grade presentation for photographers who refuse to be ordinary.',
      status: 'live',
      tech: ['Three.js', 'GSAP', 'WebGL', 'Vercel'],
      icon: <Camera size={18} />,
    },
    {
      title: 'TCS NQT Simulator',
      venture: 'Incubator Venture',
      desc: 'Full-fidelity exam simulator for TCS National Qualifier Test. Timed sections, adaptive difficulty, and detailed performance analytics.',
      status: 'planned',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      icon: <ClipboardList size={18} />,
    },
    {
      title: 'WatchToEarn',
      venture: 'Spectra Cyber Partner',
      desc: 'Micro-reward platform where users earn verified digital credits by engaging with brand content. Transparent reward tracking.',
      status: 'planned',
      tech: ['MERN', 'Redis', 'JWT'],
      icon: <Tv size={18} />,
    },
    {
      title: 'CLI AI Agent',
      venture: 'Aetheris AI Product',
      desc: 'Terminal-native AI coding assistant with project context awareness, file editing, and multi-model routing. Built for developers who live in the terminal.',
      status: 'planned',
      tech: ['Node.js', 'Python', 'LLM APIs'],
      icon: <Terminal size={18} />,
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
            color: '#6366f1',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          Chapter 03 // Ecosystem
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
        >
          Incubator Pipeline
        </h2>
        <p
          style={{
            fontSize: 'calc(0.85rem + 0.1vw)',
            fontFamily: "'Inter', sans-serif",
            color: '#858599',
            lineHeight: 1.6,
            maxWidth: '550px',
            margin: 0,
          }}
        >
          An interconnected neural network of active software products, sharing code and infrastructure coordinates.
        </p>
      </div>

      {/* Responsive Grid layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
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
              style={{
                background: isSelected ? 'rgba(99, 102, 241, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                border: isSelected
                  ? '1px solid rgba(99, 102, 241, 0.25)'
                  : '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                pointerEvents: 'auto',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: isSelected ? '0 10px 30px rgba(99, 102, 241, 0.05)' : 'none',
                transform: isSelected ? 'translateY(-4px)' : 'translateY(0)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '8px',
                }}
              >
                <span
                  style={{
                    fontSize: '10px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: isSelected ? '#5B4CFF' : '#6e6e80',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {project.venture}
                </span>

                {/* Status Indicator */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '9px',
                    fontFamily: "'JetBrains Mono', monospace",
                    color: project.status === 'live' ? '#4CFFB4' : project.status === 'building' ? '#C9A84C' : '#858599',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: `1px solid ${
                      project.status === 'live' ? 'rgba(76, 255, 180, 0.15)' : project.status === 'building' ? 'rgba(201, 168, 76, 0.15)' : 'rgba(255, 255, 255, 0.05)'
                    }`,
                    padding: '3px 8px',
                    borderRadius: '12px',
                  }}
                >
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: project.status === 'live' ? '#4CFFB4' : project.status === 'building' ? '#C9A84C' : '#858599',
                      boxShadow: project.status === 'live' ? '0 0 6px #4CFFB4' : project.status === 'building' ? '0 0 6px #C9A84C' : 'none',
                    }}
                  />
                  {project.status === 'live' ? 'LIVE' : project.status === 'building' ? 'DEVELOPING' : 'PLANNED'}
                </div>
              </div>

              {/* Title & Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '4px',
                }}
              >
                <div style={{ color: isSelected ? '#5B4CFF' : '#858599', display: 'flex', transition: 'color 0.3s' }}>
                  {project.icon}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Desc */}
              <p
                style={{
                  fontSize: '12.5px',
                  color: '#858599',
                  lineHeight: 1.55,
                  margin: '0 0 12px 0',
                  fontFamily: "'Inter', sans-serif",
                  minHeight: '60px',
                }}
              >
                {project.desc}
              </p>

              {/* Tech Badges */}
              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.03)',
                  paddingTop: '16px',
                  display: 'flex',
                  gap: '6px',
                  flexWrap: 'wrap',
                  marginTop: 'auto',
                }}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: '9px',
                      fontFamily: "'JetBrains Mono', monospace",
                      color: isSelected ? '#ffffff' : '#858599',
                      background: isSelected ? 'rgba(91, 76, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? '1px solid rgba(91, 76, 255, 0.2)' : '1px solid rgba(255, 255, 255, 0.04)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
