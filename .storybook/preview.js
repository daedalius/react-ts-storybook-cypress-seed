import * as React from 'react';

import { Title, Stories } from '@storybook/addon-docs/blocks';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    page: () => (
      <>
        <Title />
        <br />
        <Stories includePrimary />
      </>
    ),
  },
};
