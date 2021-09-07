import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return new Promise(resolve => {
      resolve({ left: 0, top: 0 })
    })
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/index.vue"),
      meta: {
        title: "MindfFly 灵机一动"
      }
    },{
      path: "/about",
      name: "About",
      component: () => import("@/views/about.vue"),
      meta: {
        title: "MindfFly 灵机一动"
      }
    }
  ]
})

export default router
