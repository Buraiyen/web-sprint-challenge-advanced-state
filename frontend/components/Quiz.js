import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuiz } from '../state/action-creators';
const Quiz = (props) => {
  useEffect(() => {
    props.fetchQuiz();
  }, []);
  const { quizData, isFetching, error } = props.quiz;
  console.log(quizData.answers);
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quizData ? (
          <>
            <h2>{quizData.question}</h2>

            <div id="quizAnswers">
              <div className="answer"></div>
              <div className="answer selected">
                {quizData.answers[0].text}
                <button>SELECTED</button>
              </div>

              <div className="answer">
                {quizData.answers[1].text}
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
