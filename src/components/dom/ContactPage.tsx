import React, { useState } from 'react';
import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, Send, ArrowRight, HelpCircle, FileText } from 'lucide-react';
import { Footer } from './Footer';

export function ContactPage() {
  const { setRoute } = useRouteStore();
  const [form, setForm] = useState({ name: '', email: '', company: '', type: 'SaaS', budget: '$15k - $50k', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', company: '', type: 'SaaS', budget: '$15k - $50k', details: '' });
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
        <div style={{ marginBottom: '56px' }}>
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
            Project Inquiry // Partnership
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
              background: 'linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Start a Consultation
          </h1>
          <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.6, maxWidth: '700px' }}>
            Tell us about the business challenges you need to solve. We review every inquiry directly with our engineering and product design leads to estimate scope and complexity.
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
                <FileText size={18} style={{ color: '#5B4CFF' }} /> Our Engagement Values
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}>Technical Depth First</strong>
                  <span style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.4, display: 'block', marginTop: '4px' }}>
                    We focus on creating optimized architectures, database normalization, and type-safe systems that run reliably under high load.
                  </span>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}>Active Product Ownership</strong>
                  <span style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.4, display: 'block', marginTop: '4px' }}>
                    Because we actively build and operate our own software products, we understand how to keep codebases maintainable for the long-term.
                  </span>
                </div>

                <div>
                  <strong style={{ display: 'block', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif", color: '#ffffff' }}>Clear Outcomes</strong>
                  <span style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.4, display: 'block', marginTop: '4px' }}>
                    No vague buzzwords. We build systems that automate operations, reduce processing lag, and generate concrete business metrics.
                  </span>
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
                <HelpCircle size={18} style={{ color: '#4CFFB4' }} /> Simple Scoping process
              </h2>
              <p style={{ fontSize: '13px', color: '#a1a1aa', lineHeight: 1.6, margin: 0 }}>
                Once we receive your inquiry, we review it with our technical lead and contact you within 48 hours to schedule a deep-dive call and deliver an initial scoping brief.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.01)',
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
                <h3 style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 8px 0' }}>Inquiry Logged</h3>
                <p style={{ fontSize: '13px', color: '#a1a1aa', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                  Thank you. We have received your project details and our team will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Full Name
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
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Work Email
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

                {/* Company Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
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

                {/* Project Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Project Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
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
                    <option value="SaaS">SaaS Product Development</option>
                    <option value="Custom Software">Custom Web/Mobile App</option>
                    <option value="Automation">Business Workflow Automation</option>
                    <option value="CRM-ERP">Tailored ERP or CRM System</option>
                    <option value="Consulting">Digital Consulting & Optimization</option>
                  </select>
                </div>

                {/* Budget Select */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
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
                    <option value="$5k - $15k">$5k - $15k</option>
                    <option value="$15k - $50k">$15k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>

                {/* Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                    Brief description of the challenge
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe what processes you want to automate, what products you want to build, or what integrations are required..."
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
                    background: 'linear-gradient(90deg, #5B4CFF, #4CFFB4)',
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
                  Submit Inquiry <ArrowRight size={14} />
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
