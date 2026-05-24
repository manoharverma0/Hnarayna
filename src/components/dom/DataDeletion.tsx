import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Trash2, Mail, Settings, ShieldCheck } from 'lucide-react';
import { Footer } from './Footer';

export function DataDeletion() {
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
              color: '#FF6B6B',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            User rights // data control
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
            Data Deletion
          </h1>
          <p style={{ fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', margin: 0 }}>
            EFFECTIVE CYCLES: 2026.05.24 // VERSION 1.0.0
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
          {/* Intro */}
          <p>
            If you want your data removed from our application, you can submit a deletion request using any of the methods below. We are committed to processing your request promptly and securely.
          </p>

          {/* Section 1: Email Request */}
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
              <Mail size={16} style={{ color: '#5B4CFF' }} /> 1. Submit a Deletion Request via Email
            </h2>
            <p>Follow these steps to request data removal directly:</p>
            <div
              style={{
                marginTop: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                { step: '01', label: 'Send an email to', value: 'vermanikhil03278@gmail.com', highlight: true },
                { step: '02', label: 'Use the subject line', value: '"Data Deletion Request"', highlight: false },
                { step: '03', label: 'Include your', value: 'registered email address or account ID', highlight: false },
              ].map(({ step, label, value, highlight }) => (
                <div
                  key={step}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '16px 20px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      color: '#5B4CFF',
                      letterSpacing: '1px',
                      paddingTop: '2px',
                      minWidth: '24px',
                    }}
                  >
                    {step}
                  </span>
                  <span>
                    {label}{' '}
                    {highlight ? (
                      <a
                        href="mailto:vermanikhil03278@gmail.com"
                        style={{
                          color: '#5B4CFF',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '13px',
                          textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                        onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                      >
                        {value}
                      </a>
                    ) : (
                      <strong style={{ color: '#ffffff' }}>{value}</strong>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: Processing Time */}
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
              <ShieldCheck size={16} style={{ color: '#4CFFB4' }} /> 2. Processing Timeline
            </h2>
            <div
              style={{
                padding: '20px 24px',
                borderRadius: '10px',
                background: 'rgba(76, 255, 180, 0.04)',
                border: '1px solid rgba(76, 255, 180, 0.15)',
              }}
            >
              <p style={{ margin: 0 }}>
                After receiving your request, we will permanently delete your account data within{' '}
                <strong style={{ color: '#4CFFB4' }}>7 business days</strong>. You will receive a confirmation email once the deletion is complete.
              </p>
            </div>
          </section>

          {/* Section 3: Meta / Facebook */}
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
              <Settings size={16} style={{ color: '#C9A84C' }} /> 3. Revoking Meta / Facebook App Access
            </h2>
            <p>
              If you logged in using <strong style={{ color: '#ffffff' }}>Facebook</strong> or{' '}
              <strong style={{ color: '#ffffff' }}>Instagram</strong>, you can also remove app permissions directly from your Meta account settings:
            </p>
            <a
              href="https://www.facebook.com/settings?tab=applications"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '14px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'rgba(91, 76, 255, 0.08)',
                border: '1px solid rgba(91, 76, 255, 0.25)',
                color: '#5B4CFF',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                textDecoration: 'none',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(91, 76, 255, 0.15)';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(91, 76, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(91, 76, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              facebook.com/settings?tab=applications ↗
            </a>
          </section>

          {/* Section 4: Contact */}
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
              <Trash2 size={16} style={{ color: '#FF6B6B' }} /> 4. Contact
            </h2>
            <p>
              For any further questions regarding your data or the deletion process, reach out to us directly at{' '}
              <a
                href="mailto:vermanikhil03278@gmail.com"
                style={{
                  color: '#5B4CFF',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                vermanikhil03278@gmail.com
              </a>
              . We are committed to responding within 48 hours.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
