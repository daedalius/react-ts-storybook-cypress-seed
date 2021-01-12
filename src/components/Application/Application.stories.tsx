import * as React from 'react';
import { describeStories, describeStory } from '#storybook/utils';
import { Application } from './Application';

export default describeStories(
  {
    title: 'Example/Application',
    component: Application,
  },
  `
General component description in **md-format**.
`
);

export const Default = describeStory(
  () => <Application />,
  'Custom Story title',
  `
Custom Story description in **md-format**
`
);
