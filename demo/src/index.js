import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src'
import { Abbreviation, Button, Media, Text, TextInput, TextInputWithIcon } from '../../src/components'

export default class Demo extends Component {
  render() {
    return <div>
      <h1>stitch-library Demo</h1>
      <div><Abbreviation text="sc" /></div>
      <div><Button>Click here</Button></div>
      <div><Media /></div>
      <div><Text>sample</Text></div>
      <div><TextInput /></div>
      <div><TextInputWithIcon /></div>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
