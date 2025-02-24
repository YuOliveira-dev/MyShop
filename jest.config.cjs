module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
  testEnvironment: "jsdom", // <- Essa linha é essencial
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.jest.json", isolatedModules: true}]
  }
};