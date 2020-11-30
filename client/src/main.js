import 'material-design-icons-iconfont/dist/material-design-icons.css' //
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app')
