import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Scale, ShieldAlert, Cpu, Terminal } from 'lucide-react';
import { Footer } from './Footer';

export function Terms() {
  const { setRoute } = useRouteStore();

  return (
    <div
      style={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        minHeight: '100vh',
        background: 'rgba(2, 2, 5, 0.95)',
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
      <div style={{ maxWidth: '800px', width: '100%', padding: '0 8vw', flex: 1, marginBottom: '80px' }}>
        {/* Back Button */}
        <button
          onClick={() => setRoute('home')}
          style={{
            background: 'none',
            color: '#858599',
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
            e.currentTarget.style.boxShadow = '0 0 15px rgba(91, 76, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#858599';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <ArrowLeft size={14} /> Back to Nexus
        </button>

        {/* Header */}
        <div style={{ marginBottom: '48px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '32px' }}>
          <span
            style={{
              fontSize: '10px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#C9A84C',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Operational Framework // Legal Bounds
          </span>
          <h1
            style={{
              fontSize: 'calc(2.0rem + 1.2vw)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
              margin: '0 0 16px 0',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Terms of Accord
          </h1>
          <p style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', margin: 0 }}>
            REVISED CYCLES: 2026.05.24 // ARCHIVE 003-C
          </p>
        </div>

        {/* Content Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            fontSize: '15px',
            color: '#a3a3b8',
            lineHeight: 1.7,
          }}
        >
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '18px',
                color: '#ffffff',
                marginBottom: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Scale size={16} style={{ color: '#5B4CFF' }} /> 1. Meta Developer Terms Alignment
            </h2>
            <p>
              By establishing links to the Hnarayna MetaDev Engine, you declare adherence to the Meta Platforms, Inc. Developer Policies and Graph API Terms of Service. You are solely responsible for obtaining and maintaining valid credentials on developers.facebook.com.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '18px',
                color: '#ffffff',
                marginBottom: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Cpu size={16} style={{ color: '#C9A84C' }} /> 2. API Limits & Rate Compliance
            </h2>
            <p>
              Your Meta Developer Apps must operate within normal limits dictated by the Graph API.
            </p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                You may not utilize our auto-webhook registers to loop payloads or flood Graph API endpoints in a manner that triggers security bans.
              </li>
              <li>
                Inquiries, tokens, and payloads processed through Hnarayna must not contain malicious vectors or automated scripts targeting developers.facebook.com infrastructure.
              </li>
            </ul>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '18px',
                color: '#ffffff',
                marginBottom: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Terminal size={16} style={{ color: '#4CFFB4' }} /> 3. Credential Ownership & Responsibility
            </h2>
            <p>
              Hnarayna is a facilitator for Meta App configuration but does not own your credentials. Responsibility for securing your App Secret, Client Token, and system user access levels remains exclusively with you.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '18px',
                color: '#ffffff',
                marginBottom: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <ShieldAlert size={16} style={{ color: '#5B4CFF' }} /> 4. Disclaimers & Operational Limits
            </h2>
            <p>
              Our automated setups are provided "as-is." Hnarayna Ventures accepts no liability for pipeline downtime, token expiry, app review rejections, or account suspensions enacted by Meta Platforms, Inc.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
