import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'boxicons/css/boxicons.min.css'
import 'flexboxgrid/dist/flexboxgrid.min.css';

Vue.config.productionTip = false

Vue.use(Vuesax, {
  primary:'#5b3cc4',
  success:'rgb(23, 201, 100)',
  danger:'rgb(242, 19, 93)',
  warning:'rgb(255, 130, 0)',
  dark:'rgb(36, 33, 69)'
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
