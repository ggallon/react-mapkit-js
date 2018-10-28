import expect from 'expect';
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';

import ReactMapKit from 'src/components/MapKit';

describe('ReactMapKit', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<ReactMapKit />, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})
