// @ts-nocheck
// stryker.conf.js
/** @type {import('@stryker-mutator/api/core').StrykerOptions} */
module.exports = {
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "perTest",
    mutate: [
        "app.js",
        "auth.js"
    ],
    jest: {
        // Jest configuration for Stryker
        projectType: 'custom',
        configFile: 'jest.config.js',
    }
};
