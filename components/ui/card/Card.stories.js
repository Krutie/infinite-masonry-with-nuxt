// card.stories.js

import Card from "./Card.vue";

// Primary Card
import CardImage from "./CardImage.vue";
import CardHeader from "./CardHeader.vue";
import CardFooter from "./CardFooter.vue";

// Describe card component
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
	 <!-- ... -->
  </card>
`,
});

// named export Primary to create respective story
export const Primary = PrimaryTemplate.bind({});