// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'   // babel编译补丁
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import './common/sass/index.scss'

fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})