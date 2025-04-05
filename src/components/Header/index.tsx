import React from 'react';
import { HeaderContainer, Logo, Title } from './styles';
import airtableLogo from '../../assets/airtable-logo.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={airtableLogo} alt="Airtable" />
      <Title>Airtable Timeline ™</Title>
    </HeaderContainer>
  );
};

export default Header;
