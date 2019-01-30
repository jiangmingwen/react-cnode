import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.min.css';
class App extends Component {
  render() {
    return (
      <div style={{'padding':'16px'}}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
