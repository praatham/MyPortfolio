// ============================================================
// MODEL: projectsData.js
// Data for the Featured Projects gallery
// ============================================================

export const PROJECTS_DATA = [
  {
    id: 'p1',
    title: 'Automated Assembly Line Conveyor',
    category: 'Mechanical Design',
    description: 'Designed a high-throughput conveyor system for automotive parts manufacturing. Improved efficiency by 22% while reducing maintenance downtime.',
    software: ['SolidWorks', 'AutoCAD', 'ANSYS'],
    specs: [
      { label: 'Max Load', value: '500 kg/m' },
      { label: 'Speed', value: '1.5 m/s' },
      { label: 'Material', value: 'Alloy Steel' }
    ],
    // Using placeholder images that look technical
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Precision Gearbox Housing',
    category: 'AutoCAD Modeling',
    description: 'Detailed 2D and 3D modeling of a complex gearbox housing for industrial robotics. Ensured strict GD&T tolerances for bearing alignment.',
    software: ['AutoCAD 3D', 'Inventor'],
    specs: [
      { label: 'Tolerance', value: '±0.005 mm' },
      { label: 'Process', value: 'CNC Milling' },
      { label: 'Material', value: 'Alum 6061-T6' }
    ],
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80&w=800',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'HVAC Ducting Layout System',
    category: 'MEP Drafting',
    description: 'Comprehensive HVAC ducting layout for a 50,000 sq ft commercial facility. Optimized airflow and reduced material waste by 15%.',
    software: ['AutoCAD MEP', 'Revit'],
    specs: [
      { label: 'Area', value: '50k sq ft' },
      { label: 'CFM Max', value: '12,000' },
      { label: 'Efficiency', value: '+15%' }
    ],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p4',
    title: 'Custom Hydraulic Press Frame',
    category: 'Heavy Machinery',
    description: 'Developed a robust 50-ton hydraulic press frame for a local manufacturing unit in Punjab. Ensured high structural integrity under extreme loads.',
    software: ['SolidWorks', 'ANSYS'],
    specs: [
      { label: 'Capacity', value: '50 Tons' },
      { label: 'Material', value: 'A36 Steel' },
      { label: 'Safety Factor', value: '3.0' }
    ],
    image: 'https://images.unsplash.com/photo-1580982970725-7033dd7bf771?auto=format&fit=crop&q=80&w=800',
    blueprintImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  }
];
