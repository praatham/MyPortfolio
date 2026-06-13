// ============================================================
// VIEW: StatusFooter.js — Sleek status banner at page bottom
// ============================================================
import React from 'react';

/* ── Antenna / Satellite dish SVG icon ─────────────────────── */
const AntennaIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="footer-icon"
    aria-hidden="true"
  >
    {/* Mast */}
    <line x1="14" y1="22" x2="14" y2="27" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="10" y1="27" x2="18" y2="27" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    {/* Mount arm */}
    <line x1="14" y1="16" x2="14" y2="22" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    {/* Dish bowl outline */}
    <path d="M4,16 Q8,6 14,4 Q20,6 24,16"
      fill="none" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" />
    {/* Dish fill */}
    <path d="M6,16 Q9,9 14,7 Q19,9 22,16" fill="rgba(0,240,255,0.1)" />
    {/* Signal arcs */}
    <path d="M14,4 Q18,1 22,4"
      fill="none" stroke="#00F0FF" strokeWidth="0.9" strokeOpacity="0.5" strokeLinecap="round" />
    <path d="M14,4 Q20,-2 26,4"
      fill="none" stroke="#00F0FF" strokeWidth="0.7" strokeOpacity="0.3" strokeLinecap="round" />
    {/* Focus dot */}
    <circle cx="14" cy="14" r="1.5" fill="#00F0FF"
      style={{ filter: 'drop-shadow(0 0 4px #00F0FF)' }} />
    {/* Feed arm (dashed) */}
    <line x1="14" y1="14" x2="14" y2="4"
      stroke="#00F0FF" strokeWidth="0.8" strokeDasharray="2,2" strokeOpacity="0.5" />
  </svg>
);

/* ── Footer component ──────────────────────────────────────── */
const StatusFooter = () => (
  <footer className="status-footer" id="contact" role="contentinfo">
    <div className="footer-left">
      <AntennaIcon />
      <div className="footer-text">
        <strong>Prathamesh Bora | AutoCAD Engineer</strong>
        <br />
        Engineering Portfolio &amp; Detailed Overview
      </div>
    </div>

    <div className="status-badge" role="status" aria-live="polite">
      <span className="status-dot" aria-hidden="true" />
      <span className="status-text">Status // Online</span>
    </div>
  </footer>
);

export default StatusFooter;
