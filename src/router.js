import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import VueAnalytics from 'vue-analytics'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueAnalytics, {
  id: 'UA-167779979-1'
})
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'

import Home from './Home'
import Publications from './Publications'
import Projects from './Projects'
import Talks from './Talks'
import CV from './CV'
import PixStack from './PixStack'

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/publications',
      component: Publications
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/talks',
      component: Talks
    },
    {
      path: '/cv',
      component: CV
    },
    {
      path: '/pix',
      component: PixStack
    }
  ]
})
