// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import {
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAIL,
  SET_SELECTED_ANSWER,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
} from './action-types';

const initialWheelState = [true, false, false, false, false, false];
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return [...action.payload];

    case MOVE_COUNTERCLOCKWISE:
      return [...action.payload];

    default:
      return state;
  }
}

const initialQuizState = {
  quizData: {
    quiz_id: '',
    question: '',
    answers: [
      { answer_id: '', text: '' },
      { answer_id: '', text: '' },
    ],
  },
  isFetching: false,
  error: '',
};
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case FETCH_QUIZ_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quizData: action.payload,
        isFetching: false,
        error: '',
      };

    case FETCH_QUIZ_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

const initialSelectedAnswerState = [true, false];
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return state;
    default:
      return state;
  }
}

const initialMessageState = '';
function infoMessage(state = initialMessageState, action) {
  return state;
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
};
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
