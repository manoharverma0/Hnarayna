import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, ShieldCheck, Terminal, Award, Cpu } from 'lucide-react';
import { Footer } from './Footer';

export function PortfolioPage() {
  const { setRoute } = useRouteStore();

  const portfolio = [
    {
      title: 'Headless E-commerce ERP Sync',
      client: 'Retail Distribution Group',
      icon: <Cpu size={22} style={{ color: '#5B4CFF' }} />,
      challenge: 'The client was losing thousands in sales due to lag between their offline legacy warehouse ERP inventory and their online Shopify storefront, leading to double-sales and manual inventory updates.',
      solution: 'We engineered a serverless sync pipeline that polls SQL Server database changes, processes diff queues via AWS Lambda, and updates Shopify catalog variables via GraphQL in under 5 seconds.',
      tech: 'AWS Lambda, Node.js, GraphQL, Redis, SQL Server, Webhooks.',
      impact: '0 instances of double-sales, 100% automated catalog inventory updates, and a 14% increase in sales operational capacity.',
      timeline: '8 weeks',
    },
    {
      title: 'TCS NQT Simulator',
      client: 'Training & Onboarding Academy',
      icon: <Terminal size={22} style={{ color: '#C9A84C' }} />,
      challenge: 'Large batches of engineering students failed corporate onboarding exams due to unfamiliarity with real IDE testing, custom sandboxes, and timed question formats.',
      solution: 'We built a secure browser practice portal mimicking actual test IDEs, featuring sandboxed execution of code, automated test-case evaluation, and timing limits.',
      tech: 'React, Node.js, Docker sandboxes, Redis queue, TailwindCSS.',
      impact: '87% passing rate in corporate evaluations, serving 4,800+ onboarding candidates with zero sandbox escapes.',
      timeline: '6 weeks',
    },
    {
      title: 'Biometric Check-In System',
      client: 'National Medical Care Provider',
      icon: <ShieldCheck size={22} style={{ color: '#4CFFB4' }} />,
      challenge: 'Validating shifts for remote care workers at patient homes led to billing disputes, payroll inconsistencies, and location disputes.',
      solution: 'We built a privacy-compliant geofenced check-in app utilizing local device GPS verification against care plan schedules, using local face embeddings for confirmation.',
      tech: 'React Native, Node.js, PostgreSQL, OpenCV, AWS Rekognition.',
      impact: '100% dispute resolution, saving the client an estimated $18,000/month in billing leakages, with check-ins validated in real-time.',
      timeline: '12 weeks',
    },
    {
      title: 'Warehouse IoT Live Coordinator',
      client: 'Logistics Holding Group',
      icon: <Award size={22} style={{ color: '#FF6B6B' }} />,
      challenge: 'Forklift operators and inventory managers suffered from stale load locations, leading to dispatch delays and loading zone clutter.',
      solution: 'We deployed a high-speed dashboard feeding RFID scanner signals over WebSockets directly to terminal screens, automatically generating optimal loading queues.',
      tech: 'Next.js, Express, Socket.io, Redis Streams, PostgreSQL, Docker.',
      impact: '32% faster truck loading speeds, complete elimination of loading zone blockages, and instant operator alerts.',
      timeline: '10 weeks',
    },
  ];

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        minHeight: '100vh',
        background: 'rgba(3, 3, 3, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        pointerEvents: 'auto',
        padding: '120px 0 0 0',
        color: '#ffffff',
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%', padding: '0 8vw', flex: 1, marginBottom: '80px' }}>
        {/* Back button */}
        <button
          onClick={() => setRoute('home')}
          style={{
            background: 'none',
            color: '#a1a1aa',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '48px',
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#5B4CFF';
            e.currentTarget.style.borderColor = 'rgba(91, 76, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#a1a1aa';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
          }}
        >
          <ArrowLeft size={14} /> Back to Hub
        </button>

        {/* Section Header */}
        <div style={{ marginBottom: '64px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#5B4CFF',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Portfolio // Real Case Studies
          </span>
          <h1
            style={{
              fontSize: 'calc(2.2rem + 1.8vw)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              lineHeight: 1.0,
              color: '#ffffff',
              margin: '0 0 24px 0',
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Engineering Showcase
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#a1a1aa',
              lineHeight: 1.6,
              maxWidth: '750px',
              fontWeight: 400,
            }}
          >
            A collection of digital solutions we have built for clients, illustrating the business challenges, technical architectures, and measurable outcomes.
          </p>
        </div>

        {/* Portfolio List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            width: '100%',
          }}
        >
          {portfolio.map((project) => (
            <div
              key={project.title}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '12px',
                        color: '#a1a1aa',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Client: {project.client}
                    </span>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution details */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  fontSize: '13px',
                }}
              >
                <div>
                  <span style={{ color: '#FF6B6B', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '6px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>The Challenge:</span>
                  <p style={{ color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>{project.challenge}</p>
                </div>
                <div>
                  <span style={{ color: '#4CFFB4', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '6px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Solution:</span>
                  <p style={{ color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>{project.solution}</p>
                </div>
              </div>

              {/* Stack & Impact */}
              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '20px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                  fontSize: '13px',
                }}
              >
                <div>
                  <span style={{ color: '#C9A84C', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '6px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Business Impact:</span>
                  <p style={{ color: '#ffffff', fontWeight: 600, lineHeight: 1.5, margin: 0 }}>{project.impact}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace" }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#555566' }}>Stack:</span>
                    <span style={{ color: '#ffffff' }}>{project.tech}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#555566' }}>Timeline:</span>
                    <span style={{ color: '#a1a1aa' }}>{project.timeline}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
