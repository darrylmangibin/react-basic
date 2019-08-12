import React from 'react';

const Actions = (props) => {
  return (
    <button
      onClick={props.handleSelectedOption} 
      className="button--big"
      disabled={!props.hasOptions}
    >
      What should I do?
    </button>
  )
}

export default Actions