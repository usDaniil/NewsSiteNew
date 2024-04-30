module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'react', 'import'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 4 },
        ObjectPattern: { multiline: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ExportDeclaration: { multiline: true, minProperties: 4 }
      }
    ],
    'react/jsx-curly-spacing': ['error', 'never'],
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'parent', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ]
      }
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'eol-last': ['error', 'always'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'import/newline-after-import': ['error', { count: 1 }],
    'keyword-spacing': ['error']
  }
};
