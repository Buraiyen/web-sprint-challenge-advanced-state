import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/action-creators';

export function Form(props) {
  const inputChangeHandler = (event) => {
    const { value, id } = event.target;
    console.warn(id);
  };

  const onSubmit = (evt) => {};

  return (
    <form id='form' onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id='newQuestion'
        placeholder='Enter question'
      />
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id='newTrueAnswer'
        placeholder='Enter true answer'
      />
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id='newFalseAnswer'
        placeholder='Enter false answer'
      />
      <button id='submitNewQuizBtn'>Submit new quiz</button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
