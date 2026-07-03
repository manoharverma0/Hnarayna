import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Compass, PenTool, Terminal, ShieldAlert, CloudLightning, Activity } from 'lucide-react';
import { Footer } from './Footer';

export function ProcessPage() {
  const { setRoute } = useRouteStore();

  const steps = [
    {
      step: '01',
      title: 'Scoping & Product Strategy',
      icon: <Compass size={22} style={{ color: '#5B4CFF' }} />,
      desc: 'We map out your business workflow, identify operational bottlenecks, and design the technical stack before writing a single line of code. No guesswork.',
      details: 'Product scoping sheet, user journey diagrams, security parameters definitions, database structure drafts.',
    },
    {
      step: '02',
      title: 'UI/UX Design & Prototyping',
      icon: <PenTool size={22} style={{ color: '#C9A84C' }} />,
      desc: 'We design high-fidelity layouts based on modern SaaS guidelines (Stripe, Linear level). We center every animation and click path around user ease-of-use.',
      details: 'Figma prototypes, component system mapping, typography hierarchies, mobile response layouts.',
    },
    {
      step: '03',
      title: 'Agile Engineering Cycles',
      icon: <Terminal size={22} style={{ color: '#4CFFB4' }} />,
      desc: 'Our senior developers write clean, modular, and type-safe code. We use TypeScript and robust backend runtimes to ensure your system behaves reliably under load.',
      details: 'Git branching setups, daily compilation tests, secure environment variables vaulting, API endpoint definitions.',
    },
    {
      step: '04',
      title: 'Verification & QA Testing',
      icon: <ShieldAlert size={22} style={{ color: '#FF6B6B' }} />,
      desc: 'We run security checks, cross-browser compatibility tests, and API load testing to make sure the software is production-ready.',
      details: 'End-to-end user tests, load capacity testing, environment security configurations, dependency upgrades.',
    },
    {
      step: '05',
      title: 'Deployment & Launch',
      icon: <CloudLightning size={22} style={{ color: '#06b6d4' }} />,
      desc: 'We provision optimized cloud servers (AWS, GCP, Vercel) and establish automatic CI/CD deployment hooks so updates roll out seamlessly.',
      details: 'TLS certificates configuration, CDN caching setup, active database backups configuration, log routing.',
    },
    {
      step: '06',
      title: 'Support & Telemetry Monitoring',
      icon: <Activity size={22} style={{ color: '#a855f7' }} />,
      desc: 'We monitor production traffic, watch system limits, resolve user telemetry issues, and scale infrastructure as your business expands.',
      details: 'Error logger dashboards, automated scaling groups, periodic performance audits, technical consultancy.',
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
            Engineering Flow // Execution
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
            Our Development Process
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
            Building software should not be a black box. We follow a strict, transparent engineering pipeline that keeps projects on schedule and ensures high-performance codebase delivery.
          </p>
        </div>

        {/* Process Steps */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width: '100%',
          }}
        >
          {steps.map((step) => (
            <div
              key={step.step}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                alignItems: 'flex-start',
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
              {/* Step indicator */}
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#555566',
                  paddingTop: '6px',
                }}
              >
                {step.step}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {step.icon}
              </div>

              {/* Details text */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>
                  {step.desc}
                </p>
                <div style={{ marginTop: '8px', fontSize: '12px' }}>
                  <span style={{ color: '#555566', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginRight: '8px' }}>Deliverables:</span>
                  <span style={{ color: '#ffffff', fontFamily: "'Inter', sans-serif" }}>{step.details}</span>
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
