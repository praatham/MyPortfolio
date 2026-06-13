// ============================================================
// VIEW: BarChart.js — Animated savings bar chart
// Renders bars supplied by the metrics controller.
// ============================================================
import React from 'react';
import { getBarsWithDelay, BAR_CHART_META } from '../controllers/metricsController';

const BarChart = () => {
  const bars = getBarsWithDelay();

  return (
    <div className="bar-chart-container">
      <p className="bar-chart-title">{BAR_CHART_META.title}</p>

      <div className="bar-chart-bars">
        {bars.map((bar, i) => (
          <div key={i} className="bar-col">
            {/* Value label above bar */}
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: bar.type === 'bar-hero' ? 'var(--cyan)' : 'rgba(255,255,255,0.5)',
              marginBottom: '3px',
              letterSpacing: '0.05em',
            }}>
              {bar.value}
            </span>

            {/* Bar fill */}
            <div
              className={`bar-fill ${bar.type}`}
              style={{ height: `${bar.height}px`, animationDelay: bar.animDelay }}
            />

            {/* Bar label */}
            <span className={`bar-label${bar.type === 'bar-hero' ? ' hero' : ''}`}>
              {bar.label.split('\n').map((line, li) => (
                <React.Fragment key={li}>
                  {line}
                  {li === 0 && <br />}
                </React.Fragment>
              ))}
            </span>
          </div>
        ))}
      </div>

      {/* X-axis */}
      <div style={{
        marginTop: '6px',
        borderTop: '1px solid rgba(0,240,255,0.15)',
        paddingTop: '4px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.52rem',
        color: 'rgba(255,255,255,0.25)',
        letterSpacing: '0.1em',
        textAlign: 'right',
      }}>
        {BAR_CHART_META.xAxisLabel}
      </div>
    </div>
  );
};

export default BarChart;
