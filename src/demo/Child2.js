import Context from '../react-redux-simple/Context';
import connect from './react-redux-simple/Connect';
import React from 'react';

class Child extends React.Component {
  static contextType = Context;
  render() {
    console.log(this.props);
    return <h1>{this.context.x}</h1>;
  }
}

export default connect(
  store => {
    return {
      x: store.x,
      y: store.y
    };
  },
  dispatch => {
    return {
      add: dispatch({ type: 'add' })
    };
  }
)(Child);
