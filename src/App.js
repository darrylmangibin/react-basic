import React from 'react';
import uuid from 'uuid';

import Header from './components/Header';
import Actions from './components/Actions';
import Options from './components/Options';
import Container from './components/common/Contianer';
import Widget from './components/common/Widget';
import AddOption from './components/AddOption';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.state = {
      options: [
        { id: uuid(), text: 'Darryl' },
        { id: uuid(), text: 'Sarah' }
      ]
    }
  }

  handleDeleteAll() {
    this.setState({
      options: []
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Actions />
          <Widget>
            <Options 
              options={this.state.options}
              handleDeleteAll={this.handleDeleteAll}
            />
            <AddOption />
          </Widget>
        </Container>
      </React.Fragment>
    )
  }
}

export default App;