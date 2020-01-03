import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextInputWithIcon } from './TextInputWithIcon'

storiesOf('TextInputWithIcon', module)
  .addDecorator(story => (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>{story()}</div>
  ))
  .add('default', () => <TextInputWithIcon />)
// .add('search', () => <TextInputWithIcon icon="search" />)
