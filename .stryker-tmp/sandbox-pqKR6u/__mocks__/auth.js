// @ts-nocheck
// __mocks__/auth.js
// We need to export the actual classes and functions for Jest to be able to mock them.
// The actual mocking logic is in the test files.
const actualAuth = jest.requireActual('../auth');
module.exports = actualAuth;
