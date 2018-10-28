import React, { Component } from 'react';
import { render } from 'react-dom';

import ReactMapKit from '../../src/components/MapKit';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React wrapper for Apple's MapKit JS.</h1>
        <ReactMapKit/>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
