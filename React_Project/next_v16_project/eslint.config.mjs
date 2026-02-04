import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    rules: {
      // 1. 일반 JS 및 공통 규칙 (기존 유지)
      "no-console": "off",
      "no-lonely-if": "off",
      "dot-notation": "off",
      "space-before-function-paren": "off",
      "eol-last": "off",
      "no-new": "off",
      "unicorn/prefer-includes": "off",

      // 2. React/JSX 관련 규칙 (Vue 규칙의 React 버전)
      "react/jsx-indent": "off", // vue/html-indent 대응
      "react/jsx-closing-bracket-location": "off", // vue/html-closing-bracket-newline 대응
      "react/self-closing-comp": "off", // vue/html-self-closing 대응
      "react/jsx-quotes": "off", // vue/html-quotes 대응
      "react/jsx-max-props-per-line": "off", // vue/max-attributes-per-line 대응
      "react/jsx-sort-props": "off", // vue/attributes-order 대응
      "react/jsx-no-target-blank": "off", // 보안 관련 보안 속성 강제 해제
      "react/no-danger": "off", // vue/no-v-html 대응 (dangerouslySetInnerHTML)
      "react/display-name": "off", // 컴포넌트 이름 강제 해제
      "react/prop-types": "off", // TS를 사용하므로 Prop-types 검사 불필요
      "react/react-in-jsx-scope": "off", // Next.js/React 17+ 에서는 React import 불필요

      // 3. Next.js 특화 규칙 (선택 사항)
      "@next/next/no-img-element": "off", // <img> 태그 대신 <Image> 권장 규칙 해제
      "@next/next/no-html-link-for-pages": "off" // <a> 대신 <Link> 권장 규칙 해제
    }
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);

export default eslintConfig;
