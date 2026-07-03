import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Code, Settings, Cpu, Layers, HardDrive, BarChart } from 'lucide-react';
import { Footer } from './Footer';

export function ServicesPage() {
  const { setRoute } = useRouteStore();

  const services = [
    {
      title: 'SaaS Product Development',
      icon: <Layers size={24} style={{ color: '#5B4CFF' }} />,
      problem: 'Startups and enterprises struggle to build multi-tenant, secure, and commercially viable software systems that scale without massive operational friction.',
      approach: 'We design complete multi-tenant architectures from scratch, implementing robust authentication, secure database tenant separation, automated billing cycles (Stripe integration), and developer APIs.',
      tech: 'React, Node.js, TypeScript, PostgreSQL, Docker, AWS, Stripe.',
      outcome: 'A production-grade, highly-available SaaS platform ready to onboard thousands of users with zero manual intervention.',
      complexity: 'High // Architectural Level',
      client: 'SaaS Startups, B2B Businesses',
    },
    {
      title: 'Business Automation & Workflows',
      icon: <Settings size={24} style={{ color: '#C9A84C' }} />,
      problem: 'Organizations lose hundreds of hours weekly to manual database logging, disjointed spreadsheets, and manual email/WhatsApp alerts.',
      approach: 'We study your operations, identify bottlenecks, and map out secure automated pipelines that trigger database records, generate PDFs, and route instant notifications.',
      tech: 'Python, Express, PostgreSQL, Meta Graph API, Twilio, Redis.',
      outcome: '95% reduction in manual tracking, complete eliminations of human entry errors, and real-time operational dashboard metrics.',
      complexity: 'Medium to High // Automation Level',
      client: 'SMEs, Education Providers, Logistics',
    },
    {
      title: 'Custom Web & Mobile Applications',
      icon: <Code size={24} style={{ color: '#4CFFB4' }} />,
      problem: 'Off-the-shelf software solutions rarely fit unique operations, leading to forced workflows, vendor lock-in, and poor user adoption.',
      approach: 'We craft customized web portals and native/cross-platform mobile apps centered around user behavior, using premium design frameworks and responsive layouts.',
      tech: 'React, React Native, TypeScript, TailwindCSS, Node.js, Express.',
      outcome: 'High-adoption digital tools built specifically around your users, giving your business a unique competitive advantage.',
      complexity: 'Medium to High // Custom Client Level',
      client: 'Hotels, Healthcare, Retailers',
    },
    {
      title: 'Enterprise CRM & ERP Systems',
      icon: <HardDrive size={24} style={{ color: '#FF6B6B' }} />,
      problem: 'Commercial ERPs are bloated, expensive, and difficult to customize, while legacy systems create data silos across departments.',
      approach: 'We build custom CRM and ERP solutions tailored to your business vertical—such as our Coach CRM for educational institutions—integrating admissions, billing, and attendance tracking into a single panel.',
      tech: 'Next.js, Node.js, MongoDB, Redis, AWS, Twilio, WebSockets.',
      outcome: 'A single source of truth for your entire operation, offering real-time tracking, custom permission roles, and automated billing.',
      complexity: 'High // Enterprise Level',
      client: 'Coaching Institutes, Large Enterprises',
    },
    {
      title: 'Advanced API & Cloud Integrations',
      icon: <Cpu size={24} style={{ color: '#a855f7' }} />,
      problem: 'Integrating modern cloud endpoints with legacy systems or setting up complex third-party webhooks (e.g., Meta Developer App pipelines) can block engineering teams.',
      approach: 'We build robust, documented REST/GraphQL APIs and deploy secure webhook relay systems to sync external applications with internal databases seamlessly.',
      tech: 'GraphQL, REST APIs, AWS Lambda, Serverless, Docker, Meta Developer API.',
      outcome: 'Flawless third-party integrations with near-zero latency, automated retry mechanics, and instant sync updates.',
      complexity: 'Medium // System Integration Level',
      client: 'Engineering Teams, Modern Web Platforms',
    },
    {
      title: 'Analytics & Geofenced Systems',
      icon: <BarChart size={24} style={{ color: '#06b6d4' }} />,
      problem: 'Validating operations in the field—like verifying remote employee attendance or processing geolocation check-ins—is prone to spoofing and fraud.',
      approach: 'We engineer secure geolocation verification modules and integrate facial recognition models that authenticate physical presence without invading user privacy.',
      tech: 'Geolocation API, OpenCV, TensorFlow Lite, Python, AWS Rekognition.',
      outcome: 'Fraud-proof, automated field verification networks providing real-time geofenced dashboards and analytics.',
      complexity: 'High // Machine Learning & Geolocation',
      client: 'Field Agencies, Multi-location Companies',
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
            Capabilities // What We Build
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
            Engineering Services
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
            We don't sell hype or follow trends. We write high-quality custom code, architect scalable cloud backends, and configure automations that solve actual, measurable business bottlenecks.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            width: '100%',
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.01)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Header */}
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
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Core Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div>
                  <span style={{ color: '#FF6B6B', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>The Problem:</span>
                  <p style={{ color: '#a1a1aa', lineHeight: 1.5 }}>{service.problem}</p>
                </div>
                <div>
                  <span style={{ color: '#4CFFB4', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Approach:</span>
                  <p style={{ color: '#a1a1aa', lineHeight: 1.5 }}>{service.approach}</p>
                </div>
                <div>
                  <span style={{ color: '#C9A84C', fontFamily: "'JetBrains Mono', monospace", display: 'block', marginBottom: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Business Outcome:</span>
                  <p style={{ color: '#ffffff', fontWeight: 500, lineHeight: 1.5 }}>{service.outcome}</p>
                </div>
              </div>

              {/* Tech Stack & Metadata */}
              <div
                style={{
                  marginTop: 'auto',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '11px',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#555566' }}>Stack:</span>
                  <span style={{ color: '#ffffff' }}>{service.tech}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#555566' }}>Complexity:</span>
                  <span style={{ color: '#a1a1aa' }}>{service.complexity}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#555566' }}>Target:</span>
                  <span style={{ color: '#a1a1aa' }}>{service.client}</span>
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
