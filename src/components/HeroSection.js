// ============================================================
// VIEW: HeroSection.js
// Dynamic landing section for the portfolio
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Layers } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      {/* Abstract Blueprint Background Elements */}
      <div className="hero-bg-elements">
        <motion.div 
          className="hero-gear"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={400} strokeWidth={0.5} color="var(--border-cyan)" />
        </motion.div>
        <motion.div 
          className="hero-gear small"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Settings size={200} strokeWidth={0.5} color="var(--border-cyan)" />
        </motion.div>
      </div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="hero-eyebrow">
            <PenTool size={14} className="inline-icon" /> Mechanical Engineer & AutoCAD Specialist
          </span>
          <h1 className="hero-title">
            Precision Engineering.<br />
            <span className="text-gradient">Innovative Design.</span>
          </h1>
          <p className="hero-subtitle">
            Hi, I'm <strong>Prathamesh Bora</strong>, an experienced AutoCAD Designer and Mechanical Engineer. Originally from Odisha, India, and currently based in Mohali, Punjab. I specialize in transforming complex mechanical concepts into manufacturing-ready technical models with meticulous attention to tolerances, DFM, and GD&T.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <Layers size={18} /> View Projects
            </a>
            <a href="#skills" className="btn-secondary">
              Explore Skills
            </a>
          </div>
        </motion.div>

        {/* Floating Data Widgets */}
        <motion.div 
          className="hero-widgets"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
           <div className="hero-widget">
              <span className="widget-label">CAD Proficiency</span>
              <span className="widget-value">AutoCAD, SolidWorks</span>
           </div>
           <div className="hero-widget">
              <span className="widget-label">Origin & Location</span>
              <span className="widget-value">Odisha ➝ Mohali, PB</span>
           </div>
           <div className="hero-widget border-glow">
              <span className="widget-label status-dot">Experience</span>
              <span className="widget-value text-green">Senior Level</span>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
