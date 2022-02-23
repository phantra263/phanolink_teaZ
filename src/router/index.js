import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/pages/home'
import ProductCate from '../views/pages/productCate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product-cate/:id:name',
    name: 'Product cate',
    component: ProductCate,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
