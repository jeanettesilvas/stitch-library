import React, { Component } from 'react'
import { render } from 'react-dom'

import {
  Abbreviation,
  Button,
  Media,
  Text,
  TextInput,
} from '../../src/components'

import './demo.scss'

let Demo = () => {
  return (
    <div className="demo">
      <h1>stitch-library</h1>
      <ul className="demo__components">
        <li>
          <h2>Abbreviation</h2>
          <Abbreviation text="sc" />
        </li>
        <li>
          <h2>Button</h2>
          <Button onClick={() => {}}>Click here</Button>
        </li>
        <li>
          <h2>Media</h2>
          <Media />
        </li>
        <li>
          <h2>Text</h2>
          <Text>sample</Text>
        </li>
        <li>
          <h2>TextInput</h2>
          <TextInput onChange={() => {}} />
        </li>
      </ul>
    </div>
  )
}

export default Demo

render(<Demo />, document.querySelector('#demo'))
