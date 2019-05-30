process.env.NODE_ENV = 'test';

require('dotenv').config();

const jest = require('jest');
const argv = process.argv.slice(2);

// Watch unless on CI
if (!process.env.CI) {
  argv.push('--watch');
}

if (process.env.CI) {
  // See https://facebook.github.io/jest/docs/troubleshooting.html#tests-are-extremely-slow-on-docker-and-or-continuous-integration-ci-server
  argv.push('--runInBand');
}

jest.run(argv);
