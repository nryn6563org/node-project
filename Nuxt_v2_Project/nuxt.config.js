export default {
  // Global page headers
  head: {
    title: 'Nuxt_v2_Project',
    htmlAttrs: {
      lang: 'ko' // 한국어 서비스라면 'ko'로 변경 권장
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '프로젝트 설명' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS
  css: [
    '@/assets/css/main.css', // Tailwind 및 기본 스타일
    'animate.css/animate.min.css' // package.json의 animate.css 추가
  ],

  // Plugins to run before rendering page
  plugins: [],

  // Auto import components
  components: true,

  // Modules for dev and build
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Tailwind CSS 3를 위해 반드시 필요 (PostCSS 8 호환 모듈)
    '@nuxt/postcss8',
    // package.json에 @nuxtjs/tailwindcss가 있으므로 등록
    '@nuxtjs/tailwindcss'
  ],

  // Modules
  modules: [],

  // ESLint 모듈 설정
  eslint: {
    cache: true,
    fix: true
  },

  // Tailwind CSS 설정 (선택 사항)
  tailwindcss: {
    viewer: true, // /_tailwind 경로에서 가이드 확인 가능
    cssPath: '@/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  // Build Configuration
  build: {
    // PostCSS 8 설정
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    // 빌드 속도 및 최적화
    extractCSS: process.env.NODE_ENV === 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  }
}