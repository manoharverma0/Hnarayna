import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Lock, Eye, FileText, CheckCircle } from 'lucide-react';
import { Footer } from './Footer';

export function PrivacyPolicy() {
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
            border: 'none',
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
              color: '#4CFFB4',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Security protocol // legal compliance
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
            Privacy Directive
          </h1>
          <p style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', margin: 0 }}>
            EFFECTIVE CYCLES: 2026.05.24 // VERSION 2.0.1
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
              <Lock size={16} style={{ color: '#5B4CFF' }} /> 1. Meta Developer App Token Protocol
            </h2>
            <p>
              Hnarayna Ventures processes credentials and telemetry files strictly necessary to configure and deploy Meta Developer Apps. We operate within compliance criteria of Meta Platforms, Inc.
            </p>
            <ul style={{ paddingLeft: '20px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>
                <strong>App Secrets & Client Tokens:</strong> Saved locally in browser storage or encrypted dynamically in our secure vaults using client-managed keys. We never inspect or store plain-text keys on central databases.
              </li>
              <li>
                <strong>Graph API Telemetry:</strong> Logged parameters containing request scopes (e.g., whatsapp_business_messaging, instagram_basic) and rate limit indicators to facilitate performance tuning.
              </li>
              <li>
                <strong>Relayed Webhook Payloads:</strong> Webhook signals (WhatsApp message updates, Facebook Lead Ads JSONs) are routed with instant TLS tunneling and processed in-memory. Hnarayna does not retain webhook logs unless specifically configured by the client developer.
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
              <Eye size={16} style={{ color: '#C9A84C' }} /> 2. Processing & Security Measures
            </h2>
            <p>
              Meta Dev credentials and webhook logs are transmitted exclusively over secure HTTPS channels and subjected to periodic rotation audits. 
            </p>
            <p style={{ marginTop: '12px' }}>
              We do not share your Graph API telemetry, application client configurations, or Meta credentials with external data aggregates. Telemetry exists solely to maintain connection up-time and auto-verify webhooks with developers.facebook.com endpoints.
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
              <FileText size={16} style={{ color: '#4CFFB4' }} /> 3. Developer Portal Analytics
            </h2>
            <p>
              Our dashboard stores local session variables to preserve active Meta App IDs, current scopes, and styling parameters. We do not inject user tracking SDKs or track your activity across other websites.
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
              <CheckCircle size={16} style={{ color: '#5B4CFF' }} /> 4. Credential De-Provisioning
            </h2>
            <p>
              Developers can de-authorize Hnarayna at any time. Simply use the de-provisioning portal in the dashboard to purge all cached keys, or transmit a signed request to <span style={{ color: '#5B4CFF', fontFamily: "'JetBrains Mono', monospace" }}>gateway@hnarayna.ventures</span>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
