import { useSceneStore } from '../../stores/sceneStore';
import { Bot, Shield, Dna } from 'lucide-react';
import { useRef } from 'react';
import { gsap } from 'gsap';

interface CardProps {
  index: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tags: string[];
  color: string;
  setHoveredPlanet: (index: number | null) => void;
}

function VentureCard({ index, title, desc, icon, tags, color, setHoveredPlanet }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // 3D Tilt Effect
    gsap.to(card, {
      rotateY: x * 0.08,
      rotateX: -y * 0.08,
      transformPerspective: 800,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    setHoveredPlanet(null);
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHoveredPlanet(index)}
      onMouseLeave={handleMouseLeave}
      style={{
        background: 'rgba(5, 5, 12, 0.45)',
        border: '1px solid rgba(255, 255, 255, 0.03)',
        borderRadius: '16px',
        padding: '32px',
        flex: '1',
        minWidth: '280px',
        maxWidth: '360px',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        cursor: 'pointer',
        pointerEvents: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="venture-card"
    >
      {/* Glow Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at 50% 50%, ${color}10 0%, transparent 50%)`,
          pointerEvents: 'none',
          transition: 'opacity 0.4s ease',
          opacity: 0.3,
        }}
        className="card-glow"
      />

      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '12px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
        }}
      >
        {icon}
      </div>

      <div>
        <h3
          style={{
            fontSize: '20px',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 8px 0',
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '13px',
            color: '#858599',
            fontFamily: "'Inter', sans-serif",
            lineHeight: 1.6,
            margin: 0,
            minHeight: '60px',
          }}
        >
          {desc}
        </p>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '10px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#a3a3b8',
              background: 'rgba(255,255,255,0.03)',
              padding: '4px 10px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.03)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Ventures() {
  const setHoveredPlanet = useSceneStore((state) => state.setHoveredPlanet);

  const venturesData = [
    {
      title: 'Aetheris AI',
      desc: 'Building next-generation AI infrastructure for enterprises. From custom LLM deployments to intelligent automation pipelines — we make machine intelligence practical and profitable.',
      icon: <Bot size={22} />,
      tags: ['Large Language Models', 'MLOps', 'AI Agents', 'Computer Vision'],
      color: '#5B4CFF',
    },
    {
      title: 'Spectra Cyber',
      desc: 'End-to-end cybersecurity solutions for modern digital businesses. Penetration testing, zero-trust architecture, and real-time threat intelligence for organizations that cannot afford to be vulnerable.',
      icon: <Shield size={22} />,
      tags: ['Penetration Testing', 'Zero Trust', 'SOC', 'Threat Intel'],
      color: '#C9A84C',
    },
    {
      title: 'Helix Bio',
      desc: 'Software systems for the life sciences industry. Clinical trial management, genomic data pipelines, and regulatory compliance tools built for the speed of modern biotech.',
      icon: <Dna size={22} />,
      tags: ['Genomics', 'Clinical Data', 'HIPAA', 'Regulatory Tech'],
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
        >
          Chapter 02 // Verticals
        </span>
        <h2
          style={{
            fontSize: 'calc(1.8rem + 2vw)',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '-1.5px',
            lineHeight: 1.0,
            color: '#ffffff',
            margin: '0 0 16px 0',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          Three Verticals.<br />
          <span style={{
            background: 'linear-gradient(135deg, #5B4CFF, #C9A84C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>One Mission.</span>
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
          H Narayana Ventures splits its core resources into independent technology vectors, building specialized products to solve critical industry challenges.
        </p>
      </div>

      {/* Grid of Cards */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {venturesData.map((venture, i) => (
          <VentureCard
            key={venture.title}
            index={i}
            title={venture.title}
            desc={venture.desc}
            icon={venture.icon}
            tags={venture.tags}
            color={venture.color}
            setHoveredPlanet={setHoveredPlanet}
          />
        ))}
      </div>
    </div>
  );
}
