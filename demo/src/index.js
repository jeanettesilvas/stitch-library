import React, { Component } from 'react'
import { render } from 'react-dom'

import { Button, TextInput } from '../../src'

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>stitch-library Demo</h1>
        <div>
          <Button type="primary">button</Button>
        </div>
        <div>
          <TextInput />
        </div>
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
