import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由重定向方法一（推荐）：
// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next('/home')
//   } else {
//     next()
//   }
// })

export default router
