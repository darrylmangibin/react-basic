import React from 'react';

const Widget = (props) => {
  return (
    <div className="widget">
      {props.children}
    </div>
  )
}

export default Widget