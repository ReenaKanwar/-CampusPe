'use client';

import { useState } from 'react';

// Icons as SVG components
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="11" cy="11" r="11" fill="#25D366"/>
    <path d="M15.8 13.8c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.1-.3.2-.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C5.3 7.1 4.8 7.9 4.8 9.5c0 1.6 1.1 3.1 1.3 3.3.2.2 2.2 3.4 5.4 4.8 3.2 1.3 3.2.9 3.7.8.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3l.2.5z" fill="white"/>
  </svg>
);

const RobotIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="4" y="7" width="14" height="12" rx="2" fill="#3b82f6" opacity="0.15"/>
    <rect x="4" y="7" width="14" height="12" rx="2" stroke="#3b82f6" strokeWidth="1.5"/>
    <circle cx="8.5" cy="12" r="1.5" fill="#3b82f6"/>
    <circle cx="13.5" cy="12" r="1.5" fill="#3b82f6"/>
    <path d="M9 15.5h4" stroke="#3b82f6" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M11 7V4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="11" cy="3.5" r="1" fill="#3b82f6"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M11 2L4 11h6l-1 7 7-9h-6l1-7z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="0.5" strokeLinejoin="round"/>
  </svg>
);

const CollegeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#e0e7ff"/>
    <rect x="10" y="16" width="16" height="12" rx="1" fill="#4f46e5" opacity="0.15"/>
    <rect x="10" y="16" width="16" height="12" rx="1" stroke="#4f46e5" strokeWidth="1.5"/>
    <path d="M8 16L18 10L28 16" stroke="#4f46e5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="15" y="22" width="6" height="6" rx="0.5" fill="#4f46e5"/>
    <rect x="11" y="18" width="3" height="3" rx="0.3" fill="#4f46e5" opacity="0.5"/>
    <rect x="22" y="18" width="3" height="3" rx="0.3" fill="#4f46e5" opacity="0.5"/>
  </svg>
);

const GradCapIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#dbeafe"/>
    <path d="M18 11L27 16L18 21L9 16L18 11Z" fill="#1d4ed8"/>
    <path d="M13 18.5V23C13 23 15.5 26 18 26C20.5 26 23 23 23 23V18.5" stroke="#1d4ed8" strokeWidth="1.5" fill="none"/>
    <circle cx="27" cy="16" r="1.5" fill="#1d4ed8"/>
    <line x1="27" y1="17.5" x2="27" y2="22" stroke="#1d4ed8" strokeWidth="1.5"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="18" fill="#dbeafe"/>
    <rect x="10" y="16" width="16" height="11" rx="2" fill="#1d4ed8" opacity="0.15"/>
    <rect x="10" y="16" width="16" height="11" rx="2" stroke="#1d4ed8" strokeWidth="1.5"/>
    <path d="M14 16V14C14 12.9 14.9 12 16 12H20C21.1 12 22 12.9 22 14V16" stroke="#1d4ed8" strokeWidth="1.5"/>
    <line x1="10" y1="21" x2="26" y2="21" stroke="#1d4ed8" strokeWidth="1.2" opacity="0.5"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 6, flexShrink: 0 }}>
    <path d="M2.5 7L5.5 10L11.5 4" stroke="#1a6cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Floating card components
const WhatsAppCard = () => (
  <div
    className="card"
    style={{
      padding: '14px 18px',
      maxWidth: '220px',
      animation: 'float 3s ease-in-out infinite',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
      <WhatsAppIcon />
      <span style={{ fontWeight: 700, fontSize: '14px', color: '#25D366' }}>WhatsApp Alert</span>
    </div>
    <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', marginBottom: '4px' }}>
      Get notified on whatsapp
    </p>
    <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.4 }}>
      You&apos;ll get all important updates on your whatsapp
    </p>
  </div>
);

const ResumeBuilderCard = () => (
  <div
    className="card"
    style={{
      padding: '14px 18px',
      maxWidth: '220px',
      border: '1.5px solid #ddd6fe',
      animation: 'float 3s ease-in-out infinite 1.5s',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
      <BoltIcon />
      <span style={{ fontWeight: 700, fontSize: '14px', color: '#7c3aed' }}>Resume Builder</span>
    </div>
    <p style={{ fontWeight: 600, fontSize: '13px', color: '#111827', marginBottom: '4px' }}>
      Build Your Resume
    </p>
    <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.4 }}>
      Our resume builder gives you dynamic options to build better &amp; faster resume that got you hired
    </p>
  </div>
);

const StudentsMatchedCard = () => (
  <div
    className="card"
    style={{
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      maxWidth: '260px',
    }}
  >
    {/* Avatar stack */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {['#4f46e5', '#0ea5e9', '#6366f1'].map((color, i) => (
        <div
          key={i}
          style={{
            width: 28,
            height: 28,
            borderRadius: '50%',
            background: color,
            border: '2px solid white',
            marginLeft: i === 0 ? 0 : -8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '10px',
            fontWeight: 700,
            color: 'white',
          }}
        >
          {['AK', 'PR', 'SN'][i]}
        </div>
      ))}
    </div>
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span style={{ fontSize: '13px' }}>🔥</span>
        <span style={{ fontWeight: 700, fontSize: '13px', color: '#111827' }}>
          142 students matched today
        </span>
      </div>
      <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '1px' }}>
        Just now • IIT, BITS, VIT
      </p>
    </div>
  </div>
);

const RecruiterCard = () => (
  <div
    className="card"
    style={{
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      maxWidth: '260px',
    }}
  >
    <div
      style={{
        width: 34,
        height: 34,
        borderRadius: '8px',
        background: '#f0f4ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="5" width="14" height="10" rx="1.5" fill="#1a6cf8" opacity="0.15" stroke="#1a6cf8" strokeWidth="1.2"/>
        <path d="M6 5V3.5C6 2.7 6.7 2 7.5 2H10.5C11.3 2 12 2.7 12 3.5V5" stroke="#1a6cf8" strokeWidth="1.2"/>
      </svg>
    </div>
    <div>
      <p style={{ fontSize: '13px', color: '#374151' }}>
        <span style={{ fontWeight: 700 }}>Radiant Info</span> shortlisted 8 interns
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        <span style={{ fontSize: '11px', color: '#6b7280' }}>Verified recruiter • 2 days ago</span>
      </div>
    </div>
  </div>
);

// Option card component
const OptionCard = ({ icon, title, description, features, badge, badgeColor, cta, ctaLink, highlight }) => (
  <div
    className="card"
    style={{
      padding: '28px 24px',
      border: highlight ? '1.5px solid #93c5fd' : '1px solid #e5e7eb',
      display: 'flex',
      flexDirection: 'column',
      gap: '0',
      transition: 'box-shadow 0.2s, transform 0.2s',
      cursor: 'default',
      flex: '1 1 0',
      minWidth: 0,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(26,108,248,0.12)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
      {icon}
      <span
        className={`badge ${badgeColor}`}
        style={{
          fontSize: '11px',
          fontWeight: 600,
          padding: '4px 10px',
          borderRadius: '20px',
        }}
      >
        {badge}
      </span>
    </div>

    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
      {title}
    </h3>
    <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.5, marginBottom: '16px' }}>
      {description}
    </p>

    {/* Features list */}
    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', flexGrow: 1 }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', fontSize: '13.5px', color: '#374151' }}>
          <CheckIcon />
          {f}
        </li>
      ))}
    </ul>

    {/* CTA */}
    <a
      href={ctaLink}
      className="btn-primary"
      id={`option-card-cta-${title.replace(/\s+/g, '-').toLowerCase()}`}
      style={{ justifyContent: 'center', width: '100%' }}
    >
      {cta}
    </a>
  </div>
);

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: 'linear-gradient(180deg, #eef2fa 0%, #f5f7fd 60%, #ffffff 100%)',
        paddingTop: '100px',
        paddingBottom: '20px',
      }}
    >
      <div className="section-container">
        {/* Floating cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'start',
            gap: '24px',
            marginBottom: '32px',
          }}
          className="hero-floating-row"
        >
          {/* Left floating card */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <WhatsAppCard />
          </div>

          {/* Center chip */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff8f0',
              border: '1px solid #fed7aa',
              borderRadius: '50px',
              padding: '8px 18px',
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#c2410c',
              whiteSpace: 'nowrap',
            }}
          >
            <RobotIcon />
            AI-Powered Campus Assistant
          </div>

          {/* Right floating card */}
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <ResumeBuilderCard />
          </div>
        </div>

        {/* Hero headline */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h1
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#0f172a',
              marginBottom: '16px',
            }}
          >
            Connect{' '}
            <span style={{ color: '#1a6cf8' }}>10X Faster.</span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: '#4b5563',
              fontWeight: 400,
              maxWidth: '560px',
              margin: '0 auto 20px',
              lineHeight: 1.5,
            }}
          >
            One platform connecting students, colleges &amp; employers — faster.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#1a6cf8',
              fontSize: '18px',
              fontWeight: 700,
            }}
          >
            <span style={{ opacity: 0.6 }}>✦</span>
            What are you looking for?
            <span style={{ opacity: 0.6 }}>✦</span>
          </div>
        </div>

        {/* Social proof cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            maxWidth: '580px',
            margin: '0 auto 36px',
          }}
          className="social-proof-row"
        >
          <StudentsMatchedCard />
          <RecruiterCard />
        </div>

        {/* Option cards */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'stretch',
          }}
          className="option-cards-grid"
        >
          <OptionCard
            icon={<CollegeIcon />}
            title="College"
            description="Explore colleges, courses, fees, placements & more."
            badge="Coming Soon"
            badgeColor="badge-blue"
            features={[
              'Search by course, location, fees',
              'Connect directly with colleges',
              'Improve student placements',
            ]}
            cta="Join Waitlist 🔔"
            ctaLink="https://campuspe.com/colleges"
          />
          <OptionCard
            icon={<GradCapIcon />}
            title="I'm Looking for a Job"
            description="Upload your resume. We'll find jobs that fit you."
            badge="Available Now"
            badgeColor="badge-green"
            features={[
              'Jobs from 1000+ sources',
              'AI powered matching',
              'WhatsApp & email alerts',
            ]}
            cta="Explore Jobs →"
            ctaLink="https://campuspe.com/jobs"
            highlight
          />
          <OptionCard
            icon={<BriefcaseIcon />}
            title="I'm Hiring"
            description="Connect with colleges and find candidates — from students to graduates."
            badge="Coming Soon"
            badgeColor="badge-blue"
            features={[
              'Connect directly with colleges',
              'Find the right candidates',
              'Simplify your hiring',
            ]}
            cta="Join Waitlist 🔔"
            ctaLink="https://campuspe.com/employers"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @media (max-width: 1024px) {
          .hero-floating-row {
            grid-template-columns: 1fr;
            justify-items: center;
          }
          .hero-floating-row > div:first-child,
          .hero-floating-row > div:last-child {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .option-cards-grid {
            flex-direction: column !important;
          }
          .social-proof-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
