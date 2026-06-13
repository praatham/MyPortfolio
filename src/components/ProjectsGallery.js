// ============================================================
// VIEW: ProjectsGallery.js
// Featured Projects with Interactive Blueprint Toggle
// ============================================================
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../models/projectsData';
import { Layers, Settings2, Box } from 'lucide-react';

const ProjectsGallery = () => {
  const [blueprintMode, setBlueprintMode] = useState({});

  const toggleBlueprint = (id) => {
    setBlueprintMode(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <span className="section-label"><Box size={14} className="inline-icon"/> Featured Work</span>
        <h2 className="section-title">Engineering Showcase</h2>
      </div>

      <div className="projects-grid">
        {PROJECTS_DATA.map((project, index) => {
          const isBlueprint = blueprintMode[project.id];
          return (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image Container with Toggle */}
              <div className="project-image-container">
                <img 
                  src={isBlueprint ? project.blueprintImage : project.image} 
                  alt={project.title} 
                  className={`project-image ${isBlueprint ? 'blueprint-filter' : ''}`}
                />
                
                <button 
                  className={`blueprint-toggle ${isBlueprint ? 'active' : ''}`}
                  onClick={() => toggleBlueprint(project.id)}
                  aria-label="Toggle blueprint view"
                >
                  <Layers size={16} />
                  <span>{isBlueprint ? 'Render View' : 'Blueprint View'}</span>
                </button>

                <div className="project-category">
                  {project.category}
                </div>
              </div>

              {/* Project Details */}
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-software">
                  {project.software.map(sw => (
                    <span key={sw} className="software-tag">{sw}</span>
                  ))}
                </div>

                <div className="project-specs">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsGallery;
