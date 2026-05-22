import { useSceneStore } from '../../stores/sceneStore';
import { Cpu, Terminal, Layers, Activity } from 'lucide-react';

export function Projects() {
  const selectedProject = useSceneStore((state) => state.selectedProject);
  const setSelectedProject = useSceneStore((state) => state.setSelectedProject);

  const projectsData = [
    {
      title: 'Nexus Node',
      venture: 'Aetheris AI',
      desc: 'Distributed GPU clustering network allowing models to dynamically scale compute workloads across edge nodes.',
      icon: <Cpu size={18} />,
      metrics: { latency: '4.2ms', reliability: '99.99%', nodes: '12,480' },
    },
    {
      title: 'Lattice Crypt',
      venture: 'Spectra Cyber',
      desc: 'Post-quantum mathematical cryptography libraries designed to secure decentralized protocols.',
      icon: <Terminal size={18} />,
      metrics: { security: 'PQ-Grade', cipher: 'Kyber1024', throughput: '2.5 GB/s' },
    },
    {
      title: 'SynthFold 3D',
      venture: 'Helix Bio',
      desc: 'Generative transformer models predicting protein structures and molecular binding affinities in seconds.',
      icon: <Layers size={18} />,
      metrics: { models: 'AlphaFold-X', accuracy: '98.4%', speed: '600x faster' },
    },
    {
      title: 'Spectra Guard',
      venture: 'Spectra Cyber',
      desc: 'Intelligent network monitoring agents utilizing predictive security heuristics to preempt vector attacks.',
      icon: <Activity size={18} />,
      metrics: { threatsBlocked: '4.8M+', responseTime: '80ms', falsePositives: '0.001%' },
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
          An interconnected neural network of active software nodes, sharing infrastructure to solve critical computing bottlenecks.
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
              style={{
                background: isSelected ? 'rgba(99, 102, 241, 0.03)' : 'rgba(255, 255, 255, 0.01)',
                border: isSelected
                  ? '1px solid rgba(99, 102, 241, 0.25)'
                  : '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                padding: '24px',
                pointerEvents: 'auto',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                boxShadow: isSelected ? '0 10px 30px rgba(99, 102, 241, 0.05)' : 'none',
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
                    color: isSelected ? '#6366f1' : '#858599',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.venture}
                </span>
                <div
                  style={{
                    color: isSelected ? '#6366f1' : '#858599',
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
