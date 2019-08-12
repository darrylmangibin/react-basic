import React from 'react';
import uuid from 'uuid';

import Header from './components/Header';
import Actions from './components/Actions';
import Options from './components/Options';
import Container from './components/common/Contianer';
import Widget from './components/common/Widget';
import AddOption from './components/AddOption';
import Modal from './components/Modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleAddOption() {
    console.log('add')
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
            />
            <AddOption />
          </Widget>
        </Container>
          {/* <Modal />  */}
      </React.Fragment>
    )
  }
}

export default App;