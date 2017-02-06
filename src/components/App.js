import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as testCreators from '../actions/test';

class App extends Component {
  componentDidMount() {
    this.props.setTest({ data: 'This is a test' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.props.test.data}
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...testCreators},
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
