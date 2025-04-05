import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 0;
  background: #fff;
  width: 100%;
`;

export const Logo = styled.img`
  height: 24px;
  width: auto;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--airtable-text);
  letter-spacing: -0.025em;
`;
