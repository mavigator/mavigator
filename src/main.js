import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'flexboxgrid/dist/flexboxgrid.min.css'

Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
