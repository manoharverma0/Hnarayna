import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Cpu, Shield, Terminal, Sparkles } from 'lucide-react';
import { Footer } from './Footer';

export function About() {
  const { setRoute } = useRouteStore();

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
      <div style={{ maxWidth: '900px', width: '100%', padding: '0 8vw', flex: 1, marginBottom: '80px' }}>
        {/* Back Button */}
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
            display: 'flex',
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

        {/* Title Section */}
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
            Engineering Group // Profile
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
            Engineering stable software that lasts
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
            Hnarayna is a software engineering and product studio built around a simple principle: we solve complex business problems through clean, robust technology. We don't sell marketing hype; we write code that drives operations.
          </p>
        </div>

        {/* Core Values / Focus */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '80px' }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontSize: '20px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '12px',
              color: '#ffffff',
            }}
          >
            Our Core Principles
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Value 1 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(91, 76, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#5B4CFF', marginBottom: '20px' }}>
                <Cpu size={32} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', marginBottom: '12px' }}>Engineers First</h3>
              <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>
                We believe in writing type-safe code, normalizing database relationships, and structuring cloud architectures to scale. Our developers understand the details of every API loop we write.
              </p>
            </div>

            {/* Value 2 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#C9A84C', marginBottom: '20px' }}>
                <Terminal size={32} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', marginBottom: '12px' }}>Real SaaS Experience</h3>
              <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>
                We actively build and manage our own software products, like Coach CRM. This gives us operational empathy, making us focus on maintainability, client support, and clean scaling.
              </p>
            </div>

            {/* Value 3 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(76, 255, 180, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#4CFFB4', marginBottom: '20px' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', marginBottom: '12px' }}>Value-Driven AI</h3>
              <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>
                AI is a tool, not our identity. We integrate biometric scanning and background removal algorithms only where they add concrete, measurable efficiency to your digital operations.
              </p>
            </div>
          </div>
        </div>

        {/* Operational Lifecycle */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(91, 76, 255, 0.03) 0%, rgba(76, 255, 180, 0.03) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '40px',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ color: '#5B4CFF' }}>
              <Sparkles size={24} />
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', margin: 0 }}>Partnership Standards</h2>
          </div>
          <p style={{ fontSize: '15px', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '28px' }}>
            We work with startups, SMEs, and large enterprises looking for technical excellence and dedicated long-term product support.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
            }}
          >
            <div>
              <span style={{ color: '#5B4CFF', display: 'block', marginBottom: '8px' }}>01 / PARTNER</span>
              • Tailored Scoping Sheets<br />
              • Defined Technical Milestones<br />
              • Regular Progress Demos
            </div>
            <div>
              <span style={{ color: '#C9A84C', display: 'block', marginBottom: '8px' }}>02 / BUILD</span>
              • Clean, Type-Safe Codebases<br />
              • Robust Local testing<br />
              • Modular Component Systems
            </div>
            <div>
              <span style={{ color: '#4CFFB4', display: 'block', marginBottom: '8px' }}>03 / SCALE</span>
              • Automatic Cloud CI/CD<br />
              • Telemetry Error Logs<br />
              • Long-Term Support
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
