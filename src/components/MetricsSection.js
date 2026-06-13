// ============================================================
// VIEW: MetricsSection.js — 3-column cyber matrix dashboard
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import CalendarGrid from './CalendarGrid';
import MeshChart    from './MeshChart';
import BarChart     from './BarChart';
import { Activity } from 'lucide-react';

const MetricsSection = () => (
  <section className="metrics-section" id="metrics" aria-label="Performance Metrics Dashboard">
    <div className="metrics-section-inner">

      {/* Section header */}
      <div className="metrics-header">
        <span className="metrics-eyebrow"><Activity size={14} className="inline-icon"/> Performance Analytics</span>
        <h2 className="metrics-heading">Metrics Dashboard</h2>
      </div>

      <div className="metrics-grid">

        {/* ── Card 1: Permits Approved ── */}
        <motion.div 
          className="metric-card" id="metric-permits"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="metric-badge">
            <span className="dot" />
            <span>Live Data</span>
          </div>
          <div className="metric-number cyan">500+</div>
          <p className="metric-subtitle">Permits Approved</p>
          <CalendarGrid />
        </motion.div>

        {/* ── Card 2: Jurisdictions ── */}
        <motion.div 
          className="metric-card" id="metric-jurisdictions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="metric-badge">
            <span className="dot" />
            <span>Network Map</span>
          </div>
          <div className="metric-number cyan">12+</div>
          <p className="metric-subtitle">Jurisdictions Navigated</p>
          <MeshChart />
        </motion.div>

        {/* ── Card 3: Savings ── */}
        <motion.div 
          className="metric-card" id="metric-savings"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="metric-badge">
            <span className="dot"
              style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }} />
            <span style={{ color: 'var(--green)' }}>Cost Analysis</span>
          </div>
          <div className="metric-number green">$50K+</div>
          <p className="metric-subtitle">Saved in Delay Fees</p>
          <BarChart />
        </motion.div>

      </div>
    </div>
  </section>
);

export default MetricsSection;
