import React from 'react';

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = e.target.elements.option.value.trim();
    let error = undefined
    const duplicate = this.props.options.filter((option) => {
      if(option.text.toLowerCase() === text.toLowerCase()) {
        return option
      }
    })
    if (duplicate.length > 0) {
      error = 'This option already exists'
    }
    if(!text) {
      error = 'Enter Valid Value to add item'
    }
    if(error) {
      return this.setState(() => {
        return {
          error
        }
      })
    }
    this.props.handleAddOption(text)
    e.target.elements.option.value = '';
    this.setState(() => {
      return {
        error: undefined
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form
          onSubmit={this.handleSubmit} 
          className="add-option"
        >
          <input
            className="add-option__input"
            autoComplete="off"
            name="option"
          />
          <button className="button">Add option</button>
        </form>
      </React.Fragment>
    )
  }
}

export default AddOption;