import React from 'react';

import PageLayout from '../layouts/PageLayout';
import type { Profile as ProfileType, TimelineEntry as TimelineEntryType } from '../../types/Profile';
import Profile from '../elements/Profile';
import SEO from '../shared/SEO';
import ErrorBoundary from '../shared/ErrorBoundary';

type AboutScreenProps = {
  profile: ProfileType,
  timelineEntries: TimelineEntryType[];
};

const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile, timelineEntries } = props;

  const summary: string = profile.summary && profile.summary.length ? profile.summary[0] : '';

  return (
    <PageLayout>
      <SEO
        title={`${profile.position}. ${summary}`}
        description={`${profile.firstName} ${profile.lastName}. ${profile.position}. ${summary}`}
      />
      <ErrorBoundary>
        <Profile profile={profile} timelineEntries={timelineEntries} />
      </ErrorBoundary>
    </PageLayout>
  );
};

export default AboutScreen;
