import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { Application } from './Application';

test('Application component renders welcome message', () => {
  render(<Application />);
  expect(() => screen.getByText('Hello!')).not.toThrow();
});
