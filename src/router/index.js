import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Country=()=>import("../views/country/Country")
const Province=()=>import("../views/province/Province")
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
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
