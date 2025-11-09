// @ts-nocheck
// jest.config.js
module.exports = {
    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["jest-localstorage-mock"],
    // A map from regular expressions to module names that allow to stub out resources with a single module
    moduleNameMapper: {
        "../auth": "<rootDir>/__mocks__/auth.js",
        "../app": "<rootDir>/__mocks__/app.js"
    },
};
