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
      <div style={{ maxWidth: '900px', width: '100%', padding: '0 8vw', flex: 1, marginBottom: '80px' }}>
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
            Product Suite // Meta Dev Engine
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
              background: 'linear-gradient(135deg, #ffffff 0%, #a3a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meta Developer App Creation Engine
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#a3a3b8',
              lineHeight: 1.6,
              maxWidth: '750px',
              fontWeight: 400,
            }}
          >
            Hnarayna MetaDev is a premium developer tool built to automate the creation, authorization, and deployment of Meta Developer Apps. Skip the complex configurations of developers.facebook.com and instantiate your integrations in one click.
          </p>
        </div>

        {/* Feature Grid */}
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
            Meta Integration Pipelines
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {/* Feature 1 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(91, 76, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#5B4CFF', marginBottom: '20px' }}>
                <Cpu size={32} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', marginBottom: '12px' }}>One-Click App Init</h3>
              <p style={{ fontSize: '14px', color: '#858599', lineHeight: 1.6 }}>
                Instantly trigger Meta App creation (Business, Consumer, or Gaming templates). Automatically register your App ID and securely download the generated credentials.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#C9A84C', marginBottom: '20px' }}>
                <Terminal size={32} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', marginBottom: '12px' }}>Webhook Automation</h3>
              <p style={{ fontSize: '14px', color: '#858599', lineHeight: 1.6 }}>
                Automatically deploy secure, TLS-certified webhook servers. Register callback URLs and subscription fields (messages, feed, leadgen) with Meta in seconds.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '16px',
                padding: '32px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(76, 255, 180, 0.2)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ color: '#4CFFB4', marginBottom: '20px' }}>
                <Shield size={32} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', marginBottom: '12px' }}>Credential Vaulting</h3>
              <p style={{ fontSize: '14px', color: '#858599', lineHeight: 1.6 }}>
                Keep your Meta App Secret, Client Token, and System User Access Tokens locked under client-side, quantum-resistant encryption parameters.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Dashboard Guide */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(91, 76, 255, 0.03) 0%, rgba(201, 168, 76, 0.03) 100%)',
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
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '20px', margin: 0 }}>Operational Lifecycle</h2>
          </div>
          <p style={{ fontSize: '15px', color: '#a3a3b8', lineHeight: 1.6, marginBottom: '28px' }}>
            Our console guides you from initial Meta Developer registration through full Graph API production release.
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
              <span style={{ color: '#5B4CFF', display: 'block', marginBottom: '8px' }}>01 / INITIALIZE</span>
              • Connect Meta Dev Profile<br />
              • Select Target API Type<br />
              • Spin Up App Blueprint
            </div>
            <div>
              <span style={{ color: '#C9A84C', display: 'block', marginBottom: '8px' }}>02 / CONFIGURE</span>
              • Auto-Generate Webhooks<br />
              • Enable Graph API Scopes<br />
              • Verify SSL Callbacks
            </div>
            <div>
              <span style={{ color: '#4CFFB4', display: 'block', marginBottom: '8px' }}>03 / PRODUCTION</span>
              • Request App Review<br />
              • Switch to Live Mode<br />
              • Monitor System Limits
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
