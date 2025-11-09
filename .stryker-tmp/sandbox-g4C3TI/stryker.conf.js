// @ts-nocheck
// stryker.conf.js
module.exports = {
    mutator: "javascript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    transpilers: [],
    coverageAnalysis: "off",
    mutate: [
        "app.js",
        "auth.js"
    ],
    jest: {
        projectType: 'custom',
        configFile: 'jest.config.js',
        enableFindRelatedTests: true,
    }
};
