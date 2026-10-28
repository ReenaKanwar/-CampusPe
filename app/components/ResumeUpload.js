'use client';

import { useState, useRef } from 'react';

export default function ResumeUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <section
      id="resume-upload"
      style={{
        background: 'linear-gradient(180deg, #eef2fa 0%, #f5f7fd 100%)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="section-container">
        {/* Top chip */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'white',
              border: '1.5px solid #e5e7eb',
              borderRadius: '50px',
              padding: '8px 20px',
              fontSize: '13.5px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#7c3aed',
                display: 'inline-block',
              }}
            />
            <span style={{ fontWeight: 700, color: '#7c3aed', letterSpacing: '0.5px' }}>TRY IT LIVE</span>
            <span style={{ color: '#9ca3af', fontSize: '12px' }}>v2.4 AI Engine</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#0f172a',
              marginBottom: '8px',
            }}
          >
            Upload your resume.
          </h2>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              color: '#1a6cf8',
              marginBottom: '20px',
            }}
          >
            Find jobs that fit.
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: '#6b7280',
              maxWidth: '540px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Upload once. CampusPe reads your skills, experience, and preferences —
            then finds relevant jobs across 1,000+ sources.
          </p>
        </div>

        {/* Upload card with floating badges */}
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          {/* 98% Match Rate badge (floating left) */}
          <div
            className="card"
            style={{
              position: 'absolute',
              left: '-60px',
              top: '30px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10,
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#fef9c3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '16px' }}>⚡</span>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>98% Match Rate</p>
              <p style={{ fontSize: '10px', color: '#9ca3af' }}>AI semantic rank</p>
            </div>
          </div>

          {/* ATS Compliant badge (floating right) */}
          <div
            className="card"
            style={{
              position: 'absolute',
              right: '-60px',
              bottom: '40px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 10,
              animation: 'float 3s ease-in-out infinite 1.5s',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#fef3c7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '16px' }}>🔒</span>
            </div>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>ATS Compliant</p>
              <p style={{ fontSize: '10px', color: '#9ca3af' }}>Standardized parser</p>
            </div>
          </div>

          {/* Main upload card */}
          <div
            className="card"
            style={{
              padding: '36px 40px',
              textAlign: 'center',
              border: isDragging ? '2px dashed #1a6cf8' : '2px dashed #d1d5db',
              background: isDragging ? '#f0f4ff' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              aria-label="Upload your resume"
            />

            {fileName ? (
              <>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '6px' }}>
                  Resume uploaded!
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>{fileName}</p>
                <button
                  id="resume-find-jobs-btn"
                  className="btn-primary"
                  style={{ fontSize: '15px', padding: '12px 32px' }}
                  onClick={(e) => { e.stopPropagation(); }}
                >
                  Find Matching Jobs →
                </button>
              </>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#111827',
                    marginBottom: '8px',
                  }}
                >
                  Upload your resume
                </h3>
                <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '24px' }}>
                  PDF, DOC, or DOCX · Up to 10MB · We&apos;ll use it to understand your skills and experience.
                </p>
                <button
                  id="resume-upload-btn"
                  className="btn-primary"
                  style={{ fontSize: '15px', padding: '12px 32px', marginBottom: '16px' }}
                  onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                >
                  Upload resume ↑
                </button>
                <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '12px' }}>
                  or drag and drop your file here
                </p>
                {/* Format badges */}
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  {['PDF', 'DOC', 'DOCX'].map((fmt) => (
                    <span
                      key={fmt}
                      style={{
                        padding: '3px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#374151',
                        background: '#f9fafb',
                      }}
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        @media (max-width: 768px) {
          .card[style*="position: absolute"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
