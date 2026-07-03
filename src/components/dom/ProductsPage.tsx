import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, BookOpen, Smartphone, ShieldCheck, UserCheck, Activity } from 'lucide-react';
import { Footer } from './Footer';

export function ProductsPage() {
  const { setRoute } = useRouteStore();

  const products = [
    {
      title: 'Coach CRM',
      subtitle: 'Educational Institute Management Platform',
      icon: <BookOpen size={24} style={{ color: '#5B4CFF' }} />,
      desc: 'A full-stack, multi-tenant CRM designed for small-to-medium coaching institutes in India (50–500 students). It consolidates student leads, admissions processing, automated batch fees, attendance records, test reports, and parent notifications.',
      features: [
        'Multi-tenant role architecture (Super Admin, Staff, Teachers, Parents)',
        'Automated billing, invoicing, and unpaid fee reminders',
        'WhatsApp Automation for alerts, attendance updates, and fee reports',
        'Built-in Parent Portal for real-time grade & attendance reviews',
      ],
      metrics: [
        { label: 'Active Deployments', val: '24+ Institutes' },
        { label: 'Enrolled Students', val: '6,200+' },
        { label: 'WhatsApp Alerts Sent', val: '120k+/month' },
      ],
      tech: 'React, Vite, Node.js, Express, MongoDB, Twilio API, AWS S3.',
    },
    {
      title: 'Geo-Location & Facial Attendance',
      subtitle: 'Spam-proof Field Employee Check-In System',
      icon: <UserCheck size={24} style={{ color: '#4CFFB4' }} />,
      desc: 'A mobile-first verification engine that guarantees field worker check-in validity. It combines device-level GPS coordinate verification against strict corporate geofences with facial verification to eliminate proxy attendance.',
      features: [
        'Real-time GPS geofence locking with spoofing protection',
        'Device-side neural networks for facial authentication',
        'Muted fallback offline mode caching updates locally',
        'HR dashboard displaying automated payroll integration files',
      ],
      metrics: [
        { label: 'Attendance Verified', val: '98,400+ entries' },
        { label: 'Average Verify Time', val: '1.2 seconds' },
        { label: 'Location Spoofs Blocked', val: '430+' },
      ],
      tech: 'React Native, TensorFlow Lite, OpenCV, Node.js, PostgreSQL.',
    },
    {
      title: 'Hotel Booking Platform',
      subtitle: 'Property Management & Direct Booking Engine',
      icon: <Smartphone size={24} style={{ color: '#C9A84C' }} />,
      desc: 'A direct booking portal and back-office engine designed for independent hotel chains. It coordinates room inventory, room check-in logs, cleaning schedules, and process payments without relying on commission-heavy third parties.',
      features: [
        'Instant direct booking calendar with real-time rate adjustments',
        'Custom dashboard for Front Desk, Housekeeping, and Management',
        'Flexible billing with instant receipt generator',
        'Local tax compliance modules pre-integrated',
      ],
      metrics: [
        { label: 'Direct Bookings Processed', val: '14,200+' },
        { label: 'Commission Savings', val: '18% average' },
        { label: 'Inventory Sync Speed', val: '< 500ms' },
      ],
      tech: 'Next.js, TailwindCSS, Express, MongoDB, Stripe, Redis cache.',
    },
    {
      title: 'Passport Photo Maker',
      subtitle: 'Automated Image Alignment & Resize Tool',
      icon: <ShieldCheck size={24} style={{ color: '#FF6B6B' }} />,
      desc: 'An internal and customer-facing utility that automates passport and visa photo generation. It crops, centers, changes background colors, and alignments according to official international consulate guidelines.',
      features: [
        'AI background detection and auto-swap (white, blue, light grey)',
        'Biometric face cropping guidelines conforming to ICAO standards',
        'Automated printable grid page layout generation (4x6, A4 sheets)',
        'Zero metadata retention option for maximum customer privacy',
      ],
      metrics: [
        { label: 'Photos Processed', val: '320,000+' },
        { label: 'Template Compliance', val: '100% (ICAO & US Gov)' },
        { label: 'Processing Speed', val: '0.8s / image' },
      ],
      tech: 'React, Pillow, Python (OpenCV, MediaPipe), AWS Lambda.',
    },
    {
      title: 'MetaDev Flow',
      subtitle: 'Webhook Relay & Graph API Token Manager',
      icon: <Activity size={24} style={{ color: '#06b6d4' }} />,
      desc: 'A robust utility built for developers managing Meta Developer App integrations. It maps webhook callback signals (WhatsApp, Instagram, Facebook leads) into local database records, renewing tokens automatically.',
      features: [
        'One-click WhatsApp & Instagram webhook provisioning',
        'Secure token vaulting with client-controlled local decryption keys',
        'Graph API token auto-renewal triggers',
        'Live logging stream showing webhook failures & retry actions',
      ],
      metrics: [
        { label: 'Meta Apps Connected', val: '1,420+' },
        { label: 'Webhook Relay Latency', val: '12ms' },
        { label: 'Token Expiry Failures', val: '0% (Auto-renewed)' },
      ],
      tech: 'React, Node.js, Meta Graph API, Twilio, Redis, TLS Tunneling.',
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
            Product Suite // Real Solutions
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
            Our Software Products
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
            We don't just build code for clients. We design, launch, and operate our own software products, giving us first-hand experience in scaling systems and managing real user cohorts.
          </p>
        </div>

        {/* Products List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            width: '100%',
          }}
        >
          {products.map((product) => (
            <div
              key={product.title}
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
              {/* Logo + Titles */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {product.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: 0,
                    }}
                  >
                    {product.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '13px',
                      color: '#a1a1aa',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {product.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '15px',
                  color: '#a1a1aa',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {product.desc}
              </p>

              {/* Features and metrics split */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '32px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  paddingTop: '24px',
                }}
              >
                {/* Features */}
                <div>
                  <h4
                    style={{
                      fontSize: '12px',
                      fontFamily: "'JetBrains Mono', monospace",
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '16px',
                    }}
                  >
                    Core Features
                  </h4>
                  <ul
                    style={{
                      paddingLeft: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '13px',
                      color: '#a1a1aa',
                      lineHeight: 1.5,
                    }}
                  >
                    {product.features.map((feature, idx) => (
                      <li key={idx}>
                        <strong style={{ color: '#ffffff' }}>{feature.split(':')[0]}:</strong>
                        {feature.substring(feature.indexOf(':') + 1)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <h4
                      style={{
                        fontSize: '12px',
                        fontFamily: "'JetBrains Mono', monospace",
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '16px',
                      }}
                    >
                      Active Metrics
                    </h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                      {product.metrics.map((metric) => (
                        <div key={metric.label}>
                          <span style={{ fontSize: '10px', color: '#555566', fontFamily: "'JetBrains Mono', monospace", display: 'block', textTransform: 'uppercase' }}>{metric.label}</span>
                          <span style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', fontFamily: "'Space Grotesk', sans-serif" }}>{metric.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '10px', color: '#555566', fontFamily: "'JetBrains Mono', monospace", display: 'block', textTransform: 'uppercase', marginBottom: '6px' }}>Stack:</span>
                    <span style={{ fontSize: '12px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa' }}>{product.tech}</span>
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
