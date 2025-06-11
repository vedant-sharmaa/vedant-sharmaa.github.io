import React from 'react';

import AboutScreen from '../components/screens/AboutScreen';
import { profile, timelineEntries } from '../data/profile';

const Index = (): React.ReactElement => {
  return (
    <AboutScreen profile={profile} timelineEntries={timelineEntries} />
  );
};

export default Index;
