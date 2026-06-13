// ============================================================
// VIEW: NavPanel.js — Cream header navigation bar
// ============================================================
import React, { useState } from 'react';

const NavPanel = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <nav className="nav-panel" aria-label="Main navigation">
      <span className="nav-title">Prathamesh Bora</span>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</a></li>
        <li><a href="#projects" onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'active' : ''}>Projects</a></li>
        <li><a href="#skills" onClick={() => setActiveTab('skills')} className={activeTab === 'skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#experience" onClick={() => setActiveTab('experience')} className={activeTab === 'experience' ? 'active' : ''}>Experience</a></li>
        <li><a href="#metrics" onClick={() => setActiveTab('metrics')} className={activeTab === 'metrics' ? 'active' : ''}>Metrics</a></li>
        <li><a href="#contact" onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavPanel;
