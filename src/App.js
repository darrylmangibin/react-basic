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
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteSelectedOption = this.handleDeleteSelectedOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      options: [],
      seleted: undefined,
      showModal: false
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      if(json !== null) {
        this.setState({
          options: JSON.parse(json)
        })
      } else {
        this.setState({
          options: []
        })
      }
    } catch(e) {
      this.setState({
        options: []
      })
    }
  }

  componentDidUpdate() {
    localStorage.setItem('options', JSON.stringify(this.state.options))
  }

  handleDeleteAll() {
    this.setState({
      options: []
    })
  }

  handlePick() {
    const selectedOption = Math.floor(Math.random() * this.state.options.length);
    if (this.state.options.length <= 0) {
      return
    }
    const selected = this.state.options[selectedOption]
    this.setState((prevState) => {
      return {
        selected,
        showModal: !prevState.showModal
      }
    })
    
  }

  handleAddOption(text) {
    const option = {
      id: uuid(),
      text
    }
    const options = this.state.options.slice();
    this.setState(() => {
      return {
        options: options.concat(option)
      }
    })
  }

  handleDeleteSelectedOption(selectedOption) {
    const options = this.state.options.slice();
    const newOptions = options.filter(option => {
      if(option.id !== selectedOption.id) {
        return option
      }
    });
    this.setState(() => {
      return {
        options: newOptions
      }
    })
  }

  handleCloseModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Actions 
            handlePick={this.handlePick}
            hasOptions={this.state.options.length <= 0}
          />
          <Widget>
            <Options 
              options={this.state.options}
              handleDeleteAll={this.handleDeleteAll}
              handleDeleteSelectedOption={this.handleDeleteSelectedOption}
            />
            <AddOption
              options={this.state.options} 
              handleAddOption={this.handleAddOption}
            />
          </Widget>
        </Container>
        {
          this.state.showModal ?
          <Modal
            selected={this.state.selected}
            handleCloseModal={this.handleCloseModal}
          /> : null
        }
      </React.Fragment>
    )
  }
}

export default App;