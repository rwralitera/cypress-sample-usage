# cypress
This is a sample project showing the implementation and usage of Cypress with some tips and best practices

## Installation

It requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd cypress-sample-usage
$ npm install
```

## Dependencies

It uses a number of dependencies to work properly:

* [![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
* [cypress webpack-preprocessor](https://www.npmjs.com/package/@cypress/webpack-preprocessor) - Cypress preprocessor for bundling JavaScript via webpack.
* [eslint](https://www.npmjs.com/package/eslint) - a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) - This package provides Airbnb's .eslintrc as an extensible shared config.
* [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) - An ESLint plugin for your Cypress tests.
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) - plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.

## Run
  - Run tests using the cypress GUI
```sh
$ npx cypress open
```
  - Run all tests on headless (with video record)
```sh
$ npx cypress run -b chrome --headless
```
  - Run tests into a specific folder
```sh
$ npx cypress run -b chrome -s "cypress/integration/examples/*.js"
```
  - Run a specific test file
```sh
$ npx cypress run -s cypress/integration/examples/actions.spec.js -b chrome --headless
```
