export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-mysql',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  './assets/reset.css',
  './assets/_buttons.scss',
  './assets/_colors.scss',
  './assets/_forms.scss',
  './assets/_paragraph.scss',
  './assets/_screen.scss',
  './assets/index.scss',
 
 
 
    
 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  { src: './plugins/errors/errorAuthentication.js' , srr:false } , 
  { src: './plugins/errors/errorSigIn.js' , srr:false } , 
  { src: './plugins/firebaseAuth/connect.js' , srr:false } , 
  { src: './plugins/firebaseAuth/firebase.js' , srr:false }  
  
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
