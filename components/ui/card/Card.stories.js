import Card from "./Card.vue";
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";
import CardContent from "./CardContent.vue";
import PageSubtitle from "../typography/PageSubtitle.vue";

import readme from './docs/readme.md';

import config from './docs/CardConfig.json';

export default {
	title: "JS/Card",
	component: Card,
	subcomponents: { CardImage, CardHeader, CardFooter, CardContent, PageSubtitle },
	decorators: [
		() => ({
			template:
				'<div style="display: flex; align-items: center; justify-content: center;"><story /></div>',
		}),
	],
	parameters: {
		docs: {
			description: {
				component: readme
			}
		},
	},
	argTypes: config.argtypes
};

// Primary
const PrimaryTemplate = (args, { argTypes }) => ({
	components: { Card, CardHeader, CardFooter, CardImage },
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
    <card-header v-if="header">
      <span> Tailwind </span>
      <span> Masonry Grid </span>
    </card-header>
    <card-image src="user.png" gutter> </card-image>
    <card-header class="text-gray-700">
      <span> Infinite Loading </span>
      <span> Nuxt </span>
    </card-header>
    <card-footer
			v-if="footer"
      :invert="invert"
      name="CARD DESIGN PROJECT"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});

export const Primary = PrimaryTemplate.bind({});
Primary.args = config.primaryargs
Primary.argTypes = config.primary
// Ref - hide controls
// https://github.com/storybookjs/storybook/blob/next/addons/controls/README.md#how-can-i-disable-controls-for-certain-fields-on-a-particular-story 

// SVG
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
      name="CARD DESIGN PROJECT"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});

export const SVG = SVGTemplate.bind({});
SVG.args = config.svgargs
SVG.argTypes = config.svg

// Gradient
const GradientTemplate = (args, { argTypes }) => ({
	components: { Card, CardContent, CardFooter, PageSubtitle },
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
    <card-content :gradient="gradient">
      <page-subtitle class="uppercase font-title" title="CARD DESIGN PROJECT">
      </page-subtitle>
    </card-content>
    <card-footer
      class="text-gray-800"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});

export const Gradient = GradientTemplate.bind({});
Gradient.args = config.gradientargs
Gradient.argTypes = config.gradient
Gradient.parameters = {
	docs: { 
		source: { 
			code: '`<Card> ... </Card>`'
		},
		description: {
			component: "You may add readme file for Gradient Card here."
		}
	},
};