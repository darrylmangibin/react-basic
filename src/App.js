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
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleRemoveSelected = this.handleRemoveSelected.bind(this);
    this.handleSelectedOption = this.handleSelectedOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.state = {
      options: [],
      selected: undefined,
      showModal: false
    }
  }

  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    try {
      if(json !== null) {
        this.setState(() => {
          return {
            options
          }
        })
      } else {
        this.setState(() => {
          return {
            options: []
          }
        })
      }
    } catch(e) {
      this.setState(() => {
        return {
          options: []
        }
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      }
    })
  }

  handleRemoveSelected(seleted) {
    const newOptions = this.state.options.slice();
    const options = newOptions.filter((option) => {
      if(option.id !== seleted.id) {
        return option
      }
    });
    this.setState(() => {
      return {
        options
      }
    })
  }

  handleAddOption(optionText) {
    const newOption = {
      id: uuid(),
      text: optionText
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(newOption)
      }
    })
  }

  handleSelectedOption() {
    const optionIndex = Math.floor(Math.random() * this.state.options.length);
    const options = this.state.options.slice();
    const selected = options[optionIndex];
    console.log(selected)
    this.setState(() => {
      return {
        showModal: true,
        selected
      }
    })
  }

  handleCloseModal() {
    this.setState(() => {
      return {
        showModal: false
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Actions 
            handleSelectedOption={this.handleSelectedOption}
            hasOptions={this.state.options.length > 0}
          />
          <Widget>
            <Options 
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveSelected={this.handleRemoveSelected}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
              options={this.state.options}
            />
          </Widget>
        </Container>
        {
          this.state.showModal ? <Modal 
            handleCloseModal={this.handleCloseModal}
            selected={this.state.selected}
          /> : null
        }
      </React.Fragment>
    )
  }
}

export default App;