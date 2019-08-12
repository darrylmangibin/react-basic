import React from 'react';

class AddOption extends React.Component {
  render() {
    return (
      <form className="add-option">
        <input 
          className="add-option__input"
          autoComplete="off"
          name="option"
        />
        <button className="button">Add option</button>
      </form>
    )
  }
}

export default AddOption;