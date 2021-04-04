// card.stories.js

import Card from "./Card.vue";

// Primary Card
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";

// SVG Card
import CardContent from "./CardContent.vue";

// import config
import primaryConfig from './docs/primaryConfig.json'
import svgConfig from './docs/svgConfig.json'

// import readme
import readme from "./docs/readme.md";

// Describe card component
export default {
  title: "JS/Card",
  component: Card,
  args: primaryConfig.args,
  argTypes: primaryConfig.argTypes,
  decorators: [
    () => ({
      template:
        '<div style="display: flex; align-items: center; justify-content: center; height: 100vh;"><story /></div>'
    })
  ],
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  }
}

// Define template for Primary Story
const PrimaryTemplate = (args, { argTypes }) => ({
  components: { Card, CardHeader, CardFooter, CardImage },
  props: Object.keys(argTypes),
  template: `
  <card
    :primary-color="primaryColor"
    :padding="padding"
    :border-width="borderWidth"
    :border-radius="borderRadius"
    :card-bg="cardBg"
		class="w-72"
  >
	  <card-header>
      <span> Tailwind </span>
      <span> Masonry Grid </span>
    </card-header>
    <card-image src="user.png" gutter> </card-image>
    <card-header class="text-gray-700">
      <span> Infinite Loading </span>
      <span> Nuxt </span>
    </card-header>
    <card-footer
      :invert="invert"
			:name="name"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});

// named export Primary to create respective story
export const Primary = PrimaryTemplate.bind({});


// SVG
// Define template for SVG Story
const SVGTemplate = (args, { argTypes }) => ({
  components: { Card, CardContent, CardFooter },
  props: Object.keys(argTypes),
  template: `
  <card
    :padding="padding"
		:primary-color="primaryColor"
		:secondary-color="secondaryColor"
		:border-width="borderWidth"
		:border-radius="borderRadius"
		:card-bg="cardBg"
		class="w-72"
  >
    <card-content>
			<components :is="svgComponent" :color="primaryColor" />
    </card-content>
    <card-footer
      :invert="invert"
      :name="name"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});
// named export Primary to create respective story
export const SVG = SVGTemplate.bind({});
SVG.args = svgConfig.args;
SVG.argTypes = svgConfig.argTypes;


// Gradient
// Define template for SVG Story
const GradientTemplate = () => ({})
// named export Primary to create respective story
export const Gradient = GradientTemplate.bind({});