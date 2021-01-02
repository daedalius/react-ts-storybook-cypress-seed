import * as React from 'react';

import { Application } from './Application';

export default {
  title: 'Example/Application',
  component: Application,
  argTypes: {},
};

const Template = (args) => <Application {...args} />;

export const Default = Template.bind({});
Default.args = {};
