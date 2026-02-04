import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // 작성해주신 rules를 여기에 배치합니다.
  rules: {
    // Vue 관련 규칙 off
    "vue/html-indent": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-self-closing": "off",
    "vue/html-quotes": "off",
    "vue/max-attributes-per-line": "off",
    "vue/attributes-order": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-v-for-template-key-on-child": "off",
    "vue/no-v-for-template-key": "off",
    "vue/attribute-hyphenation": "off",
    "vue/no-v-html": "off",
    "vue/comment-directive": "off",

    // JS/공통 규칙 off
    "no-console": "off",
    "no-lonely-if": "off",
    "unicorn/prefer-includes": "off",
    "dot-notation": "off",
    "space-before-function-paren": "off",
    "eol-last": "off",
    "no-new": "off"
  }
});
