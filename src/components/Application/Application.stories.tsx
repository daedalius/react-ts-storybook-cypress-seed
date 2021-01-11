import * as React from 'react';
import { describeStory } from '#storybook/utils';
import { Application } from './Application';

export default {
  title: 'Example/Application',
  component: Application,
  argTypes: {},
};

const Template = (args) => <Application {...args} />;

export const Default = Template.bind({});
Default.args = {};
describeStory(
  Default,
  'Custom Story title',
  `
Custom Story description in **md-format**
`
);
