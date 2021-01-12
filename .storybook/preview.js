import * as React from 'react';

import { Title, Stories, Description } from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    page: () => (
      <>
        <Title />
        <Description />
        <br />
        <Stories includePrimary />
      </>
    ),
  },
};
