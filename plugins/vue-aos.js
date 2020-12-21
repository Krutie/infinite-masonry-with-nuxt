import AOS from "aos";
import "aos/dist/aos.css";

import { defineNuxtPlugin } from "@nuxtjs/composition-api";

export default defineNuxtPlugin(({ app }) => {
  app.AOS = new AOS.init({
    // offset: 50,
    // delay: 50,
    // duration: 500,
    // mirror: "true",
    // anchorPlacement: "top-center",
    easing: "ease-in-out",
  });
});
