import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
const Wheel = (props) => {
  const { wheel } = props;
  return (
    <div id='wrapper'>
      <div id='wheel'>
        {wheel.map((wheelItem, i) => (
          <div
            key={i}
            className={wheelItem ? 'cog active' : 'cog'}
            style={{ '--i': i }}
          >
            {wheelItem && 'B'}
          </div>
        ))}
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id='keypad'>
        <button
          id='counterClockwiseBtn'
          onClick={() => {
            props.moveCounterClockwise(wheel);
          }}
        >
          Counter clockwise
        </button>
        <button
          id='clockwiseBtn'
          onClick={() => {
            props.moveClockwise(wheel);
          }}
        >
          Clockwise
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel,
  };
};
export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise,
})(Wheel);
