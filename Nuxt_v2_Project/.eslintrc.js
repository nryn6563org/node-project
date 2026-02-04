module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/html-indent': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-quotes': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/no-v-for-template-key-on-child': 'off',
    'vue/no-v-for-template-key': 'off',
    'no-console': 'off',
    'no-lonely-if': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'unicorn/prefer-includes': 'off',
    'dot-notation': 'off',
    'space-before-function-paren': 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'vue/comment-directive': 'off'
  }
}
