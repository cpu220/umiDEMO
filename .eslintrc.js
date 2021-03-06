module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
    page: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-no-bind':0,
    'import/no-unresolved': [2, {
      ignore: ['^@/', '^umi/']
    }],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**.js', '**/**.test.js'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    'react/jsx-curly-brace-presence': 0,
    'no-unused-vars': 0,
    'no-underscore-dangle': 0,
    'no-extra-boolean-cast': 0,
    'no-nested-ternary': 1,
    'no-restricted-globals': 0,
    'no-else-return':0,
    'prefer-template': 0,
    'prefer-destructuring': 0,
    'consistent-return': 0,
    'class-methods-use-this': 0,
    'arrow-body-style':0,
    'no-useless-escape':0,
    'no-restricted-syntax':0,
    'guard-for-in':0,
    'no-lonely-if':0
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};
