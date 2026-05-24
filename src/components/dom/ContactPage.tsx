import React, { useState } from 'react';
import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Send, ArrowRight, ShieldCheck, Mail, MapPin, Globe } from 'lucide-react';
import { Footer } from './Footer';

export function ContactPage() {
  const { setRoute } = useRouteStore();
  const [form, setForm] = useState({ name: '', email: '', company: 'Meta-Auth', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', company: 'Meta-Auth', details: '' });
      }, 3000);
    }
  };

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
      <div style={{ maxWidth: '1000px', width: '100%', padding: '0 8vw', flex: 1, marginBottom: '80px' }}>
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

        {/* Title Section */}
        <div style={{ marginBottom: '56px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#C9A84C',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            Transmission Uplink // Meta Dev Console
          </span>
          <h1
            style={{
              fontSize: 'calc(2.2rem + 1.8vw)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              lineHeight: 1.0,
              color: '#ffffff',
              margin: '0 0 20px 0',
              fontFamily: "'Space Grotesk', sans-serif",
              background: 'linear-gradient(135deg, #ffffff 0%, #a3a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Deploy Integration
          </h1>
          <p style={{ fontSize: '16px', color: '#a3a3b8', lineHeight: 1.6, maxWidth: '700px' }}>
            Submit your integration parameters. Our automation engine can configure Meta App Credential Vaults, register webhook URLs, and test Graph API scopes.
          </p>
        </div>

        {/* Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Info Side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '18px',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <Globe size={18} style={{ color: '#5B4CFF' }} /> Integration Channels
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <MapPin size={18} style={{ color: '#858599', flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif" }}>Meta Business Partners</strong>
                    <span style={{ fontSize: '13px', color: '#858599' }}>Automated Developer Account Verification Nodes</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <MapPin size={18} style={{ color: '#858599', flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif" }}>WhatsApp Cloud Cluster</strong>
                    <span style={{ fontSize: '13px', color: '#858599' }}>High-Frequency Message Routing Sandbox</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <MapPin size={18} style={{ color: '#858599', flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif" }}>Webhook Relay Node</strong>
                    <span style={{ fontSize: '13px', color: '#858599' }}>Callback endpoints for Instagram & Facebook lead telemetry</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '18px',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <ShieldCheck size={18} style={{ color: '#4CFFB4' }} /> Telemetry Security
              </h2>
              <p style={{ fontSize: '13px', color: '#858599', lineHeight: 1.6, marginBottom: '16px' }}>
                All credentials (App Secret, Verification Tokens, System User Tokens) are encrypted locally prior to transmission, keeping your Meta developer assets safe.
              </p>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  background: '#070714',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  color: '#a3a3b8',
                  wordBreak: 'break-all',
                }}
              >
                CIPHER: AES-256-GCM + RSA-4096<br />
                CHANNEL: https://telemetry.hnarayna.ventures
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div
            style={{
              background: 'rgba(5, 5, 12, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.04)',
              borderRadius: '16px',
              padding: '40px',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 0',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(76, 255, 180, 0.1)',
                    border: '1px solid #4CFFB4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4CFFB4',
                    margin: '0 auto 24px auto',
                    animation: 'scaleIn 0.5s ease',
                  }}
                >
                  <Send size={18} />
                </div>
                <h3 style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 8px 0' }}>Configuration Transmitted</h3>
                <p style={{ fontSize: '13px', color: '#858599', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                  Your Meta Dev parameter setup has been initiated. Our engine will configure and verify callback hooks shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                    Identity / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                    Developer Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      transition: 'border-color 0.3s',
                    }}
                    className="form-input"
                  />
                </div>

                {/* Integration Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                    Meta Integration Channel
                  </label>
                  <select
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={{
                      background: '#0a0a14',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="Meta-Auth">Meta App Setup (Auth & Graph API)</option>
                    <option value="WhatsApp">WhatsApp Cloud Business API</option>
                    <option value="Webhooks">Webhook Telemetry Relay</option>
                    <option value="Quest-VR">Meta Quest / VR Ecosystem</option>
                  </select>
                </div>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                    Scope Parameters / Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide your App ID (if existing) or details of scopes required (e.g. public_profile, whatsapp_business_messaging, instagram_basic)..."
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      resize: 'none',
                      lineHeight: 1.5,
                      transition: 'border-color 0.3s',
                    }}
                    className="form-input"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    background: 'linear-gradient(90deg, #5B4CFF, #C9A84C)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px 28px',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 4px 15px rgba(91, 76, 255, 0.2)',
                  }}
                  className="submit-btn"
                >
                  Configure Channels <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
