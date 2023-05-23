import { component$ } from "@builder.io/qwik";

import ImageCarousel from "~/components/imageCarousel";

export default component$(() => (
  <div class="grid w-full justify-center">
    <ImageCarousel />
  </div>
))