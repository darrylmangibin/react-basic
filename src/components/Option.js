import React from 'react';

const Option = (props) => {
  return(
    <React.Fragment>
      <div className="option">
        <p className="option__text">{props.index}. {props.option.text}</p>
        <button
          onClick={() => props.handleRemoveSelected(props.option)}
          className="button button--link">remove</button>
      </div>
    </React.Fragment>
  )
}

export default Option;