import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LigtasPoints from '../views/Quiz/LigtasPoints.vue'
import LPResults from '../views/Quiz/LigtasPointsResults.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ligtas_points_meter',
    name: 'Ligtas Points',
    component: LigtasPoints
  },
  {
    path: '/ligtas_points_meter_results/:results_data',
    name: 'Ligtas Points Results',
    component: LPResults
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
