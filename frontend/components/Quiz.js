import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../state/action-creators';
const Quiz = (props) => {
  useEffect(() => {
    props.fetchQuiz();
  }, []);
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        !props.quiz.isFetching ? (
          <>
            <h2>{props.quiz.quizData.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button>Select</button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
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
  };
};
export default connect(mapStateToProps, { fetchQuiz })(Quiz);
