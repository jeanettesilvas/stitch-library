import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Abbreviation } from './Abbreviation'

storiesOf('Abbreviation', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>{story()}</div>
  ))
  .add('abbr', () => (
    <Abbreviation text={text('abbreviation', 'abbr', 'abbr')} />
  ))
