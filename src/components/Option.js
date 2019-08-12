import React from 'react';

const Option = (props) => {
  return(
    <React.Fragment>
      <p className="widget__message">
        Please add an option to get started
      </p>
      <div className="option">
        <p className="option__text">1. React</p>
        <button className="button button--link">remove</button>
      </div>
    </React.Fragment>
  )
}

export default Option;