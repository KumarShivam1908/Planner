// jest.config.js
module.exports = {
    clearMocks: true,
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["jest-localstorage-mock"],
    // Directories to ignore
    testPathIgnorePatterns: [
        "/node_modules/",
        "/.stryker-tmp/"
    ],
    watchPathIgnorePatterns: [
        "/.stryker-tmp/"
    ],
};
