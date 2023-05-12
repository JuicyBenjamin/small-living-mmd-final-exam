import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <section>
      <h2>Header</h2>
      <div class="grid grid-cols-[1fr_3fr] gap-4">
        <div class="relative grid grid-rows-3 gap-4">
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image class="object-cover h-full aspect-[4/3]" layout="fullWidth" src="https://picsum.photos/seed/picsum/200/300" />
          </div>
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image class="object-cover h-full aspect-[4/3]" layout="fullWidth" src="https://picsum.photos/seed/picsum/200/300" />
          </div>
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image class="object-cover h-full aspect-[4/3]" layout="fullWidth" src="https://picsum.photos/seed/picsum/200/300" />
          </div>
        </div>
        <div>
          <div class="relative flex flex-col justify-end">
            <h3 class="absolute">Article Title</h3>
            <Image class="object-cover aspect-square" layout="fullWidth" src="https://picsum.photos/seed/picsum/200/300" />
          </div>
        </div>
      </div>
    </section>
)})