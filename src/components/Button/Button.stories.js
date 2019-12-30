import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

storiesOf('Button', module)
  .addDecorator(story => (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>{story()}</div>
  ))
  .add('primary', () => (
    <Button type="primary" onClick={action('clicked')}>
      Click me first
    </Button>
  ))
  .add('secondary', () => (
    <Button onClick={action('clicked')}>Click me second</Button>
  ))
