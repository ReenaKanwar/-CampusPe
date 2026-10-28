'use client';

import Link from 'next/link';

const footerLinks = {
  Students: [
    { label: 'Explore Colleges', href: '/colleges' },
    { label: 'Find Opportunities', href: '/jobs' },
    { label: 'Internships', href: '/jobs?type=internship' },
    { label: 'Full-time Jobs', href: '/jobs?type=fulltime' },
    { label: 'Part-time & Gig', href: '/jobs?type=parttime' },
    { label: 'Application Tracker', href: '/tracker' },
  ],
  Colleges: [
    { label: 'List Your College', href: '/colleges/list' },
    { label: 'Admissions', href: '/colleges/admissions' },
    { label: 'Fee Collection', href: '/colleges/fees' },
    { label: 'Placements', href: '/colleges/placements' },
  ],
  Employers: [
    { label: 'Post a Job', href: '/employers/post' },
    { label: 'Find Talent', href: '/employers/talent' },
    { label: 'Campus Hiring', href: '/employers/campus' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Careers', href: '/careers' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Refund & Cancellation Policy', href: '/refund' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Grievance Redressal', href: '/grievance' },
    { label: 'Job & Internship Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/campuspe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M15.3 1H2.7C1.76 1 1 1.76 1 2.7V15.3C1 16.24 1.76 17 2.7 17H15.3C16.24 17 17 16.24 17 15.3V2.7C17 1.76 16.24 1 15.3 1ZM5.9 14H3.6V7H5.9V14ZM4.75 6.05C4 6.05 3.4 5.45 3.4 4.7C3.4 3.95 4 3.35 4.75 3.35C5.5 3.35 6.1 3.95 6.1 4.7C6.1 5.45 5.5 6.05 4.75 6.05ZM14.6 14H12.3V10.6C12.3 9.75 12.28 8.65 11.1 8.65C9.9 8.65 9.72 9.58 9.72 10.54V14H7.42V7H9.62V8.01H9.65C9.96 7.42 10.72 6.8 11.85 6.8C14.18 6.8 14.6 8.32 14.6 10.3V14Z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/campuspe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M9 1.44C11.16 1.44 11.42 1.45 12.27 1.49C15.18 1.62 16.38 2.84 16.51 5.73C16.55 6.58 16.56 6.84 16.56 9C16.56 11.16 16.55 11.42 16.51 12.27C16.38 15.16 15.18 16.38 12.27 16.51C11.42 16.55 11.16 16.56 9 16.56C6.84 16.56 6.58 16.55 5.73 16.51C2.82 16.38 1.62 15.16 1.49 12.27C1.45 11.42 1.44 11.16 1.44 9C1.44 6.84 1.45 6.58 1.49 5.73C1.62 2.83 2.83 1.62 5.73 1.49C6.58 1.45 6.84 1.44 9 1.44ZM9 0C6.8 0 6.52 0.01 5.66 0.05C1.9 0.23 0.23 1.9 0.05 5.66C0.01 6.52 0 6.8 0 9C0 11.2 0.01 11.48 0.05 12.34C0.23 16.1 1.9 17.77 5.66 17.95C6.52 17.99 6.8 18 9 18C11.2 18 11.48 17.99 12.34 17.95C16.1 17.77 17.77 16.09 17.95 12.34C17.99 11.48 18 11.2 18 9C18 6.8 17.99 6.52 17.95 5.66C17.77 1.9 16.1 0.23 12.34 0.05C11.48 0.01 11.2 0 9 0ZM9 4.38C6.7 4.38 4.82 6.26 4.82 8.56C4.82 10.86 6.7 12.74 9 12.74C11.3 12.74 13.18 10.86 13.18 8.56C13.18 6.26 11.3 4.38 9 4.38ZM9 11.24C7.53 11.24 6.32 10.03 6.32 8.56C6.32 7.09 7.53 5.88 9 5.88C10.47 5.88 11.68 7.09 11.68 8.56C11.68 10.03 10.47 11.24 9 11.24ZM13.35 3.12C12.8 3.12 12.35 3.57 12.35 4.12C12.35 4.67 12.8 5.12 13.35 5.12C13.9 5.12 14.35 4.67 14.35 4.12C14.35 3.57 13.9 3.12 13.35 3.12Z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/campuspe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M13.18 1.5H15.6L10.28 7.56L16.5 16.5H11.63L7.84 11.52L3.49 16.5H1.06L6.73 10.03L0.75 1.5H5.74L9.17 6.05L13.18 1.5ZM12.35 15.03H13.7L4.96 2.87H3.5L12.35 15.03Z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/campuspe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9.6V11H7.2V8.3H9.6V6.25C9.6 3.88 11.05 2.6 13.17 2.6C14.18 2.6 15.15 2.67 16 2.74V5.22H14.53C13.39 5.22 13.16 5.77 13.16 6.57V8.27H15.92L15.56 10.97H13.16V18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/916362606464',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M15.4 2.6C13.7 0.9 11.4 0 9 0C4.1 0 0 4.1 0 9C0 10.6 0.4 12.2 1.2 13.6L0 18L4.5 16.8C5.9 17.5 7.4 17.9 9 17.9C13.9 17.9 18 13.8 18 8.9C18 6.5 17.1 4.3 15.4 2.6ZM9 16.4C7.5 16.4 6.1 16 4.9 15.3L4.5 15.1L1.9 15.8L2.6 13.3L2.4 12.9C1.6 11.6 1.2 10.3 1.2 9C1.2 4.8 4.8 1.2 9 1.2C11 1.2 12.9 2 14.3 3.4C15.7 4.8 16.5 6.7 16.5 8.9C16.8 13.1 13.2 16.4 9 16.4ZM13.2 10.9C13 10.8 12 10.3 11.8 10.2C11.6 10.1 11.5 10.1 11.4 10.3C11.3 10.5 10.8 11 10.7 11.1C10.6 11.2 10.5 11.2 10.3 11.1C10.1 11 9.4 10.8 8.5 10C7.8 9.4 7.3 8.6 7.2 8.4C7.1 8.2 7.2 8.1 7.3 8C7.4 7.9 7.5 7.8 7.6 7.7C7.7 7.6 7.7 7.5 7.8 7.4C7.9 7.3 7.9 7.2 7.8 7.1C7.7 7 7.2 6 7 5.6C6.8 5.2 6.6 5.3 6.5 5.3H6.2C6.1 5.3 5.9 5.3 5.7 5.5C5.5 5.7 4.9 6.2 4.9 7.2C4.9 8.2 5.7 9.2 5.8 9.3C5.9 9.4 7.2 11.4 9.2 12.3C9.7 12.5 10.1 12.6 10.4 12.7C10.9 12.9 11.4 12.9 11.8 12.8C12.2 12.7 13.1 12.3 13.3 11.8C13.5 11.3 13.5 10.9 13.4 10.8C13.4 11 13.3 11 13.2 10.9Z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@campuspe',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
        <path d="M17.6 4.9C17.4 4.1 16.8 3.5 16 3.3C14.6 3 9 3 9 3C9 3 3.4 3 2 3.3C1.2 3.5 0.6 4.1 0.4 4.9C0.1 6.3 0 9 0 9C0 9 0.1 11.7 0.4 13.1C0.6 13.9 1.2 14.5 2 14.7C3.4 15 9 15 9 15C9 15 14.6 15 16 14.7C16.8 14.5 17.4 13.9 17.6 13.1C17.9 11.7 18 9 18 9C18 9 17.9 6.3 17.6 4.9ZM7.2 11.6V6.4L11.9 9L7.2 11.6Z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: 'linear-gradient(180deg, #eef2fa 0%, #e8eef8 100%)',
        paddingTop: '64px',
        paddingBottom: '0',
      }}
    >
      <div className="section-container">
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
            paddingBottom: '48px',
          }}
          className="footer-top-grid"
        >
          {/* Brand column */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '16px' }}>
              <svg width="140" height="36" viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M14 10L24 15L14 20L4 15L14 10Z" fill="#1a6cf8"/>
                  <path d="M8 17V23C8 23 11 26 14 26C17 26 20 23 20 23V17" stroke="#1a6cf8" strokeWidth="1.5" fill="none"/>
                  <circle cx="24" cy="15" r="1.5" fill="#1a6cf8"/>
                  <line x1="24" y1="16.5" x2="24" y2="22" stroke="#1a6cf8" strokeWidth="1.5"/>
                </g>
                <text x="32" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#1a6cf8">Campus</text>
                <text x="109" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#1a6cf8">Pe</text>
                <text x="32" y="38" fontFamily="Inter, sans-serif" fontSize="7.5" fill="#6b7280" letterSpacing="0.5">Connecting Students, Institutions &amp; Companies</text>
              </svg>
            </div>
            <p
              style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: 1.6,
                fontWeight: 500,
                marginBottom: '8px',
              }}
            >
              From choosing a college to finding your next opportunity.
            </p>
            <p
              style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: 1.6,
              }}
            >
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {/* Links grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
            }}
            className="footer-links-grid"
          >
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {category}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        style={{
                          fontSize: '13px',
                          color: '#6b7280',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#1a6cf8')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  {category === 'Legal' && (
                    <li>
                      <a
                        href="/policies"
                        style={{
                          fontSize: '13px',
                          color: '#1a6cf8',
                          textDecoration: 'none',
                          fontWeight: 600,
                        }}
                      >
                        View all policies →
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Policies note */}
        <div
          style={{
            padding: '16px 20px',
            background: 'rgba(219, 234, 254, 0.5)',
            border: '1px solid #bfdbfe',
            borderRadius: '12px',
            marginBottom: '32px',
            maxWidth: '300px',
            marginLeft: 'auto',
          }}
        >
          <p style={{ fontSize: '12.5px', color: '#374151', lineHeight: 1.5 }}>
            Separate user, institution and employer terms can live inside the full Policies page.
          </p>
        </div>

        {/* Contact bar */}
        <div
          style={{
            borderTop: '1px solid #d1d5db',
            borderBottom: '1px solid #d1d5db',
            padding: '16px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', gap: '20px' }}>
            <a
              href="mailto:contactus@campuspe.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13.5px',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a6cf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="2" stroke="#6b7280" strokeWidth="1.3"/>
                <path d="M1 5L8 9.5L15 5" stroke="#6b7280" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              contactus@campuspe.com
            </a>
            <a
              href="tel:+916362606464"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13.5px',
                color: '#374151',
                textDecoration: 'none',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a6cf8')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 1H6L7.5 4.5L5.5 5.5C6.5 7.5 8.5 9.5 10.5 10.5L11.5 8.5L15 10V13C15 14.1 14.1 15 13 15C6.4 15 1 9.6 1 3C1 1.9 1.9 1 3 1Z" stroke="#6b7280" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +91 6362606464
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#374151' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 0',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#6b7280' }}>
            © 2026 CampusPe Technologies Private Limited. All Rights Reserved.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#1a1a2e',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s, transform 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a6cf8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a2e';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-links-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .footer-links-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </footer>
  );
}
