// ============================================================
// VIEW: ExperienceSection.js
// Timeline of professional experience
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Senior AutoCAD Designer",
    company: "Industrial Tech Solutions",
    location: "Mohali, Punjab",
    period: "2023 - Present",
    description: "Leading the CAD design team for heavy machinery components. Implemented new DFM protocols that reduced manufacturing defects by 15%. Expert level 3D modeling and GD&T application.",
  },
  {
    id: 2,
    role: "Mechanical Design Engineer",
    company: "AutoParts Manufacturing",
    location: "Chandigarh",
    period: "2020 - 2023",
    description: "Designed automotive parts using SolidWorks and AutoCAD. Collaborated directly with manufacturing floor to ensure precision tolerances and efficient production cycles.",
  },
  {
    id: 3,
    role: "Junior CAD Engineer",
    company: "Precision Engineering Ltd.",
    location: "Ludhiana, Punjab",
    period: "2018 - 2020",
    description: "Assisted in the drafting and 3D modeling of HVAC systems. Gained extensive experience in translating concept sketches into detailed manufacturing blueprints.",
  }
];

const ExperienceSection = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header text-center">
        <span className="section-label"><Briefcase size={14} className="inline-icon"/> Career Journey</span>
        <h2 className="section-title">Professional Experience</h2>
      </div>

      <div className="timeline-container">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div 
            key={exp.id} 
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-period">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <p className="timeline-location">
                <MapPin size={12} className="inline-icon" /> {exp.location}
              </p>
              <p className="timeline-desc">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
