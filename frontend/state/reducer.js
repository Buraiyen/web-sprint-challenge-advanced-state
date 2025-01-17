// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux';
import {
  FETCH_QUIZ_START,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAIL,
  SET_SELECTED_ANSWER,
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_INFO_MESSAGE,
  RESET_FORM,
  SET_FORM_DATA,
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

const initialSelectedAnswerState = [false, false];
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return [...action.payload];
    default:
      return state;
  }
}

const initialMessageState = {
  message: 'Welcome!',
};
function infoMessage(state = initialMessageState, action) {
  console.log(`in the reducer ${action.payload}`);
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
};
const form = (state = initialFormState, action) => {
  switch (action.type) {
    case RESET_FORM:
      return action.payload;
    case SET_FORM_DATA:
      const { inputId, inputValue } = action.payload;
      if (inputId === 'newQuestion') {
        return { ...state, newQuestion: inputValue };
      } else if (inputId === 'newTrueAnswer') {
        return { ...state, newTrueAnswer: inputValue };
      } else if (inputId === 'newFalseAnswer') {
        return { ...state, newFalseAnswer: inputValue };
      }

    default:
      return state;
  }
};

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
