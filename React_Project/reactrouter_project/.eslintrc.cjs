module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-console': 'off',
    'no-lonely-if': 'off',
    'unicorn/prefer-includes': 'off',
    'dot-notation': 'off',
    'space-before-function-paren': 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'react/react-in-jsx-scope': 'off' // Not needed in React 17+
  }
}
