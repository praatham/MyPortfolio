// ============================================================
// VIEW: ServiceIllustrations.js
// Inline SVG visuals for each service card.
// Pure presentational — no state, no side-effects.
// ============================================================
import React from 'react';

/* ─── Card 1: 3D Grid Topography ──────────────────────────── */
export const TopoIllustration = () => (
  <svg viewBox="0 0 240 140" className="card-illustration" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="topo-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#F39C12" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#e67e22" stopOpacity="0.2" />
      </linearGradient>
    </defs>

    <rect width="240" height="140" fill="#0a0e16" rx="4" />

    {/* Grid lines */}
    {[0,1,2,3,4,5,6].map(i => (
      <line key={`h${i}`} x1={0} y1={20+i*17} x2={240} y2={20+i*17}
        stroke="#F39C12" strokeWidth="0.4" strokeOpacity="0.18" />
    ))}
    {[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
      <line key={`v${i}`} x1={i*20} y1={8} x2={i*20} y2={135}
        stroke="#F39C12" strokeWidth="0.4" strokeOpacity="0.18" />
    ))}

    {/* Topographic contour lines */}
    <path d="M0,100 Q40,85 80,90 Q120,95 160,75 Q200,58 240,70"
      fill="none" stroke="#F39C12" strokeWidth="1.5" strokeOpacity="0.4" />
    <path d="M0,86 Q40,68 80,72 Q120,78 160,58 Q200,40 240,54"
      fill="none" stroke="#F39C12" strokeWidth="1.5" strokeOpacity="0.5" />
    <path d="M0,73 Q40,52 80,56 Q120,62 160,42 Q200,24 240,38"
      fill="none" stroke="#F39C12" strokeWidth="1.5" strokeOpacity="0.6" />
    <path d="M0,60 Q40,38 80,42 Q120,47 160,28 Q200,10 240,24"
      fill="none" stroke="#F39C12" strokeWidth="1.8" strokeOpacity="0.8" />
    <path d="M0,47 Q50,32 100,36 Q150,40 200,22 Q220,15 240,18"
      fill="none" stroke="#F39C12" strokeWidth="2" strokeOpacity="0.9" />

    {/* Filled elevation area */}
    <path d="M0,47 Q50,32 100,36 Q150,40 200,22 Q220,15 240,18 L240,140 L0,140 Z"
      fill="url(#topo-grad)" />

    {/* Elevation marker dots */}
    {[[80,42],[160,28],[240,24],[100,36]].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r="3" fill="#F39C12"
        style={{ filter: 'drop-shadow(0 0 4px #F39C12)' }} />
    ))}

    <text x="10"  y="130" fontFamily="'Share Tech Mono',monospace" fontSize="7"
      fill="#F39C12" fillOpacity="0.7" letterSpacing="1">TOPO // ZONE-A</text>
    <text x="170" y="130" fontFamily="'Share Tech Mono',monospace" fontSize="7"
      fill="#F39C12" fillOpacity="0.5" letterSpacing="0.5">ELEV: 342m</text>
  </svg>
);

/* ─── Card 2: Utility Line Cross-Section ──────────────────── */
export const UtilityIllustration = () => (
  <svg viewBox="0 0 240 140" className="card-illustration" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="soil-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#5a3a1a" />
        <stop offset="100%" stopColor="#3a2010" />
      </linearGradient>
      <linearGradient id="pipe-cyan" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#00F0FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#00a8b5" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    {/* Sky */}
    <rect width="240" height="58" fill="#07111e" rx="4" />
    {/* Road */}
    <rect x="0" y="42" width="240" height="16" fill="#1a1a2a" />
    {[20,60,100,140,180].map(x => (
      <rect key={x} x={x} y={48} width="22" height="3" fill="#fff" fillOpacity="0.15" rx="1" />
    ))}
    {/* Soil */}
    <rect x="0" y="58" width="240" height="82" fill="url(#soil-grad)" />
    {[6,14,22,30,38,46,54,62,70].map(i => (
      <line key={i} x1={10} y1={58+i} x2={230} y2={58+i}
        stroke="#7a5a3a" strokeWidth="0.5" strokeOpacity="0.3" />
    ))}

    {/* Power conduit */}
    <rect x="18" y="64" width="28" height="16" rx="8" fill="#F39C12" fillOpacity="0.85"
      style={{ filter: 'drop-shadow(0 0 5px #F39C12)' }} />
    <rect x="22" y="68" width="20" height="8" rx="4" fill="#F39C12" fillOpacity="0.4" />

    {/* Fiber */}
    <rect x="60" y="70" width="22" height="12" rx="6" fill="url(#pipe-cyan)"
      style={{ filter: 'drop-shadow(0 0 6px #00F0FF)' }} />
    <rect x="64" y="73" width="14" height="6" rx="3" fill="#00F0FF" fillOpacity="0.3" />

    {/* Water */}
    <rect x="100" y="62" width="34" height="20" rx="10" fill="#1a5fa0" fillOpacity="0.9" />
    <rect x="105" y="66" width="24" height="12" rx="6" fill="#1a5fa0" fillOpacity="0.4" />
    <text x="110" y="76" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#6ab4ff">W</text>

    {/* Gas */}
    <rect x="150" y="74" width="24" height="12" rx="6" fill="#39E5A5" fillOpacity="0.7"
      style={{ filter: 'drop-shadow(0 0 4px #39E5A5)' }} />

    {/* Telecom */}
    <rect x="188" y="68" width="30" height="16" rx="8" fill="#2a1a5a" />
    <rect x="192" y="72" width="22" height="8" rx="4" fill="#7a40ff" fillOpacity="0.6" />
    <text x="195" y="80" fontFamily="'Share Tech Mono',monospace" fontSize="5" fill="#c0a0ff">TC</text>

    {/* Pipe labels */}
    <text x="16"  y="60" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#F39C12">PWR</text>
    <text x="58"  y="67" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#00F0FF">FBR</text>
    <text x="152" y="71" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#39E5A5">GAS</text>
    <text x="186" y="64" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#a080ff">TEL</text>

    {/* Depth markers */}
    <line x1="4" y1="58" x2="4" y2="135" stroke="#fff" strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="3,3" />
    <text x="6" y="72"  fontFamily="'Share Tech Mono',monospace" fontSize="5" fill="#fff" fillOpacity="0.35">0.5m</text>
    <text x="6" y="100" fontFamily="'Share Tech Mono',monospace" fontSize="5" fill="#fff" fillOpacity="0.35">1.2m</text>
    <text x="6" y="128" fontFamily="'Share Tech Mono',monospace" fontSize="5" fill="#fff" fillOpacity="0.35">2.0m</text>

    <text x="80" y="133" fontFamily="'Share Tech Mono',monospace" fontSize="6"
      fill="#00F0FF" fillOpacity="0.5" letterSpacing="1">ROW CROSS-SECTION</text>
  </svg>
);

/* ─── Card 3: NEPA / SHPO Status Tracker ─────────────────── */
const COMPLIANCE_CHECKS = [
  { label: 'Section 106 Review',   color: '#39E5A5', done: true  },
  { label: 'Historic Properties',  color: '#39E5A5', done: true  },
  { label: 'Environmental Impact', color: '#39E5A5', done: true  },
  { label: 'Tribal Consultation',  color: '#39E5A5', done: true  },
  { label: 'Migratory Bird Act',   color: '#00F0FF', done: true  },
  { label: 'Wetland Assessment',   color: '#F39C12', done: false },
];

export const NEPAIllustration = () => (
  <svg viewBox="0 0 240 140" className="card-illustration" xmlns="http://www.w3.org/2000/svg">
    <rect width="240" height="140" fill="#070f1c" rx="4" />
    <rect width="240" height="20" fill="#0d1f38" rx="4" />
    <text x="10" y="13" fontFamily="'Share Tech Mono',monospace" fontSize="7"
      fill="#00F0FF" letterSpacing="1">COMPLIANCE STATUS TRACKER</text>

    {COMPLIANCE_CHECKS.map((c, i) => {
      const rowBg =
        c.done
          ? c.color === '#39E5A5' ? 'rgba(57,229,165,0.06)'
          : c.color === '#00F0FF' ? 'rgba(0,240,255,0.06)'
          : 'rgba(243,156,18,0.06)'
          : 'rgba(255,255,255,0.02)';
      const isOrange = c.color === '#F39C12';
      return (
        <g key={i} transform={`translate(0,${22 + i * 19})`}>
          <rect x="6" y="2" width="228" height="14" rx="3" fill={rowBg} />
          <rect x="6" y="2" width="228" height="14" rx="3" fill="none"
            stroke={c.done ? c.color + '44' : 'rgba(255,255,255,0.06)'} strokeWidth="0.8" />
          {c.done && (
            <rect x="6" y="2" width={isOrange ? 160 : 228} height="14" rx="3"
              fill={c.color} fillOpacity="0.08" />
          )}
          <circle cx="18" cy="9" r="5"
            fill={c.done ? c.color + '22' : 'rgba(255,255,255,0.05)'}
            stroke={c.done ? c.color : 'rgba(255,255,255,0.15)'} strokeWidth="1" />
          {c.done
            ? <text x="15.5" y="12.5" fontFamily="'Share Tech Mono',monospace" fontSize="7"
                fill={c.color} style={{ filter: `drop-shadow(0 0 4px ${c.color})` }}>✓</text>
            : <text x="14" y="12.5" fontFamily="'Share Tech Mono',monospace" fontSize="7"
                fill="#F39C12">○</text>
          }
          <text x="28" y="12" fontFamily="'Share Tech Mono',monospace" fontSize="6.5"
            fill={c.done ? (isOrange ? '#F39C12' : 'rgba(255,255,255,0.75)') : 'rgba(255,255,255,0.4)'}
            letterSpacing="0.3">{c.label}</text>
          <rect x="176" y="4" width={isOrange ? 52 : 40} height="8" rx="3"
            fill={c.color} fillOpacity="0.15" />
          <text x={isOrange ? 178 : 180} y="11" fontFamily="'Share Tech Mono',monospace"
            fontSize="5.5" fill={c.color} letterSpacing="0.5">
            {isOrange ? 'IN REVIEW' : 'CLEARED'}
          </text>
        </g>
      );
    })}
  </svg>
);

/* ─── Card 4: Site Acquisition HUD ──────────────────────── */
const CANDIDATE_SITES = [
  { x: 52,  y: 42,  label: 'A' },
  { x: 178, y: 38,  label: 'B' },
  { x: 55,  y: 102, label: 'C' },
];

const CORNER_BRACKETS = [
  [[30,18],[72,18],[30,30]],
  [[210,18],[168,18],[210,30]],
  [[30,122],[30,110],[72,122]],
  [[210,122],[168,122],[210,110]],
];

export const SiteHUDIllustration = () => (
  <svg viewBox="0 0 240 140" className="card-illustration" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="hud-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#00F0FF" stopOpacity="0.12" />
        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0"    />
      </radialGradient>
    </defs>

    <rect width="240" height="140" fill="#050d18" rx="4" />
    {/* Scanlines */}
    {Array.from({ length: 14 }).map((_, i) => (
      <rect key={i} x="0" y={i*10} width="240" height="1" fill="#00F0FF" fillOpacity="0.015" />
    ))}

    <ellipse cx="120" cy="70" rx="90" ry="60" fill="url(#hud-glow)" />

    {/* Reticle rings */}
    <circle cx="120" cy="70" r="38" fill="none" stroke="#00F0FF"
      strokeWidth="1" strokeOpacity="0.35" strokeDasharray="6,4" />
    <circle cx="120" cy="70" r="26" fill="none" stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.5" />
    <circle cx="120" cy="70" r="14" fill="rgba(0,240,255,0.06)" stroke="#00F0FF" strokeWidth="1.2" strokeOpacity="0.7" />
    <circle cx="120" cy="70" r="5"  fill="#00F0FF" fillOpacity="0.3"
      style={{ filter: 'drop-shadow(0 0 6px #00F0FF)' }} />

    {/* Cross-hairs */}
    <line x1="120" y1="30" x2="120" y2="52" stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="120" y1="88" x2="120" y2="110" stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="80"  y1="70" x2="102" y2="70"  stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.6" />
    <line x1="138" y1="70" x2="160" y2="70"  stroke="#00F0FF" strokeWidth="0.8" strokeOpacity="0.6" />

    {/* Corner brackets */}
    {CORNER_BRACKETS.map(([p1, p2, p3], i) => (
      <g key={i}>
        <line x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke="#00F0FF" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1={p1[0]} y1={p1[1]} x2={p3[0]} y2={p3[1]} stroke="#00F0FF" strokeWidth="1.5" strokeOpacity="0.7" />
      </g>
    ))}

    {/* Candidate markers */}
    {CANDIDATE_SITES.map(({ x, y, label }) => (
      <g key={label}>
        <circle cx={x} cy={y} r="5" fill="rgba(243,156,18,0.15)" stroke="#F39C12"
          strokeWidth="1" style={{ filter: 'drop-shadow(0 0 4px #F39C12)' }} />
        <text x={x-2.5} y={y+2.5} fontFamily="'Share Tech Mono',monospace"
          fontSize="5.5" fill="#F39C12">{label}</text>
        <line x1={x} y1={y+5} x2={120} y2={70} stroke="#F39C12"
          strokeWidth="0.5" strokeOpacity="0.3" strokeDasharray="4,3" />
      </g>
    ))}

    {/* HUD info boxes */}
    <rect x="4"   y="4" width="70" height="22" rx="3" fill="rgba(0,240,255,0.05)"
      stroke="#00F0FF" strokeWidth="0.5" strokeOpacity="0.3" />
    <text x="8"  y="13" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#00F0FF" fillOpacity="0.8">SITE ACQ SCAN</text>
    <text x="8"  y="22" fontFamily="'Share Tech Mono',monospace" fontSize="5"   fill="#39E5A5">CANDIDATES: 3</text>

    <rect x="166" y="4" width="70" height="22" rx="3" fill="rgba(0,240,255,0.05)"
      stroke="#00F0FF" strokeWidth="0.5" strokeOpacity="0.3" />
    <text x="170" y="13" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#00F0FF" fillOpacity="0.8">LAT 34.052°N</text>
    <text x="170" y="22" fontFamily="'Share Tech Mono',monospace" fontSize="5"   fill="#39E5A5">LON 118.243°W</text>

    {/* Bottom status bar */}
    <rect x="4" y="120" width="232" height="16" rx="3" fill="rgba(0,240,255,0.04)"
      stroke="#00F0FF" strokeWidth="0.5" strokeOpacity="0.2" />
    <text x="10"  y="131" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#00F0FF" fillOpacity="0.6" letterSpacing="0.5">SYS TRACKING // ACTIVE</text>
    <text x="170" y="131" fontFamily="'Share Tech Mono',monospace" fontSize="5.5" fill="#39E5A5" letterSpacing="0.5">SIGNAL: STRONG</text>
  </svg>
);
