import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Media, MediaProps } from './Media'

export default {
  title: 'Components/Media',
  component: Media,
  argTypes: {
    alt: { control: '' },
    className: { control: '' },
    height: { control: '100px' },
    src: { control: '' },
    width: { control: '' },
  },
} as Meta

const Template: Story<MediaProps> = (args) => <Media {...args} />

export const Image = Template.bind({})
Image.args = {}
