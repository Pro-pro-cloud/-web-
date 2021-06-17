import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Country=()=>import("../views/country/Country")
const Province=()=>import("../views/province/Province")
const ProDetail=()=>import("../views/province/proDetail/proDetail.vue")
const ProTable=()=>import("../views/province/table/proTable.vue")
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
    component:Province,
    redirect : '/province/proTable',
    children : [
      {
        path:'/province/proDetail',
        component:ProDetail
      },
      {
        path: '/province/proTable',
        component:ProTable
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
