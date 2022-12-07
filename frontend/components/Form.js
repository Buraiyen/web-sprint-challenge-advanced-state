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
    <form id="form" onSubmit={submitHandler}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={inputChangeHandler}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        disabled={
          !props.form.newQuestion.length ||
          !props.form.newTrueAnswer.length ||
          !props.form.newFalseAnswer.length
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
