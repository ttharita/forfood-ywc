// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


global.jQuery = jQuery

Vue.config.productionTip = false
let Bootstrap = require('bootstrap')
let SocialSharing = require('vue-social-sharing')
Vue.use(SocialSharing)



/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

