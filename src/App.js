// ============================================================
// App.js — Root layout component
// Imports styles from /styles and all view components from
// /components. Acts as the top-level composition root.
// ============================================================
import React from 'react';

import './styles/global.css';
import './styles/components.css';

import NavPanel        from './components/NavPanel';
import HeroSection     from './components/HeroSection';
import ProjectsGallery from './components/ProjectsGallery';
import SkillsSection   from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import MetricsSection  from './components/MetricsSection';
import ContactSection  from './components/ContactSection';
import StatusFooter    from './components/StatusFooter';

function App() {
  return (
    <>
      <NavPanel />
      
      <main>
        <HeroSection />
        <ProjectsGallery />
        <SkillsSection />
        <ExperienceSection />
        <MetricsSection />
        <ContactSection />
      </main>

      <StatusFooter />
    </>
  );
}

export default App;
