module.exports = {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.(ts|js)x?$",
  coveragePathIgnorePatterns: [
    "coverage",
    "node_modules",
    "middlewares",
    "index.js",
    "config",
    "db",
    "build"
  ],
  coverageDirectory: "coverage",
  collectCoverageFrom: ["**/*.js", "!**/tests__mocks__/**"],
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
