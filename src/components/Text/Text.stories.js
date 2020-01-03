import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from './Text'

storiesOf('Text', module)
  .addDecorator(story => <div style={{ padding: '50px' }}>{story()}</div>)
  .add('default', () => (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Diam phasellus
      vestibulum lorem sed risus. Elementum sagittis vitae et leo duis ut.
      Bibendum enim facilisis gravida neque convallis a. Morbi non arcu risus
      quis varius. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor
      aliquam. Iaculis nunc sed augue lacus viverra vitae congue eu. Id ornare
      arcu odio ut sem nulla pharetra. Facilisis volutpat est velit egestas dui
      id. Eu nisl nunc mi ipsum. Proin sagittis nisl rhoncus mattis rhoncus urna
      neque viverra. Cras tincidunt lobortis feugiat vivamus at augue eget arcu
      dictum. Massa tempor nec feugiat nisl pretium fusce id velit. Ornare
      aenean euismod elementum nisi quis eleifend. Metus dictum at tempor
      commodo ullamcorper.
    </Text>
  ))
  .add('callout', () => (
    <Text element="div" type="callout">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Diam phasellus
      vestibulum lorem sed risus. Elementum sagittis vitae et leo duis ut.
      Bibendum enim facilisis gravida neque convallis a. Morbi non arcu risus
      quis varius.
    </Text>
  ))
