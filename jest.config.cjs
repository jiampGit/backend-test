const config = {
    preset: "ts-jest",
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    //Agrego este código
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.test.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
module.exports = config;