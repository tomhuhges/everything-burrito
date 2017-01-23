import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps)(App)
