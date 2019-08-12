import React from 'react';

import Option from './Option';

const Options = () => {
  return (
    <React.Fragment>
      <div className="widget__header">
        <h3 className="widget__header--title">Your options</h3>
        <button 
          className="button button--link"
        >
          Remove all
        </button>
      </div>
      <p className="widget__message">
        Please add an option to get started
      </p>
      <Option />
    </React.Fragment>
    
  )
}

export default Options;