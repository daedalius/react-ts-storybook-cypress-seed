import React from 'react';
import { mount } from '@cypress/react';

import { Application } from './Application';

describe('Application component', () => {
  it('renders welcome message', () => {
    mount(<Application />);
    cy.get('button').contains('Cypress component test will click me').click();
    cy.contains('Hello!').should('be.visible');
  });
});
