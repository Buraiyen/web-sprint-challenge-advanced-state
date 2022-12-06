import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';
const Quiz = (props) => {
  useEffect(() => {
    props.fetchQuiz();
  }, []);
  const { quizData, isFetching, error } = props.quiz;
  const { selectedAnswer } = props;
  console.log(selectedAnswer);
  return (
    <div id='wrapper'>
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !isFetching ? (
          <>
            <h2>{quizData.question}</h2>

            <div id='quizAnswers'>
              <div className={selectedAnswer[0] ? 'answer selected' : 'answer'}>
                {quizData.answers[0].text}
                <button onClick={() => props.selectAnswer(0)}>
                  {selectedAnswer[0] ? 'SELECTED' : 'Select'}
                </button>
              </div>

              <div className={selectedAnswer[1] ? 'answer selected' : 'answer'}>
                {quizData.answers[1].text}
                <button onClick={() => props.selectAnswer(1)}>
                  {selectedAnswer[1] ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button
              id='submitAnswerBtn'
              disabled={!(selectedAnswer[0] || selectedAnswer[1])}
              onClick={() => props.postAnswer(quizData, selectedAnswer)}
            >
              Submit answer
            </button>
          </>
        ) : (
          'Loading next quiz...'
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  };
};
export default connect(mapStateToProps, {
  fetchQuiz,
  selectAnswer,
  postAnswer,
})(Quiz);
