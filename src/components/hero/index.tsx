import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  return (
    <div class="w-full grid grid-cols-2">
      <div class="grid grid-rows-2 relative">
        <div class="relative flex flex-col justify-end">
          <h3 class="absolute p-4 bg-opacity-50">Title</h3>

          <Image
            class="object-cover h-full border-4 border-r-2 border-b-2 border-[--accent-green]"
            layout="fullWidth"
            src="https://picsum.photos/1920/1080"
          />
        </div>
        <div class="relative flex flex-col justify-end">
          <h3 class="absolute p-4">Title</h3>

          <Image
            class="object-cover h-full border-4 border-t-2 border-r-2 border-[--accent-green]"
            layout="fullWidth"
            src="https://picsum.photos/1920/1080"
          />
        </div>
      </div>
      <div class="relative flex flex-col justify-end">
        <h3 class="absolute p-4">Title</h3>

        <Image
          class="object-cover border-4 border-l-2 border-[--accent-green]"
          layout="fullWidth"
          src="https://picsum.photos/1080/1920"
        />
      </div>
    </div>
  );
});
