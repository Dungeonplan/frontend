module.exports = {
  cacheDirectory: process.env.JEST_TEMP_PATH ? process.env.JEST_TEMP_PATH : '/tmp/',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: [
    'src/lib/**/**.ts',
    'src/app/**/**.ts',
    '!src/lib/*.ts',
    '!src/app/*.ts',
    '!**/*.state.ts',
    '!**/*.enum.ts',
    '!**/*.js',
    '!**/*.spec.ts',
    '!**/*-spec.ts',
    '!**/*.po.ts',
    '!**/*.module.ts',
    '!**/*.config.ts',
    '!**/*.model.ts',
    '!**/environment*.ts',
    '!**/main.ts',
    '!**/test.ts',
    '!**/public-api.ts',
    '!**/index.ts',
    '!**/types/*'
  ],
   testRunner: 'jest-jasmine2'
  /*coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },*/
};

// The reason we go up two directories('<rootDir>/../../setupJest.ts') is that during the test execution, the rooDir
// will not be the directory where our base configuration lies but the directory where our lib or showcase Jest
// configuration is.
