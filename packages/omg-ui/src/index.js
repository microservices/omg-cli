import Vue from 'vue'
import VueTimeago from 'vue-timeago'

import OMG from './views/index.vue'
import store from './store/index.ts'

import 'normalize.css'

Vue.use(VueTimeago, {
  name: 'Timeago',
})

new Vue({
  store,
  render: h => h(OMG),
}).$mount('#app')
