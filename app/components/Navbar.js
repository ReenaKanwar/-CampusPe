'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Colleges', href: '#colleges' },
  { label: 'Employers', href: '#employers' },
  { label: 'Jobs', href: 'https://campuspe.com/jobs' },
  { label: 'Blogs', href: 'https://campuspe.com/blogs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <svg width="140" height="36" viewBox="0 0 160 44" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="CampusPe logo">
            <g>
              {/* Graduation cap */}
              <rect x="0" y="8" width="28" height="20" rx="3" fill="#1a6cf8" opacity="0.1"/>
              <path d="M14 10L24 15L14 20L4 15L14 10Z" fill="#1a6cf8"/>
              <path d="M8 17V23C8 23 11 26 14 26C17 26 20 23 20 23V17" stroke="#1a6cf8" strokeWidth="1.5" fill="none"/>
              <circle cx="24" cy="15" r="1.5" fill="#1a6cf8"/>
              <line x1="24" y1="16.5" x2="24" y2="22" stroke="#1a6cf8" strokeWidth="1.5"/>
            </g>
            <text x="32" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#1a6cf8">Campus</text>
            <text x="109" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="#1a6cf8">Pe</text>
            <text x="32" y="38" fontFamily="Inter, sans-serif" fontSize="7.5" fill="#6b7280" letterSpacing="0.5">Connecting Students, Institutions &amp; Companies</text>
          </svg>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          aria-label="Main navigation"
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: '8px 16px',
                fontSize: '15px',
                fontWeight: '500',
                color: '#374151',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#1a6cf8';
                e.currentTarget.style.backgroundColor = '#f0f4ff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="desktop-cta">
          <a
            href="https://campuspe.com/login"
            style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#374151',
              textDecoration: 'none',
              padding: '8px 16px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#1a6cf8')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
          >
            Login
          </a>
          <a
            href="https://campuspe.com/signup"
            className="btn-primary"
            style={{ padding: '9px 20px', fontSize: '14px' }}
            id="nav-signup-btn"
          >
            Sign Up Free
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '8px',
          }}
          className="mobile-menu-btn"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18" y1="4" x2="4" y2="18" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="11" x2="19" y2="11" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="16" x2="19" y2="16" stroke="#374151" strokeWidth="2" strokeLinecap="round"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            background: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '16px 24px 24px',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '16px',
                fontWeight: '500',
                color: '#374151',
                textDecoration: 'none',
                borderBottom: '1px solid #f3f4f6',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="https://campuspe.com/login"
              className="btn-outline"
              style={{ justifyContent: 'center' }}
            >
              Login
            </a>
            <a
              href="https://campuspe.com/signup"
              className="btn-primary"
              style={{ justifyContent: 'center' }}
              id="mobile-signup-btn"
            >
              Sign Up Free
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
