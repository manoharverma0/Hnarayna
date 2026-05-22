import React, { useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: 'Parent', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', email: '', company: 'Parent', details: '' });
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
            Chapter 04 // Horizon
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
            Enter the Event Horizon
          </h2>
          <p
            style={{
              fontSize: 'calc(0.85rem + 0.15vw)',
              fontFamily: "'Inter', sans-serif",
              color: '#858599',
              lineHeight: 1.6,
              margin: '0 0 32px 0',
            }}
            className="reveal-fade"
          >
            Whether you are launching a child company, seeking incubation for an active project, or want to collaborate with Hnarayna Labs, our gravitational pull is ready to accelerate your trajectory.
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              color: '#a3a3b8',
            }}
            className="reveal-fade"
          >
            <div>
              <span style={{ color: '#5B4CFF' }}>▸ LOCATION:</span> Orbiting Coordinate [0x8A9E]
            </div>
            <div>
              <span style={{ color: '#C9A84C' }}>▸ EMAIL:</span> gateway@hnarayna.ventures
            </div>
            <div>
              <span style={{ color: '#4CFFB4' }}>▸ NET:</span> hnarayna.ventures
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
              <h3 style={{ fontSize: '20px', color: '#ffffff', margin: '0 0 8px 0' }}>Transmission Confirmed</h3>
              <p style={{ fontSize: '13px', color: '#858599', fontFamily: "'Inter', sans-serif", margin: 0 }}>
                Your project parameters have been uploaded. We will align vector paths shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {/* Name */}
                <div style={{ flex: '1', minWidth: '180px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                    Identity / Name
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
                  <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                    Secure Email
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

              {/* Division Selection */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                  Target Alignment Vector
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
                  <option value="Parent">Hnarayna Ventures (General)</option>
                  <option value="AI">Aetheris AI (Artificial Intelligence)</option>
                  <option value="Cyber">Spectra Cyber (Information Security)</option>
                  <option value="Bio">Helix Bio (Bio-Computing)</option>
                </select>
              </div>

              {/* Project Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '10px', fontFamily: "'JetBrains Mono', monospace", color: '#858599', textTransform: 'uppercase' }}>
                  Project Parameters / Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Outline your tech project, idea, or collaboration parameters..."
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
                Establish Link <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
