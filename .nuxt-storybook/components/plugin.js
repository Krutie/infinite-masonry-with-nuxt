import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  Card: () => import('../../components/ui/card/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  CardContent: () => import('../../components/ui/card/CardContent.vue' /* webpackChunkName: "components/card-content" */).then(c => wrapFunctional(c.default || c)),
  CardFooter: () => import('../../components/ui/card/CardFooter.vue' /* webpackChunkName: "components/card-footer" */).then(c => wrapFunctional(c.default || c)),
  CardHeader: () => import('../../components/ui/card/CardHeader.vue' /* webpackChunkName: "components/card-header" */).then(c => wrapFunctional(c.default || c)),
  CardImage: () => import('../../components/ui/card/CardImage.vue' /* webpackChunkName: "components/card-image" */).then(c => wrapFunctional(c.default || c)),
  PageSubtitle: () => import('../../components/ui/typography/PageSubtitle.vue' /* webpackChunkName: "components/page-subtitle" */).then(c => wrapFunctional(c.default || c)),
  PageTitle: () => import('../../components/ui/typography/PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c)),
  Svg1: () => import('../../components/svg/Svg1.vue' /* webpackChunkName: "components/svg1" */).then(c => wrapFunctional(c.default || c)),
  Svg2: () => import('../../components/svg/Svg2.vue' /* webpackChunkName: "components/svg2" */).then(c => wrapFunctional(c.default || c)),
  Svg3: () => import('../../components/svg/Svg3.vue' /* webpackChunkName: "components/svg3" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
