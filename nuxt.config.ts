// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  
  app: {
    head: {
      link: [
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap'
        // }
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&family=Roboto+Condensed:wght@300;400;500;600;700&display=swap'
        }
      ],
      script: [
      {
        src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js',
      }
    ]
    }
  },
  
  tailwindcss: {
    config: {
      content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './app/**/*.{vue,js,ts}',
      ],
      theme: {
        extend: {
          fontFamily: {
            inknut: ['"Inknut Antiqua"', 'serif'],

        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        // Alias pour compatibilité
        'futura-condensed': ['"Roboto Condensed"', 'sans-serif']
          },
        },
      },
    },
  }
})