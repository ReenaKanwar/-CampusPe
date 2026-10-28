'use client';

import { useState } from 'react';

const tabs = [
  { id: 'students', label: 'For Students' },
  { id: 'employers', label: 'For Employers' },
  { id: 'colleges', label: 'For Colleges' },
];

const studentFeatures = [
  {
    num: '01',
    title: 'Upload once, discover everything',
    badge: 'AI POWERED',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: "Upload your resume once, and CampusPe's AI engine continuously finds and recommends colleges, internships and gigs.",
  },
  {
    num: '02',
    title: 'Discover relevant opportunities',
    badge: 'AI RANKED',
    badgeColor: '#dcfce7',
    badgeText: '#15803d',
    desc: 'Explore colleges and career opportunities matched to your profile, interests and goals.',
  },
  {
    num: '03',
    title: 'Get notified when something fits',
    badge: 'INSTANT ALERTS',
    badgeColor: '#fef3c7',
    badgeText: '#92400e',
    desc: 'Get notified when a relevant college or new opportunity is found, so you can act early.',
  },
];

const employerFeatures = [
  {
    num: '01',
    title: 'Post a role and reach campus talent',
    badge: 'INSTANT SETUP',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: 'Post a job, internship or gig role in minutes. Reach students and graduates from 130+ colleges across India.',
  },
  {
    num: '02',
    title: 'Receive a matched shortlist',
    badge: 'INSTANT SETUP',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: 'Get candidates matched to your role by skills, experience, location and hiring requirements.',
    tags: ['Zero CV Clutter', 'Tier 1–Tier 3 Parity'],
  },
  {
    num: '03',
    title: 'Connect with candidates directly',
    badge: 'INSTANT SETUP',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: 'Message, schedule interviews, and move candidates through your pipeline — all in one place.',
    tags: ['In-App Scheduling', '1-Click Video / Chat'],
  },
  {
    num: '04',
    title: 'Reduce your time-to-hire',
    badge: 'INSTANT SETUP',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: 'Find matched candidates, connect with them and move from shortlist to offer in one streamlined workflow.',
    tags: ['<2 DAYS', '57% Faster Hiring'],
  },
];

const collegeFeatures = [
  {
    num: '01',
    title: 'List your college and courses',
    badge: 'INSTANT SETUP',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: 'Create a verified college profile with course details, fees, placements, and campus life showcase.',
  },
  {
    num: '02',
    title: 'Connect with students directly',
    badge: 'INSTANT SETUP',
    badgeColor: '#dbeafe',
    badgeText: '#1d4ed8',
    desc: 'Get matched with students who meet your admission criteria. Reach out via WhatsApp or direct call.',
  },
  {
    num: '03',
    title: 'Showcase placements and drives',
    badge: 'DIRECT',
    badgeColor: '#dcfce7',
    badgeText: '#15803d',
    desc: 'Publish campus drive details, showcase placement stats and attract top recruiters to your campus.',
  },
];

// Student opportunities panel  
const StudentOpportunitiesPanel = () => (
  <div
    className="card"
    style={{
      padding: '20px',
      maxWidth: '360px',
      width: '100%',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Matched Opportunities</h4>
      <span style={{ fontSize: '11px', color: '#6b7280' }}>Curated for you • Updated daily</span>
    </div>
    {[
      {
        company: 'Google',
        role: 'Software Engineer',
        match: '95%',
        location: 'Bangalore, Karnataka',
        date: '7 Jan 25 • Full-Time',
        color: '#4285f4',
        letter: 'G',
      },
      {
        company: 'Flip',
        role: 'Full Stack Web Developer',
        match: '91%',
        location: 'Mumbai, Maharashtra',
        date: '30 Jan 25 • Full-Time',
        color: '#FF6B35',
        letter: 'F',
      },
      {
        company: 'Marketing Gig',
        role: 'Marketing Gig',
        type: 'Freelance',
        salary: '₹10K - ₹25K',
        location: 'Remote',
        date: 'Freelance',
        color: '#6366f1',
        letter: 'MG',
      },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 12px',
          borderRadius: '10px',
          border: '1px solid #f3f4f6',
          marginBottom: '8px',
          transition: 'background 0.15s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = '#f9fafb')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '8px',
            background: item.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontWeight: 800,
            color: 'white',
            flexShrink: 0,
          }}
        >
          {item.letter}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {item.role}
            </span>
            {item.match && (
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: '#16a34a',
                  background: '#dcfce7',
                  padding: '2px 7px',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {item.match} Match
              </span>
            )}
            {item.type && (
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  color: '#9333ea',
                  background: '#f3e8ff',
                  padding: '2px 7px',
                  borderRadius: '12px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {item.type}
              </span>
            )}
          </div>
          <p style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
            {item.location} • {item.date}
          </p>
        </div>
        {item.type && (
          <button
            style={{
              background: '#1a6cf8',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '11px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            View Details
          </button>
        )}
      </div>
    ))}
    <a
      href="https://campuspe.com/jobs"
      style={{
        display: 'block',
        textAlign: 'center',
        marginTop: '12px',
        fontSize: '13px',
        fontWeight: 600,
        color: '#1a6cf8',
        textDecoration: 'none',
      }}
    >
      View all matched opportunities →
    </a>
  </div>
);

// Employer panel
const EmployerPanel = () => (
  <div
    className="card"
    style={{
      padding: '20px',
      maxWidth: '360px',
      width: '100%',
    }}
  >
    <div style={{ marginBottom: '12px' }}>
      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Active Job Posts</h4>
      <p style={{ fontSize: '12px', color: '#6b7280' }}>4 roles · 23 shortlisted candidates</p>
    </div>
    {[
      { role: 'Software Engineer', applicants: 47, shortlisted: 8, status: 'Active' },
      { role: 'Product Manager', applicants: 31, shortlisted: 6, status: 'Active' },
      { role: 'Data Analyst', applicants: 19, shortlisted: 5, status: 'Paused' },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 12px',
          borderRadius: '10px',
          border: '1px solid #f3f4f6',
          marginBottom: '8px',
        }}
      >
        <div>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{item.role}</p>
          <p style={{ fontSize: '11px', color: '#9ca3af' }}>{item.applicants} applicants · {item.shortlisted} shortlisted</p>
        </div>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            padding: '3px 10px',
            borderRadius: '12px',
            background: item.status === 'Active' ? '#dcfce7' : '#f3f4f6',
            color: item.status === 'Active' ? '#16a34a' : '#6b7280',
          }}
        >
          {item.status}
        </span>
      </div>
    ))}
  </div>
);

const CollegePanel = () => (
  <div
    className="card"
    style={{
      padding: '20px',
      maxWidth: '360px',
      width: '100%',
    }}
  >
    <div style={{ marginBottom: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
        <div style={{ width: 28, height: 28, borderRadius: '6px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="#1d4ed8">
            <path d="M7 1L13 4.5L7 8L1 4.5L7 1Z"/>
          </svg>
        </div>
        <h4 style={{ fontSize: '15px', fontWeight: 700, color: '#111827' }}>XYZ College</h4>
      </div>
    </div>
    {[
      { course: 'B.Tech – CSE', seats: 60, avail: 8, fee: '₹3,50,000', status: 'Filling Fast' },
      { course: 'MBA', seats: 120, avail: 34, fee: '₹4,20,000', status: 'Open' },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          padding: '12px',
          borderRadius: '10px',
          border: '1px solid #f3f4f6',
          marginBottom: '8px',
          background: '#f9fafb',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>{item.course}</span>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '12px',
              background: item.status === 'Filling Fast' ? '#fef3c7' : '#dcfce7',
              color: item.status === 'Filling Fast' ? '#92400e' : '#16a34a',
            }}
          >
            {item.status}
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '12px', color: '#6b7280' }}>
          <div>Total Seats: <strong style={{ color: '#111827' }}>{item.seats}</strong></div>
          <div>Available: <strong style={{ color: '#111827' }}>{item.avail}</strong></div>
          <div>Fees: <strong style={{ color: '#111827' }}>{item.fee}</strong></div>
        </div>
      </div>
    ))}
  </div>
);

const featuresByTab = {
  students: studentFeatures,
  employers: employerFeatures,
  colleges: collegeFeatures,
};

const panelByTab = {
  students: <StudentOpportunitiesPanel />,
  employers: <EmployerPanel />,
  colleges: <CollegePanel />,
};

const headlineByTab = {
  students: {
    title: 'Stop spending time searching for jobs\nacross hundreds of websites.',
    highlight: '1,000+ company career pages',
    body: 'CampusPe continuously scans ',
    tail: ', refreshes opportunities every 2 hours, and surfaces the roles that match you all in one place.',
    cta: 'Explore opportunities',
    ctaLink: 'https://campuspe.com/jobs',
  },
  employers: {
    title: 'Skip the campus drives.\nStart hiring the right people.',
    highlight: '',
    body: 'Post a role in minutes and reach relevant candidates without the time, travel and coordination of traditional hiring. CampusPe helps you discover, match and connect with talent from colleges and beyond.',
    tail: '',
    cta: 'Post a Job',
    ctaLink: 'https://campuspe.com/employers',
  },
  colleges: {
    title: 'Put your college in front of\nthe right students.',
    highlight: '',
    body: 'Create a verified college profile and get discovered by students searching for exactly what you offer. CampusPe matches students to your college by course, location, fees, and career outcomes.',
    tail: '',
    cta: 'List Your College',
    ctaLink: 'https://campuspe.com/colleges',
  },
};

export default function Features() {
  const [activeTab, setActiveTab] = useState('students');

  const features = featuresByTab[activeTab];
  const headline = headlineByTab[activeTab];

  return (
    <section
      id="features"
      style={{
        background: 'linear-gradient(180deg, #f5f7fd 0%, #eef2fa 100%)',
        paddingTop: '72px',
        paddingBottom: '80px',
      }}
    >
      <div className="section-container">
        {/* Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '56px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              background: 'white',
              borderRadius: '50px',
              padding: '4px',
              border: '1px solid #e5e7eb',
              gap: '2px',
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: activeTab === tab.id ? '#1a6cf8' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#6b7280',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content area */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'start',
          }}
          className="features-grid"
        >
          {/* Left: headline + features list */}
          <div>
            {activeTab === 'students' ? (
              <h2
                style={{
                  fontSize: 'clamp(22px, 3vw, 30px)',
                  fontWeight: 700,
                  color: '#374151',
                  lineHeight: 1.35,
                  marginBottom: '16px',
                }}
              >
                Stop spending searching for jobs across hundreds of websites.
                <br />
                <span style={{ color: '#111827' }}>
                  CampusPe continuously scans{' '}
                  <span style={{ color: '#1a6cf8', fontWeight: 800 }}>1,000+ company career pages</span>
                  , refreshes opportunities{' '}
                  <span style={{ color: '#1a6cf8', fontWeight: 800 }}>every 2 hours</span>
                  , and surfaces the roles that match you all in one place.
                </span>
              </h2>
            ) : (
              <h2
                style={{
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 700,
                  color: '#374151',
                  lineHeight: 1.3,
                  marginBottom: '16px',
                  whiteSpace: 'pre-line',
                }}
              >
                {headline.title}
                <br />
                <span
                  style={{
                    fontSize: 'clamp(15px, 1.8vw, 17px)',
                    fontWeight: 400,
                    color: '#6b7280',
                    display: 'block',
                    marginTop: '8px',
                    whiteSpace: 'normal',
                  }}
                >
                  {headline.body}
                </span>
              </h2>
            )}

            <a
              href={headline.ctaLink}
              id={`features-cta-${activeTab}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#1a6cf8',
                fontWeight: 600,
                fontSize: '15px',
                textDecoration: 'none',
                marginBottom: '32px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
            >
              {headline.cta}
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: '#1a6cf8',
                  color: 'white',
                  transition: 'gap 0.2s',
                }}
              >
                →
              </span>
            </a>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="card"
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                  }}
                >
                  <div className="step-number">{feature.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>{feature.title}</h3>
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.5px',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          background: feature.badgeColor,
                          color: feature.badgeText,
                        }}
                      >
                        {feature.badge}
                      </span>
                    </div>
                    <p style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.5 }}>{feature.desc}</p>
                    {feature.tags && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                        {feature.tags.map((tag, j) => (
                          <span
                            key={j}
                            style={{
                              fontSize: '11px',
                              fontWeight: 600,
                              padding: '3px 10px',
                              borderRadius: '12px',
                              background: j === 0 ? '#dbeafe' : '#f0fdf4',
                              color: j === 0 ? '#1d4ed8' : '#16a34a',
                              border: j === 0 ? '1px solid #bfdbfe' : '1px solid #bbf7d0',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '24px' }}>
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    width: activeTab === tab.id ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    background: activeTab === tab.id ? '#1a6cf8' : '#d1d5db',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`Switch to ${tab.label} tab`}
                />
              ))}
            </div>
          </div>

          {/* Right: panel UI */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
          >
            {panelByTab[activeTab]}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
