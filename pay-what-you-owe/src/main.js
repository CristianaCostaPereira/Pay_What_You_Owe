import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

Vue.use(VueSweetalert2)

new Vue({
  render: h => h(App),
}).$mount('#app')