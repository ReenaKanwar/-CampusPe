'use client';

export default function AppShowcase() {
  return (
    <section
      id="app-showcase"
      style={{
        background: '#ffffff',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      <div className="section-container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 800,
              color: '#1a6cf8',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            Checkout Our App Interface Look
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            CampusPe provides a personalized, AI-powered interface for every user. Students can
            explore trending courses, colleges can showcase their campus life, and companies can post
            job vacancies directly to a pool of qualified candidates.
          </p>
        </div>

        {/* Phone mockups */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '16px',
            perspective: '1200px',
          }}
          className="phones-row"
        >
          {[
            {
              title: 'Post a Job',
              scale: 0.88,
              offset: '-20px',
              bg: 'linear-gradient(135deg, #ede9fe 0%, #dbeafe 100%)',
              content: (
                <div style={{ padding: '16px 12px', height: '100%' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>Hi Amit Kumar</div>
                  <div style={{ background: '#1a6cf8', borderRadius: '8px', padding: '8px 10px', marginBottom: '10px' }}>
                    <p style={{ color: 'white', fontSize: '10px', fontWeight: 700 }}>Post a Job</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '9px' }}>Fill details to attract candidates</p>
                  </div>
                  {['Job Title', 'Job Type', 'Key Skills', 'Work Mode', 'Work Experience'].map((label, i) => (
                    <div key={i} style={{ marginBottom: '6px' }}>
                      <div style={{ fontSize: '8px', color: '#9ca3af', marginBottom: '2px' }}>{label}</div>
                      <div style={{ height: '22px', background: '#f3f4f6', borderRadius: '4px', border: '1px solid #e5e7eb' }} />
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: 'My Applications',
              scale: 1,
              offset: '0px',
              bg: 'linear-gradient(135deg, #dbeafe 0%, #ede9fe 100%)',
              content: (
                <div style={{ padding: '16px 12px', height: '100%' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#111827', marginBottom: '10px' }}>My Application</div>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                    {['Applied(5)', 'Shortlisted(2)', 'Rejected(1)'].map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '9px',
                          fontWeight: 600,
                          padding: '4px 6px',
                          borderRadius: '20px',
                          background: i === 0 ? '#1a6cf8' : '#f3f4f6',
                          color: i === 0 ? 'white' : '#6b7280',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {[
                    { company: 'Google', role: 'Software Engineer', match: '95%', color: '#4285f4', letter: 'G', date: '7 Jan 25 • Full-Time' },
                    { company: 'Flip', role: 'Full Stack Web Developer', match: '91%', color: '#FF6B35', letter: 'F', date: '30 Jan 25 • Full-Time' },
                    { company: 'Tokopedia', role: 'Backend Developer', match: '94%', color: '#00aa5b', letter: 'T', date: '25 Jan 25 • Part-Time' },
                    { company: 'Rukita', role: 'Frontend Developer', match: '92%', color: '#9333ea', letter: 'R', date: '29 Jan 25 • Part-Time' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 0',
                        borderBottom: '1px solid #f3f4f6',
                      }}
                    >
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: '6px',
                          background: item.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '8px',
                          fontWeight: 800,
                          color: 'white',
                          flexShrink: 0,
                        }}
                      >
                        {item.letter}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '9px', fontWeight: 600, color: '#111827' }}>{item.role}</div>
                        <div style={{ fontSize: '8px', color: '#9ca3af' }}>{item.date}</div>
                      </div>
                      <span
                        style={{
                          fontSize: '8px',
                          fontWeight: 700,
                          color: '#16a34a',
                          background: '#dcfce7',
                          padding: '1px 5px',
                          borderRadius: '8px',
                        }}
                      >
                        {item.match}
                      </span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              title: 'XYZ College',
              scale: 1,
              offset: '0px',
              bg: 'linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%)',
              content: (
                <div style={{ padding: '16px 12px', height: '100%' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1a6cf8', marginBottom: '4px' }}>XYZ College</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#111827', marginBottom: '10px' }}>Discover</div>
                  <div style={{ height: '28px', background: '#f3f4f6', borderRadius: '20px', marginBottom: '10px', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
                    <span style={{ fontSize: '9px', color: '#9ca3af' }}>Search name, email or courses...</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700 }}>Courses</span>
                    <span style={{ fontSize: '9px', color: '#1a6cf8' }}>+ Add Courses</span>
                  </div>
                  <div style={{ height: '80px', borderRadius: '8px', background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', marginBottom: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '8px' }}>
                    <span style={{ fontSize: '8px', background: '#f97316', color: 'white', padding: '2px 6px', borderRadius: '4px', width: 'fit-content', marginBottom: '4px' }}>🔥 Active Offer</span>
                  </div>
                  <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700 }}>B.Tech</span>
                      <span style={{ fontSize: '8px', color: '#16a34a', background: '#dcfce7', padding: '2px 6px', borderRadius: '8px' }}>10% OFF</span>
                    </div>
                    <div style={{ fontSize: '8px', color: '#6b7280' }}>Computer Science Engineering</div>
                  </div>
                </div>
              ),
            },
            {
              title: 'Hi Amit Kumar',
              scale: 0.88,
              offset: '-20px',
              bg: 'linear-gradient(135deg, #ede9fe 0%, #fce7f3 100%)',
              content: (
                <div style={{ padding: '16px 12px', height: '100%' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '12px' }}>Hi Amit Kumar</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, marginBottom: '8px' }}>Discover</div>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
                    {['Colleges', 'Jobs', 'Internships'].map((t, i) => (
                      <span key={i} style={{ fontSize: '8px', padding: '3px 6px', borderRadius: '12px', background: i === 0 ? '#dbeafe' : '#f3f4f6', color: i === 0 ? '#1d4ed8' : '#6b7280', fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                  {[0, 1].map((i) => (
                    <div key={i} style={{ background: '#f9fafb', borderRadius: '8px', padding: '8px', marginBottom: '8px' }}>
                      <div style={{ height: '40px', background: 'linear-gradient(135deg, #dbeafe, #ede9fe)', borderRadius: '6px', marginBottom: '6px' }} />
                      <div style={{ fontSize: '9px', fontWeight: 700 }}>Victory College</div>
                      <div style={{ fontSize: '8px', color: '#6b7280' }}>B & Tech Media • 4 years</div>
                    </div>
                  ))}
                </div>
              ),
            },
          ].map((phone, i) => (
            <div
              key={i}
              style={{
                transform: `scale(${phone.scale}) translateY(${phone.offset})`,
                transformOrigin: 'bottom center',
                flexShrink: 0,
              }}
            >
              {/* Phone frame */}
              <div
                style={{
                  width: '170px',
                  height: '340px',
                  borderRadius: '28px',
                  border: '8px solid #1a1a2e',
                  background: phone.bg,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)',
                  position: 'relative',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(26,108,248,0.25), inset 0 0 0 1px rgba(255,255,255,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.1)';
                }}
              >
                {/* Notch */}
                <div
                  style={{
                    width: '60px',
                    height: '16px',
                    background: '#1a1a2e',
                    borderRadius: '0 0 12px 12px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                {/* Status bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '4px 12px',
                    fontSize: '8px',
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  <span>9:41</span>
                  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
                    <span>●●●</span>
                    <span>WiFi</span>
                    <span>🔋</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ height: 'calc(100% - 40px)', overflow: 'hidden' }}>
                  {phone.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Handwritten note */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <svg
              width="200"
              height="50"
              viewBox="0 0 200 50"
              style={{ position: 'absolute', left: '-80px', top: '-5px', opacity: 0.6 }}
            >
              <path d="M20 30 Q50 10 80 25" stroke="#7c3aed" strokeWidth="1.5" fill="none" strokeDasharray="4,2"/>
            </svg>
            <p
              style={{
                fontSize: '16px',
                color: '#7c3aed',
                fontFamily: '"Dancing Script", cursive, Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 600,
              }}
            >
              A mix of colleges, jobs, internships and gigs — all in one place.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .phones-row {
            gap: 8px !important;
          }
        }
        @media (max-width: 640px) {
          .phones-row > div:first-child,
          .phones-row > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
