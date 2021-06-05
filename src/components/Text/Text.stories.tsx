import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
} as Meta

const Template: Story<TextProps> = (args) => (
  <Text {...args}>{args.children}</Text>
)

export const Basic = Template.bind({})
Basic.args = {
  children: 'Hello',
  element: 'p',
}
