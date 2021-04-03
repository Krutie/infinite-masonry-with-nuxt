import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45bf1b07 = () => interopDefault(import('../pages/composition-api-v1.vue' /* webpackChunkName: "pages/composition-api-v1" */))
const _45cd3288 = () => interopDefault(import('../pages/composition-api-v2.vue' /* webpackChunkName: "pages/composition-api-v2" */))
const _45db4a09 = () => interopDefault(import('../pages/composition-api-v3.vue' /* webpackChunkName: "pages/composition-api-v3" */))
const _50dbce0a = () => interopDefault(import('../pages/regular-nuxt.vue' /* webpackChunkName: "pages/regular-nuxt" */))
const _2f07254c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/composition-api-v1",
    component: _45bf1b07,
    name: "composition-api-v1"
  }, {
    path: "/composition-api-v2",
    component: _45cd3288,
    name: "composition-api-v2"
  }, {
    path: "/composition-api-v3",
    component: _45db4a09,
    name: "composition-api-v3"
  }, {
    path: "/regular-nuxt",
    component: _50dbce0a,
    name: "regular-nuxt"
  }, {
    path: "/",
    component: _2f07254c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
