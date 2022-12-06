import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setMessage } from '../state/action-creators';

const Message = (props) => {
  // useEffect(() => {
  //   props.setMessage('Tummy');
  // }, []);
  return (
    <div id='message' onClick={() => props.setMessage({ message: 'tummy' })}>
      {props.infoMessage.message}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    infoMessage: state.infoMessage,
  };
};

export default connect(mapStateToProps, { setMessage })(Message);
