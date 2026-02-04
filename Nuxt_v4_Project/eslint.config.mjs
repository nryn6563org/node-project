// eslint.config.mjs
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  // 1. 특정 파일 패턴에만 적용하고 싶을 경우 (선택 사항)
  files: ["**/*.js", "**/*.ts", "**/*.vue"],

  // 2. 요청하신 커스텀 규칙 설정
  rules: {
    // Vue 관련 HTML 규칙 모두 끄기
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

    // 일반 JS 및 기타 규칙 모두 끄기
    "no-console": "off",
    "no-lonely-if": "off",
    "unicorn/prefer-includes": "off",
    "dot-notation": "off",
    "space-before-function-paren": "off",
    "eol-last": "off",
    "no-new": "off",

    // Nuxt 4/3 공통 페이지 이름 규칙 대응
    "vue/multi-word-component-names": "off"
  }
});
