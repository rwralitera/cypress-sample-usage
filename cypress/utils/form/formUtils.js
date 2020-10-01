/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-unused-expressions */
/* eslint-disable cypress/no-force */
/// <reference types="Cypress" />
import { waitForAPI, registerApiAlias } from '../api';

export function loginWith(email, password) {
  registerApiAlias();
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('#submit').click();
  waitForAPI();
}

export function logout() {
}
