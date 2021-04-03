import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_5c12160b from 'nuxt_plugin_plugin_5c12160b' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_pluginclient_4733e407 from 'nuxt_plugin_pluginclient_4733e407' // Source: ./content/plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_a62554e2 from 'nuxt_plugin_pluginserver_a62554e2' // Source: ./content/plugin.server.js (mode: 'server')
import nuxt_plugin_plugin_4ab11d6c from 'nuxt_plugin_plugin_4ab11d6c' // Source: ./composition-api/plugin.js (mode: 'all')
import nuxt_plugin_vueawesome_b4833434 from 'nuxt_plugin_vueawesome_b4833434' // Source: ../plugins/vue-awesome (mode: 'all')
import nuxt_plugin_vuemasonrycss_ffbe5304 from 'nuxt_plugin_vuemasonrycss_ffbe5304' // Source: ../plugins/vue-masonry-css (mode: 'client')
import nuxt_plugin_vueinfiniteloading_ba354f40 from 'nuxt_plugin_vueinfiniteloading_ba354f40' // Source: ../plugins/vue-infinite-loading (mode: 'client')
import nuxt_plugin_vueaos_163ab908 from 'nuxt_plugin_vueaos_163ab908' // Source: ../plugins/vue-aos (mode: 'client')
import nuxt_plugin_meta_af93214c from 'nuxt_plugin_meta_af93214c' // Source: ./composition-api/meta.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Nuxt.js Infinite masonry layout with Nuxt","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"}],"link":[{"hid":"gf-prefetch","rel":"dns-prefetch","href":"https:\u002F\u002Ffonts.gstatic.com\u002F"},{"hid":"gf-preconnect","rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com\u002F","crossorigin":""},{"hid":"gf-preload","rel":"preload","as":"style","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto&family=Roboto+Condensed"}],"style":[],"script":[{"hid":"gf-script","innerHTML":"(function(){var l=document.createElement('link');l.rel=\"stylesheet\";l.href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto&family=Roboto+Condensed\";document.querySelector(\"head\").appendChild(l);})();"}],"noscript":[{"hid":"gf-noscript","innerHTML":"\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Roboto&family=Roboto+Condensed\"\u003E"}],"__dangerouslyDisableSanitizersByTagID":{"gf-script":["innerHTML"],"gf-noscript":["innerHTML"]}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_5c12160b === 'function') {
    await nuxt_plugin_plugin_5c12160b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_4733e407 === 'function') {
    await nuxt_plugin_pluginclient_4733e407(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_a62554e2 === 'function') {
    await nuxt_plugin_pluginserver_a62554e2(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_4ab11d6c === 'function') {
    await nuxt_plugin_plugin_4ab11d6c(app.context, inject)
  }

  if (typeof nuxt_plugin_vueawesome_b4833434 === 'function') {
    await nuxt_plugin_vueawesome_b4833434(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuemasonrycss_ffbe5304 === 'function') {
    await nuxt_plugin_vuemasonrycss_ffbe5304(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueinfiniteloading_ba354f40 === 'function') {
    await nuxt_plugin_vueinfiniteloading_ba354f40(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueaos_163ab908 === 'function') {
    await nuxt_plugin_vueaos_163ab908(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_af93214c === 'function') {
    await nuxt_plugin_meta_af93214c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
