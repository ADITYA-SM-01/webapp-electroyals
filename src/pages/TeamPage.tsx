import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Helmet } from 'react-helmet';
import TeamMembers from '../components/team/TeamMembers';
import TeamHero from '../components/team/TeamHero';
import JoinTeam from '../components/team/JoinTeam';

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | ELECTROYALS</title>
        <meta name="description" content="Meet our diverse team of professionals dedicated to excellence and innovation." />
      </Helmet>
      <Navbar />
      <main>
        <TeamHero />
        <TeamMembers />
        <JoinTeam />
      </main>
      <Footer />
    </>
  );
};

export default TeamPage; 