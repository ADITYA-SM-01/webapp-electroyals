import React from 'react';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectStats from '../components/projects/ProjectStats';
import ClientTestimonials from '../components/projects/ClientTestimonials';
import ProjectsSpaceBackground from '../components/projects/ProjectsSpaceBackground';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const ProjectsPage = () => {
  return (
    <SpaceThemeLayout
      title="Cosmic Projects | ELECTROYALS"
      description="Explore our universe of groundbreaking projects and interstellar client success stories."
    >
      {/* Custom space background for Projects page */}
      <ProjectsSpaceBackground />
      
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectStats />
      <ClientTestimonials />
    </SpaceThemeLayout>
  );
};

export default ProjectsPage; 