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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "~/assets/css/style.scss"},
    { src: "~/node_modules/@fortawesome/free-brands-svg-icons"},    
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/fontawesome.js', mode: "client"  },
    { src: '~/assets/js/font-awesome-min.js' , mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],  

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [
  //   'bootstrap-vue/nuxt',
  // ],
  module:{
    rules : [
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
  }
}
