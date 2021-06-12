import { Story, Meta } from '@storybook/react'

import { UserNav, UserNavProps } from './UserNav'

export default {
  title: 'Components/UserNav',
  component: UserNav,
} as Meta

const Template: Story<UserNavProps> = (args) => <UserNav {...args} />

export const Authenticated = Template.bind({})
Authenticated.args = {
  isAuthenticated: true,
  currentPathname: '/home',
}

export const NotAuthenticated = Template.bind({})
NotAuthenticated.args = {
  isAuthenticated: false,
  currentPathname: '/home',
}
