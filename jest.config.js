module.exports = {
   preset: 'ts-jest/presets/js-with-babel',
   testEnvironment: 'jsdom',
   testPathIgnorePatterns: ['/node_modules/'],
   setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
   moduleNameMapper: {
      "^.+\\.(css|less|scss)$": "babel-jest"
   },
   globals: {
     'ts-jest': {
       isolatedModules: true,
       tsconfig: 'tsconfig.jest.json'
     }
   }
 }
