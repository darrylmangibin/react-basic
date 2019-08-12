import React from 'react';

import Header from './components/Header';
import Actions from './components/Actions';
import Options from './components/Options';
import Container from './components/common/Contianer';
import Widget from './components/common/Widget';
import AddOption from './components/AddOption';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Actions />
          <Widget>
            <Options />
            <AddOption />
          </Widget>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;