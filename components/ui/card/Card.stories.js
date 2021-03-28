import Card from "./Card.vue";
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";
import CardContent from "./CardContent.vue";
import PageSubtitle from "../typography/PageSubtitle.vue";

export default {
	component: Card,
	parameters: {
		layout: "centered",
	},
	decorators: [() => ({ template: '<div style="display: flex; align-items: center; justify-content: center;"><story /></div>' })],
	title: "Components/Card",
	argTypes: {
		borderRadius: {
			control: {
				type: "select",
				options: ["2xl", "xlg", "lg", "md"],
			},
			defaultValue: "xlg",
		},
		borderWidth: {
			control: {
				type: "select",
				options: [0, 2, 4],
			},
			defaultValue: 2,
		},
		header: {
			control: 'boolean',
			defaultValue: "true",
		},
		footer: {
			control: 'boolean',
			defaultValue: "true",
		},
		invert: {
			table: {
				category: "Card-Footer",
			},
			control: 'boolean',
			defaultValue: true,
		},
		gradient: {
			table: {
				category: "Card-Content",
			},
			control: 'boolean',
			defaultValue: true,
		},
	}
};

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
    <card-header>
      <span class="text-green-400"> Tailwind </span>
      <span> Masonry Grid </span>
    </card-header>
    <card-image src="user.png" gutter> </card-image>
    <card-header class="text-gray-700">
      <span> Infinite Loading </span>
      <span> Nuxt </span>
    </card-header>
    <card-footer
      :invert="invert"
      name="CARD DESIGN PROJECT"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`
})

// Primary 
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
	padding: 3,
	primaryColor: "green-400",
};


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
      <svg-1 :color="primaryColor"/>
    </card-content>
    <card-footer
      :invert="invert"
      name="CARD DESIGN PROJECT"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`
})

// SVG
export const SVG = SVGTemplate.bind({});
SVG.args = {
	primaryColor: "red-400", 
	padding: 1, 
	borderWidth: 2, 
	invert: false
};

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
`
})

// Gradient
export const Gradient = GradientTemplate.bind({});
Gradient.args = {
	borderRadius: "2xl", 
	padding: 5, 
	borderWidth: 8, 
	gradient: true
};