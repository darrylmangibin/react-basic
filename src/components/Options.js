import React from 'react';

import Option from './Option';

const Options = (props) => {
  let renderOptions = null;
  if(props.options.length <= 0) {
    renderOptions = (
      <p className="widget__message">
        Please add an option to get started
      </p>
    )
  } else {
    renderOptions = props.options.map((option, i) => {
      return (
        <Option 
          key={option.id}
          option={option}
          index={i + 1}
        />
      )
    })
  }
  return (
    <React.Fragment>
      <div className="widget__header">
        <h3 className="widget__header--title">Your options</h3>
        <button 
          className="button button--link"
          onClick={props.handleDeleteAll}
        >
          Remove all
        </button>
      </div>
      { renderOptions }
    </React.Fragment>
    
  )
}

export default Options;