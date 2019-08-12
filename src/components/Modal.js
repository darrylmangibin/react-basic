import React from 'react';

const Modal = (props) => {
  console.log(props)
  const styles = {
    container: {
      background: ' rgba(0, 0, 0, 0.715)',
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    flex: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    flexItem: {
      width: 300,
      height: 300,
      background: '#464b5e',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      borderRadius: '5px'
    },
    mb: {
      marginBottom: '1.2rem'
    }
  }
  console.log(props)
  return (
    <div style={styles.container}>
      <div style={styles.flex}>
        <div style={styles.flexItem}>
          {props.selected && <h3 style={styles.mb}>{props.selected.text}</h3>}
          <button 
            onClick={props.handleCloseModal}
            className="button"
          >Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
