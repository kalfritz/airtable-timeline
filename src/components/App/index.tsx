import React from 'react';
import Timeline from '../Timeline';
import Header from '../Header';
import TimelineIntro from '../TimelineIntro';
import timelineItems from '../../timelineItems';
import { AppContainer, TimelineContent } from './styles';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <TimelineContent>
        <TimelineIntro />
        <Timeline items={timelineItems} />
      </TimelineContent>
    </AppContainer>
  );
};

export default App;
