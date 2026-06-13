// ============================================================
// VIEW: MeshChart.js — Jurisdiction node/mesh line chart
// Renders edges and nodes supplied by the metrics controller.
// ============================================================
import React from 'react';
import {
  buildEdges,
  JURISDICTION_NODES,
  PACKET_ROUTES,
} from '../controllers/metricsController';

const MeshChart = () => {
  const edges = buildEdges();

  return (
    <div className="mesh-chart-container">
      <p className="mesh-chart-title">▸ Jurisdiction Network Map</p>
      <svg viewBox="0 0 240 128" width="100%" style={{ display: 'block' }}>
        <defs>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vertical drop lines */}
        {JURISDICTION_NODES.map(n => (
          <line key={`drop-${n.id}`}
            x1={n.x} y1={n.y + 4}
            x2={n.x} y2={126}
            stroke="#00F0FF" strokeWidth="0.5" strokeOpacity="0.08"
            strokeDasharray="2,4"
          />
        ))}

        {/* Edges */}
        {edges.map(({ id, x1, y1, x2, y2 }) => (
          <line key={id}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#00F0FF" strokeWidth="0.7" strokeOpacity="0.25"
          />
        ))}

        {/* Animated routing packets */}
        {PACKET_ROUTES.map((route, i) => (
          <circle key={i} r="2" fill={route.color}
            style={{ filter: `drop-shadow(0 0 4px ${route.color})` }}>
            <animateMotion
              path={route.path}
              dur={route.dur}
              repeatCount="indefinite"
              calcMode="linear"
            />
          </circle>
        ))}

        {/* Nodes */}
        {JURISDICTION_NODES.map(n => (
          <g key={n.id} filter="url(#node-glow)">
            <circle cx={n.x} cy={n.y} r="6"
              fill="rgba(0,240,255,0.1)" stroke="#00F0FF" strokeWidth="1.2" />
            <circle cx={n.x} cy={n.y} r="2.5" fill="#00F0FF" />
            <text x={n.x} y={n.y - 9}
              fontFamily="'Share Tech Mono',monospace" fontSize="5.5"
              fill="#00F0FF" fillOpacity="0.8" textAnchor="middle">
              {n.label}
            </text>
          </g>
        ))}

        {/* Ground line */}
        <line x1="0" y1="126" x2="240" y2="126"
          stroke="#00F0FF" strokeWidth="0.5" strokeOpacity="0.2" />
      </svg>
    </div>
  );
};

export default MeshChart;
