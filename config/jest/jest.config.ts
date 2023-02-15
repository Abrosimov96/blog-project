
export default {
    clearMocks: true,
    coverageProvider: 'v8',
    rootDir: '../../',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupJest.ts'],
    roots: [
        '<rootDir>'
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    modulePaths: [
        '<rootDir>src'
    ],
    moduleDirectories: [
        'node_modules'
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node'
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
    ],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': '<rootDir>config/jest/jestEmptyComponent.tsx'
    },
};
