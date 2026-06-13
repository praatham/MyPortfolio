// ============================================================
// VIEW: SkillsSection.js
// Technical Proficiencies Display
// ============================================================
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../models/skillsData';
import { Wrench, Cpu, Compass, Settings2 } from 'lucide-react';

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header text-center">
        <span className="section-label"><Wrench size={14} className="inline-icon"/> Core Proficiencies</span>
        <h2 className="section-title">Technical Expertise</h2>
      </div>

      <div className="skills-container">
        {/* Software Skills - Animated Bars */}
        <div className="skills-block">
          <h3 className="skills-block-title"><Cpu size={18} /> Software & CAD</h3>
          <div className="skill-bars">
            {SKILLS_DATA.software.map((skill, index) => (
              <div key={skill.name} className="skill-bar-container">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-progress-bg">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies & Manufacturing - Tag Clouds */}
        <div className="skills-block-group">
          <div className="skills-block">
            <h3 className="skills-block-title"><Compass size={18} /> Design Methodologies</h3>
            <div className="skill-tags">
              {SKILLS_DATA.methodologies.map((item, i) => (
                <motion.span 
                  key={i} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="skills-block">
            <h3 className="skills-block-title"><Settings2 size={18} /> Manufacturing Processes</h3>
            <div className="skill-tags alt-style">
              {SKILLS_DATA.manufacturing.map((item, i) => (
                <motion.span 
                  key={i} 
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
