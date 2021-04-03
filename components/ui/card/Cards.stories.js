import Card from "./Card.vue";

// Primary Card
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";

export default {
  title: "JS/Card",
  component: Card,
  args: {
    "primaryColor": "green-400",
    "padding": 3,
    "borderWidth": 2,
    "invert": true,
    "title": "Card Design Project"
  }
}

// Define template for Primary Story
const PrimaryTemplate = (args, { argTypes }) => ({
  components: { Card, CardHeader, CardFooter, CardImage },
  props: Object.keys(argTypes),
  template: `
  <card
    :padding="padding"
		:primary-color="primaryColor"
    :border-radius="borderRadius"
    :border-width="borderWidth"
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
			:name="title"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});// named export Primary to create respective story
export const Primary = PrimaryTemplate.bind({});