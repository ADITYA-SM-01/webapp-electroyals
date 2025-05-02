import React from 'react';
import TeamMembers from '../components/team/TeamMembers';
import TeamHero from '../components/team/TeamHero';
import JoinTeam from '../components/team/JoinTeam';
import SpaceThemeLayout from '../components/layouts/SpaceThemeLayout';

const TeamPage = () => {
  return (
    <SpaceThemeLayout
      title="Our Stellar Team | ELECTROYALS"
      description="Meet our interstellar crew of visionaries and innovators pushing the boundaries of what's possible."
    >
      <TeamHero />
      <TeamMembers />
      <JoinTeam />
    </SpaceThemeLayout>
  );
};

export default TeamPage; 