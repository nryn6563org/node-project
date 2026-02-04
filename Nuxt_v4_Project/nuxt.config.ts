// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css", "animate.css"],

  vite: {
    plugins: [tailwindcss()]
  },

  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  eslint: {
    // 필요한 경우 추가 옵션 설정
    config: {
      standalone: false // Nuxt 통합 설정을 사용할 경우
    }
  }
});