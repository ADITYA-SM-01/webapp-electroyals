import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectStats from '../components/projects/ProjectStats';
import ClientTestimonials from '../components/projects/ClientTestimonials';

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Projects | ELECTROYALS</title>
        <meta name="description" content="Browse our portfolio of successful projects and client case studies." />
      </Helmet>
      <Navbar />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
        <ProjectStats />
        <ClientTestimonials />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage; 