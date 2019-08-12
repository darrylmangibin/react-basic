import React from 'react';

import Container from './common/Contianer';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <h1 className="header__title">Indecision App</h1>
        <h2 className="header__subtitle">Put your life in the hands of a computer.</h2>
      </Container>
    </header>
  )
}

export default Header;