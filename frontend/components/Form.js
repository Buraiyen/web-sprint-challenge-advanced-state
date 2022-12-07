import React from 'react';
import { connect } from 'react-redux';
import { inputChange, postQuiz } from '../state/action-creators';

export function Form(props) {
  const inputChangeHandler = (event) => {
    const { id, value } = event.target;
    props.inputChange(id, value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.postQuiz(props.form);
  };

  return (
    <form id='form' onSubmit={submitHandler}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id='newQuestion'
        placeholder='Enter question'
        value={props.form.newQuestion}
      />
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id='newTrueAnswer'
        placeholder='Enter true answer'
        value={props.form.newTrueAnswer}
      />
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id='newFalseAnswer'
        placeholder='Enter false answer'
        value={props.form.newFalseAnswer}
      />
      <button
        id='submitNewQuizBtn'
        disabled={
          props.form.newQuestion.trimEnd().length <= 1 ||
          props.form.newTrueAnswer.trimEnd().length <= 1 ||
          props.form.newFalseAnswer.trimEnd().length <= 1
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    form: state.form,
  };
};

export default connect(mapStateToProps, { inputChange, postQuiz })(Form);
