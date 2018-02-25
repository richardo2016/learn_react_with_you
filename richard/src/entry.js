import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// 加载组件到 DOM 元素 mountNode
render(<App name="Richard" />, document.getElementById('app'));
