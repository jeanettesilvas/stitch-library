import { Story, Meta } from '@storybook/react'

import { TextInput, TextInputProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
} as Meta

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Text = Template.bind({})
Text.args = {
  placeholder: 'Enter text',
  type: 'text',
}

export const Password = Template.bind({})
Password.args = {
  placeholder: 'Enter password',
  type: 'password',
}

export const Email = Template.bind({})
Email.args = {
  placeholder: 'Enter email',
  type: 'email',
}
