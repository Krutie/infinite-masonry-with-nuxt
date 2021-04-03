export { default as Card } from '../../components/ui/card/Card.vue'
export { default as CardContent } from '../../components/ui/card/CardContent.vue'
export { default as CardFooter } from '../../components/ui/card/CardFooter.vue'
export { default as CardHeader } from '../../components/ui/card/CardHeader.vue'
export { default as CardImage } from '../../components/ui/card/CardImage.vue'
export { default as PageSubtitle } from '../../components/ui/typography/PageSubtitle.vue'
export { default as PageTitle } from '../../components/ui/typography/PageTitle.vue'
export { default as Svg1 } from '../../components/svg/Svg1.vue'
export { default as Svg2 } from '../../components/svg/Svg2.vue'
export { default as Svg3 } from '../../components/svg/Svg3.vue'

export const LazyCard = import('../../components/ui/card/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyCardContent = import('../../components/ui/card/CardContent.vue' /* webpackChunkName: "components/card-content" */).then(c => wrapFunctional(c.default || c))
export const LazyCardFooter = import('../../components/ui/card/CardFooter.vue' /* webpackChunkName: "components/card-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyCardHeader = import('../../components/ui/card/CardHeader.vue' /* webpackChunkName: "components/card-header" */).then(c => wrapFunctional(c.default || c))
export const LazyCardImage = import('../../components/ui/card/CardImage.vue' /* webpackChunkName: "components/card-image" */).then(c => wrapFunctional(c.default || c))
export const LazyPageSubtitle = import('../../components/ui/typography/PageSubtitle.vue' /* webpackChunkName: "components/page-subtitle" */).then(c => wrapFunctional(c.default || c))
export const LazyPageTitle = import('../../components/ui/typography/PageTitle.vue' /* webpackChunkName: "components/page-title" */).then(c => wrapFunctional(c.default || c))
export const LazySvg1 = import('../../components/svg/Svg1.vue' /* webpackChunkName: "components/svg1" */).then(c => wrapFunctional(c.default || c))
export const LazySvg2 = import('../../components/svg/Svg2.vue' /* webpackChunkName: "components/svg2" */).then(c => wrapFunctional(c.default || c))
export const LazySvg3 = import('../../components/svg/Svg3.vue' /* webpackChunkName: "components/svg3" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
