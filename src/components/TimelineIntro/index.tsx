import React from 'react';
import { IntroContainer, Description, Features, DescriptionWrapper, LearnMore } from './styles';

const AIRTABLE_LEARN_MORE_URL = 'https://support.airtable.com/';

const TimelineIntro = () => {
  return (
    <IntroContainer>
      <DescriptionWrapper>
        <Description>
          Efficiently visualize and manage project timelines with smart lane organization
        </Description>
        <LearnMore href={AIRTABLE_LEARN_MORE_URL} target="_blank" rel="noopener noreferrer">
          Need help? Learn more →
        </LearnMore>
      </DescriptionWrapper>
      <Features>
        <span>Smart Layout</span>
        <span>•</span>
        <span>Interactive Editing</span>
        <span>•</span>
        <span>Real-time Updates</span>
      </Features>
    </IntroContainer>
  );
};

export default TimelineIntro; 