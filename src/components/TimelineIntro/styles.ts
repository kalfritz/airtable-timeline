import styled from 'styled-components';

export const IntroContainer = styled.div`
  margin-bottom: 0;
  padding: 16px 24px;
  background-color: var(--airtable-white);
  border-radius: var(--airtable-radius) var(--airtable-radius) 0 0;
  border: 1px solid var(--airtable-border);
  border-bottom: none;
  text-align: center;
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  color: var(--airtable-text);
  font-size: 0.875rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.5;
`;

export const LearnMore = styled.a`
  color: var(--airtable-blue);
  font-size: 0.75rem;
  text-decoration: none;
  white-space: nowrap;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Features = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: var(--airtable-blue);
  font-size: 0.8125rem;
  font-weight: 500;
  
  span {
    &:nth-child(even) {
      color: var(--airtable-text-light);
      font-size: 0.6875rem;
    }
  }
`; 