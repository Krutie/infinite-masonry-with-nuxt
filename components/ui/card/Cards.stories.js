import Card from "./Card.vue";

// Primary Card
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";

export default {
  title: "JS/Card",
  component: Card
}

// Define template for Primary Story
const PrimaryTemplate = () => ({
  components: { Card, CardHeader, CardFooter, CardImage },
  template: `
  <card
    padding="3"
		primary-color="green-400"
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
      invert="true"
			name="Card Design Project"
      category="Collection of card designs"
    >
    </card-footer>
  </card>
`,
});// named export Primary to create respective story
export const Primary = PrimaryTemplate.bind({});