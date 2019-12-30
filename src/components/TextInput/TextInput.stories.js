import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextInput } from './TextInput'

storiesOf('TextInput', module)
  .addDecorator(story => (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>{story()}</div>
  ))
  .add('default', () => <TextInput />)
  .add('with placeholder', () => <TextInput placeholder="write something" />)
  .add('password', () => <TextInput type="password" value="password" />)
  .add('email', () => <TextInput type="email" placeholder="email@xyz.com" />)
