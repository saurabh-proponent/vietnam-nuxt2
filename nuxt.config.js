export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vietanm-project',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      {
        src: '/bootstrap.min.js',
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]

  },
  loading: {
    color: 'green',
    height: '1px'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "~/assets/css/style.scss" },
    { src: "~/node_modules/@fortawesome/free-brands-svg-icons" },
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/fontawesome.js', mode: "client"  },
    { src: '~/assets/js/font-awesome-min.js', mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: "https://devadmin.vietnamfactoryb2b.com/api"
    }
  },
  modules: [
    '@nuxtjs/axios',
    "nuxt-i18n",
    '@nuxtjs/toast',],


  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCSS: true,
    extractCSS: true,
    collapseBooleanAttributes: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    processConditionalComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
  },

  //toaster
  toast: {
    position: "top-right",
    duration: 2000,
    action: {
      text: "Cancel",
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      },
    },
  },

  // translation 
  i18n: {
    locales: [
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "vn",
        file: "vn.json",
      },
    ],
    strategy: "no_prefix",
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    vueI18nLoader: true,
  },
}
