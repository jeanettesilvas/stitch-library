import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Abbreviation, AbbreviationProps } from './Abbreviation'

export default {
  title: 'Components/Abbreviation',
  component: Abbreviation,
} as Meta

const Template: Story<AbbreviationProps> = (args) => <Abbreviation {...args} />

export const SingleCrochet = Template.bind({})
SingleCrochet.args = {
  text: 'sc',
}

export const DoubleCrochet = Template.bind({})
DoubleCrochet.args = {
  text: 'dc',
}

export const SlipStitch = Template.bind({})
SlipStitch.args = {
  text: 'slst',
}
