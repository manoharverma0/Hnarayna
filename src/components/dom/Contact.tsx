import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'SaaS', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', type: 'SaaS', details: '' });
      }, 3000);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        position: 'relative',
        zIndex: 2,
        padding: '8vw 8vw',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {/* Left Side: Text Details */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '500px' }}>
          <span
            style={{
              fontSize: '11px',
              fontFamily: "'JetBrains Mono', monospace",
              color: '#5B4CFF',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              display: 'block',
              marginBottom: '8px',
            }}
            className="reveal-fade"
          >
            Chapter 04 // Consultation
          </span>
          <h2
            style={{
              fontSize: 'calc(1.8rem + 2vw)',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
              lineHeight: 1.0,
              color: '#ffffff',
              margin: '0 0 24px 0',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
            className="reveal-fade"
          >
            Start a project
          </h2>
          <p
            style={{
              fontSize: 'calc(0.85rem + 0.15vw)',
              fontFamily: "'Inter', sans-serif",
              color: '#a1a1aa',
              lineHeight: 1.6,
              margin: '0 0 32px 0',
            }}
            className="reveal-fade"
          >
            Let's turn your product ideas into reliable engineering. We work with founders and operations teams to scope, design, and deploy custom software.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: '#a1a1aa',
            }}
            className="reveal-fade"
          >
            <div>
              <span style={{ color: '#5B4CFF' }}>▸ LOCATION:</span> Indore, India / Remote
            </div>
            <div>
              <span style={{ color: '#C9A84C' }}>▸ EMAIL:</span> vermanikhil03278@gmail.com
            </div>
            <div>
              <span style={{ color: '#4CFFB4' }}>▸ HUB:</span> hnarayna.space
            </div>
          </div>
        </div>

        {/* Right Side: Tech Inquiry Form */}
        <div
          className="reveal-fade"
          style={{
            flex: '1.2',
            minWidth: '320px',
            maxWidth: '520px',
            background: 'rgba(5, 5, 12, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '16px',
            padding: '40px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            pointerEvents: 'auto', // enable interaction
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
              <h3 style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 8px 0' }}>Inquiry Received</h3>
              <p style={{ fontSize: '13px', color: '#a1a1aa', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                We have logged your parameters. Our engineering lead will get in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {/* Name */}
                <div style={{ flex: '1', minWidth: '180px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                <div style={{ flex: '1', minWidth: '180px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
                    border: '1px solid rgba(255, 255, 255, 0.06)',
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
                  <option value="Consulting">Digital Consulting & Support</option>
                </select>
              </div>

              {/* Project Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa', textTransform: 'uppercase' }}>
                  Brief description of the challenge
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline the operational processes, custom app features, or dashboard parameters you need..."
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
                  id="contact-details-field"
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
  );
}
