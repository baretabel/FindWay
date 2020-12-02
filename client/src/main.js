import 'material-design-icons-iconfont/dist/material-design-icons.css' //
import Vue from 'vue'
import Layout from './layout/layout.vue'
import Router from './router.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  render: h => h(Layout),
  vuetify: new Vuetify({}),
  router: Router,
  components: { Layout }
}).$mount('#app')
