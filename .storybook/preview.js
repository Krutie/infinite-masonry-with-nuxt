export * from '~~/.nuxt-storybook/storybook/preview.js'

export const decorators = [(story) => ({
  components: { story },
  template: '<story />'
  // template: '<div style="margin: 3em;"><story /></div>'
})];
