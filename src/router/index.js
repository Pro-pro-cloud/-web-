import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Country=()=>import("../views/country/Country")
const Province=()=>import("../views/province/Province")
const ProMap=()=>import("../views/province/mapVue/proMap.vue")
const routes = [
  {
    path: '',
    redirect:'/country'
  },
  {
    path:'/country',
    component:Country
  },
  {
    path:'/province',
    component:Province
  },


  {
    path:'/provincemap',
    component:ProMap
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
