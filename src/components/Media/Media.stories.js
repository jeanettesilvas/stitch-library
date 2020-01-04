import React from 'react'
import { storiesOf } from '@storybook/react'
import { Media } from './Media'

storiesOf('Media', module)
  .addDecorator(story => (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>{story()}</div>
  ))
  .add('default', () => <Media />)
