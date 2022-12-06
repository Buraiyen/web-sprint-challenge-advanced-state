import axios from 'axios';
import {
  FETCH_QUIZ_FAIL,
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_SELECTED_ANSWER,
} from './action-types';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(wheel) {
  const activePosition = wheel.indexOf(true);
  const wheelCopy = [...wheel];
  wheelCopy[activePosition] = false;

  if (activePosition === wheel.length - 1) {
    wheelCopy[0] = true;
  } else {
    wheelCopy[activePosition + 1] = true;
  }

  return {
    type: MOVE_CLOCKWISE,
    payload: wheelCopy,
  };
}

export function moveCounterClockwise(wheel) {
  const activePosition = wheel.indexOf(true);
  const wheelCopy = [...wheel];
  wheelCopy[activePosition] = false;

  if (activePosition === 0) {
    wheelCopy[wheel.length - 1] = true;
  } else {
    wheelCopy[activePosition - 1] = true;
  }

  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: wheelCopy,
  };
}

export function selectAnswer(answerIndex) {
  const answers = [false, false];
  answers[answerIndex] = true;
  return {
    type: SET_SELECTED_ANSWER,
    payload: answers,
  };
}

export function setMessage() {}

export function setQuiz() {}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export const fetchQuiz = () => (dispatch) => {
  // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
  // On successful GET:
  // - Dispatch an action to send the obtained quiz to its state
  dispatch({ type: FETCH_QUIZ_START });
  axios
    .get('http://localhost:9000/api/quiz/next')
    .then((res) => {
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_QUIZ_FAIL, payload: err });
    });
};

export const postAnswer = () => (dispatch) => {
  // On successful POST:
  // - Dispatch an action to reset the selected answer state
  // - Dispatch an action to set the server message to state
  // - Dispatch the fetching of the next quiz
  dispatch({ type: FETCH_QUIZ_START });
  axios
    .get('http://localhost:9000/api/quiz/next')
    .then((res) => {
      dispatch({ type: FETCH_QUIZ_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_QUIZ_FAIL, payload: err });
    });
};
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
