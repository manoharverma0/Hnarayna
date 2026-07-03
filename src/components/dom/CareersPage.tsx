import { useRouteStore } from '../../stores/routeStore';
import { ArrowLeft, MapPin, Briefcase, Calendar } from 'lucide-react';
import { Footer } from './Footer';

export function CareersPage() {
  const { setRoute } = useRouteStore();

  const jobs = [
    {
      title: 'Senior Full Stack Engineer',
      type: 'Full-time // Remote or Hybrid',
      location: 'Indore, India / Remote',
      experience: '4+ Years',
      desc: 'We are looking for a product-minded engineer who can lead development on React/Next.js frontends and Node.js/PostgreSQL backends. You will touch custom client software and scale our owned products like Coach CRM.',
      skills: 'Next.js, TypeScript, PostgreSQL, Node.js, Redis, Docker, AWS.',
    },
    {
      title: 'Mobile Application Engineer',
      type: 'Full-time // Remote',
      location: 'Remote',
      experience: '2+ Years',
      desc: 'Build geofenced, responsive mobile client apps using React Native. You will integrate geolocation tracking, offline storage sync systems, and biometric face authentication layers.',
      skills: 'React Native, TypeScript, Android/iOS SDKs, Geofencing, Local DB.',
    },
    {
      title: 'Systems & Webhook Developer',
      type: 'Contract or Full-time',
      location: 'Remote',
      experience: '2+ Years',
      desc: 'Work on our advanced API integration layer, automation scripts, and serverless systems. You will build Twilio workflows and deploy Meta Graph API configurations.',
      skills: 'Python, Node.js, Express, AWS Lambda, Meta API, REST/GraphQL.',
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
            Careers // Join the Studio
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
            Work with Hnarayna
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
            We don't hire "prompt engineers." We hire builders who love clean syntax, sound logic, and creating stable software products that businesses use every day.
          </p>
        </div>

        {/* Jobs List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            width: '100%',
          }}
        >
          {jobs.map((job) => (
            <div
              key={job.title}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
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
              {/* Job Title & Metadata */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: '0 0 6px 0',
                    }}
                  >
                    {job.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '11px', fontFamily: "'JetBrains Mono', monospace", color: '#a1a1aa' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Briefcase size={12} /> {job.type}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {job.location}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> Exp: {job.experience}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setRoute('contact')}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '18px',
                    background: '#ffffff',
                    color: '#030303',
                    border: 'none',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#5B4CFF';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#030303';
                  }}
                >
                  Apply Now
                </button>
              </div>

              {/* Description */}
              <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5, margin: 0 }}>
                {job.desc}
              </p>

              {/* Skill Stack */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '16px', fontSize: '12px' }}>
                <span style={{ color: '#555566', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase', marginRight: '8px' }}>Key Skills:</span>
                <span style={{ color: '#ffffff', fontFamily: "'JetBrains Mono', monospace" }}>{job.skills}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
