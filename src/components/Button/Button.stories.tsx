import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>{args.children}</Button>
)

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
}

export const Primary = Template.bind({})
Primary.args = {
  children: 'Primary',
  type: 'primary',
}
