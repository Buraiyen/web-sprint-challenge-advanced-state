import axios from 'axios';
import {
  FETCH_QUIZ_FAIL,
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
} from './action-types';

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(wheel) {
  const activePosition = wheel.indexOf(true);
  wheel[activePosition] = false;

  if (activePosition === wheel.length - 1) {
    wheel[0] = true;
  } else {
    wheel[activePosition + 1] = true;
  }

  return {
    type: MOVE_CLOCKWISE,
    payload: wheel,
  };
}

export function moveCounterClockwise() {
  const activePosition = wheel.indexOf(true);
  wheel[activePosition] = false;

  if (activePosition === 0) {
    wheel[wheel.length - 1] = true;
  } else {
    wheel[activePosition - 1] = true;
  }

  return {
    type: MOVE_COUNTERCLOCKWISE,
    payload: wheel,
  };
}

export function selectAnswer() {}

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

export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
