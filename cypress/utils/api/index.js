/* eslint-disable linebreak-style */
export function waitForAPI() {
  cy.wait('@api');
}

export function registerApiAlias() {
  cy.server();
  cy.route('**/**').as('api');
}
