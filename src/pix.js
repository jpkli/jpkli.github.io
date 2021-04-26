import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import App from './App'
Vue.use(Router)
Vue.use(Vuetify)

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'
import vuetify from './plugins/vuetify'
import PixStack from './PixStack'

let router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: PixStack
    }
  ]
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
