import * as React from 'react';
import { mount } from '@cypress/react';

import { Application } from './Application';

describe('Application component', () => {
  it('works', () => {
    mount(<Application />);
    cy.contains('Hello!').should('be.visible');
  });
});
