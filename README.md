# Just another seed for mine and your React projects 🤗

## What is in the box? 📦

- Not a Solid 🐍
- React 17
- TypeScript
- Webpack 5
- Storybook 6
- Cypress 9
- Jest 27
- React Testing Library
- Collecting total code-coverage from:
  - Cypress e2e test runs
  - Cypress component test runs
  - Jest test runs

✅ Storybook and Cypress run on the Webpack config provided.

## Misc and tweaks

- Some Prettier config
- Some ESLint config
- Some image loading
- Some SVG loading
- Some Storybook helper functions to easily describe Stories in CSF-format
- Changed Storybook Docs global render (you may remove "docs" section from "parameters" in ./storybook/preview.js file)
- Two tsconfigs to avoid [Cypress/Jest typings collision](https://github.com/cypress-io/cypress-and-jest-typescript-example)
- 🐳 Some Docker and Docker Compose configs

## NPM commands

| npm run ...                | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| start                      | Starts an App, visits local URL                                        |
| start:instrumented         | Starts an App, instruments code to collect code coverage during e2e    |
| run:docker-compose         | Starts an App hosted in docker-container (visit http://127.0.0.1:4001) |
| run:docker-compose:rebuild | The same as above, but builds containers from scratch                  |
| build                      | Builds an App, puts build in dist/app                                  |
| test:unit                  | Runs simple js and js-dom based unit-tests                             |
| test:unit:watch            | The same as above, but for new (uncommitted) unit-test                 |
| test:components:browser    | Runs component tests in the browser via Cypress                        |
| test:components:ci         | The same as above, but browser is headless and records video           |
| test:e2e:browser           | Runs e2e tests in the browser via Cypress                              |
| test:e2e:ci                | The same as above, but browser is headless and records video           |
| cypress                    | Opens Cypress UI for e2e tests                                         |
| cypress-ct                 | Opens Cypress UI for component tests                                   |
| storybook                  | Runs Storybook                                                         |
| build-storybook            | Builds Storybook, puts build in dist/storybook                         |
| report-total-coverage      | Merges Cypress, Cypress-CT and Jest tests coverage into single report  |

## Code coverage

📊 To see total code coverage report run one by one:

- `npm run start:instrumented`
- `npm run test:e2e:ci` or `npm run test:e2e:browser`
- `npm run test:components:ci` or `npm run test:components:browser`
- `npm run test:unit`
- `npm run report-total-coverage`
  The report is waiting for you in `/coverage/total/lcov-report/index.html`.
