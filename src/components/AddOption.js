import React from 'react';

class AddOption extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="add-option-error">Error</p>
        <form className="add-option">
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