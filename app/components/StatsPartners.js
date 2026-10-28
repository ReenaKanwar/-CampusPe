'use client';

const stats = [
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#ede9fe"/>
        <path d="M21 13C23.2 13 25 14.8 25 17C25 19.2 23.2 21 21 21C18.8 21 17 19.2 17 17C17 14.8 18.8 13 21 13Z" fill="#7c3aed" opacity="0.7"/>
        <path d="M12 29C12 25.7 16 23 21 23C26 23 30 25.7 30 29" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
        <path d="M26 16C27.7 16 29 17.3 29 19C29 20.7 27.7 22 26 22" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M30 27C31.7 27.5 33 28.8 33 30.3" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    number: '800+',
    label: 'Students',
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#dbeafe"/>
        <rect x="11" y="20" width="20" height="13" rx="1.5" fill="#1d4ed8" opacity="0.15"/>
        <rect x="11" y="20" width="20" height="13" rx="1.5" stroke="#1d4ed8" strokeWidth="1.5"/>
        <path d="M9 20L21 13L33 20" stroke="#1d4ed8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="17.5" y="26" width="7" height="7" rx="0.5" fill="#1d4ed8"/>
        <rect x="12.5" y="22" width="3.5" height="3.5" rx="0.3" fill="#1d4ed8" opacity="0.5"/>
        <rect x="26" y="22" width="3.5" height="3.5" rx="0.3" fill="#1d4ed8" opacity="0.5"/>
      </svg>
    ),
    number: '130+',
    label: 'colleges',
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#d1fae5"/>
        <rect x="12" y="17" width="18" height="14" rx="2" fill="#059669" opacity="0.15"/>
        <rect x="12" y="17" width="18" height="14" rx="2" stroke="#059669" strokeWidth="1.5"/>
        <path d="M16 17V15C16 13.3 17.3 12 19 12H23C24.7 12 26 13.3 26 15V17" stroke="#059669" strokeWidth="1.5"/>
        <line x1="12" y1="23" x2="30" y2="23" stroke="#059669" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="21" cy="23" r="2" fill="#059669"/>
      </svg>
    ),
    number: '100+',
    label: 'jobs & internships',
  },
  {
    icon: (
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
        <circle cx="21" cy="21" r="21" fill="#fef3c7"/>
        <path d="M21 11L23.5 17.5H30.5L24.9 21.5L27 28L21 24L15 28L17.1 21.5L11.5 17.5H18.5L21 11Z" fill="#f59e0b" opacity="0.3"/>
        <path d="M21 11L23.5 17.5H30.5L24.9 21.5L27 28L21 24L15 28L17.1 21.5L11.5 17.5H18.5L21 11Z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    number: '100%',
    label: 'Safe & Trusted',
  },
];

const partners = [
  {
    name: 'DPIIT #startupindia',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: 36, height: 36, background: '#1a3a6b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
            <path d="M10 2C8.5 2 7 2.5 6 3.5L4 5H3C2.4 5 2 5.4 2 6V7C2 7.6 2.4 8 3 8H4L5 9.5C5.5 10.5 6.5 11 7.5 11H10V13H8V15H12V13H10V11H12.5C13.5 11 14.5 10.5 15 9.5L16 8H17C17.6 8 18 7.6 18 7V6C18 5.4 17.6 5 17 5H16L14 3.5C13 2.5 11.5 2 10 2Z" fill="white"/>
          </svg>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '16px', color: '#1a3a6b', letterSpacing: '-0.3px' }}>DPIIT</div>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: 700 }}>#startupindia</div>
        </div>
      </div>
    ),
  },
  {
    name: 'GINSERV',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 22, height: 22, borderRadius: '50%', border: '2px solid white', background: 'transparent' }} />
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '18px', color: '#0ea5e9', letterSpacing: '1px' }}>GINSERV</div>
          <div style={{ fontSize: '10px', color: '#6b7280' }}>Nurturing Ventures</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Startup Karnataka',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: 40, height: 20, position: 'relative' }}>
          <svg viewBox="0 0 40 20" width="40" height="20">
            <polygon points="0,10 15,0 30,10 40,5" fill="#e53e3e"/>
            <polygon points="15,0 30,10 15,20" fill="#e53e3e" opacity="0.7"/>
          </svg>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: '15px', color: '#1a1a2e', letterSpacing: '1px' }}>STARTUP</div>
          <div style={{ fontWeight: 800, fontSize: '15px', color: '#1a1a2e', letterSpacing: '1px' }}>KARNATAKA</div>
        </div>
      </div>
    ),
  },
  {
    name: 'Radiant Info',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 800, color: '#e53e3e', writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', letterSpacing: '1px' }}>RADIANT</div>
          <div style={{ width: 18, height: 32, position: 'relative' }}>
            <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#e53e3e', position: 'absolute', top: 0 }} />
            <div style={{ width: 16, height: 16, background: '#e53e3e', position: 'absolute', bottom: 0, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
          </div>
        </div>
        <div style={{ fontWeight: 800, fontSize: '13px', color: '#e53e3e' }}>Info</div>
      </div>
    ),
  },
  {
    name: 'TalentSpot',
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid #4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f8' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="3" fill="#4f46e5"/>
            <circle cx="9" cy="3" r="1.5" fill="#4f46e5" opacity="0.6"/>
            <circle cx="9" cy="15" r="1.5" fill="#4f46e5" opacity="0.6"/>
            <circle cx="3" cy="9" r="1.5" fill="#4f46e5" opacity="0.6"/>
            <circle cx="15" cy="9" r="1.5" fill="#4f46e5" opacity="0.6"/>
          </svg>
        </div>
        <div style={{ fontWeight: 800, fontSize: '15px', color: '#1a1a2e' }}>TALENTSPOT</div>
      </div>
    ),
  },
];

export default function StatsPartners() {
  return (
    <section
      id="stats-partners"
      style={{
        background: '#ffffff',
        paddingTop: '48px',
        paddingBottom: '60px',
      }}
    >
      <div className="section-container">
        {/* Stats row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            marginBottom: '56px',
            padding: '28px 40px',
            borderRadius: '16px',
            background: '#f9fafb',
            border: '1px solid #e5e7eb',
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 20px',
                borderRight: i < stats.length - 1 ? '1px solid #e5e7eb' : 'none',
              }}
            >
              {stat.icon}
              <div>
                <div
                  style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#0f172a',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: 500 }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '15px', color: '#6b7280', fontWeight: 500 }}>
            Trusted by partners across India
          </p>
        </div>

        {/* Marquee */}
        <div
          style={{
            overflow: 'hidden',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div
            className="marquee-track"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '60px',
              width: 'max-content',
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  opacity: 0.85,
                  transition: 'opacity 0.2s',
                  cursor: 'pointer',
                  filter: 'grayscale(10%)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'grayscale(0%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.85';
                  e.currentTarget.style.filter = 'grayscale(10%)';
                }}
              >
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 16px !important;
          }
          .stats-grid > div:nth-child(2) {
            border-right: none !important;
          }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) {
            border-bottom: 1px solid #e5e7eb;
            padding-bottom: 16px !important;
            margin-bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
